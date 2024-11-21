<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\ProductsBasket;
use App\Models\Product;
use App\Models\Order;
use App\Models\Order_products;
use Illuminate\Support\Facades\DB;

/** 
 *  @OA\Post( 
 * path="/api/neworder", 
 * summary="Create a new order", 
 * description="Endpoint to create a new order with the items in the user's basket.", 
 * tags={"Checkout"}, 
 * @OA\RequestBody( 
 * required=true, 
 * @OA\JsonContent( 
 * required={"delivery_address", "billing_address", "subtotal", "total", "tax_percentage", "payment_method"}, 
 * @OA\Property(property="delivery_address", type="string", description="Delivery address"), 
 * @OA\Property(property="billing_address", type="string", description="Billing address"), 
 * @OA\Property(property="subtotal", type="number", format="float", description="Subtotal amount"), 
 * @OA\Property(property="total", type="number", format="float", description="Total amount"), 
 * @OA\Property(property="tax_percentage", type="number", format="float", description="Tax percentage"), 
 * @OA\Property(property="payment_method", type="string", description="Payment method") * ) * ), 
 * @OA\Response( * response=200, * description="Order created successfully", 
 * @OA\JsonContent( * @OA\Property(property="orderID", type="integer", description="Order ID") 
 * ) * ), * @OA\Response( * response=400, * description="No items in the basket", 
 * @OA\JsonContent( * @OA\Property(property="error", type="string", example="no items") * ) * ) * ) */

class CheckoutController extends Controller
{
    public function createNewOrder(Request $request)
    {


        $User = Auth::User();
        $userID = $User["id"];
        $deliveryAddress = $request->input('delivery_address');
        $billingAddress = $request->input('billing_address');
        $subtotal = $request->input('subtotal');
        $total = $request->input('total');
        $status = "unpaid";
        $tax_percentage = $request->input('tax_percentage');
        $paymentMenthod = $request->input('payment_method');

        $basketItems = ProductsBasket::where("user", $User["email"])->get();

        if (count($basketItems) !== 0) {

            $objectToOrderTable = Order::insert([

                'userID' => $userID,
                'delivery_address' => $deliveryAddress,
                'billing_address' => $billingAddress,
                'subtotal' => $subtotal,
                'total' => $total,
                'status' => $status,
                'tax_percentage' => $tax_percentage,
                'payment_method' => $paymentMenthod,

            ]);

            $orderID = DB::getPdo()->lastInsertId();



            foreach ($basketItems as $item) {

                $productInfo = Product::where("sku", $item["sku"])->first();
                $stockBeforeOrder = $productInfo["stock"];

                Order_products::insert([
                    'order_number' => $orderID,
                    'product_SKU' => $item["sku"],
                    'price' => $item["total_price"],
                    'ground' => $item["ground"],
                    'qty' => $item["qty"]
                ]);

                $stockAfterOrder = $stockBeforeOrder - $item["qty"];

                $productInfo->stock = $stockAfterOrder;
                $productInfo->save(); //stock updated





            }


            if ($objectToOrderTable == 1) {
                ProductsBasket::where("user", $User["email"])->delete();
                //empty caritem table for that user
                return $orderID;
            }

        } else
            return "no items";

        return $objectToOrderTable;

    }
}