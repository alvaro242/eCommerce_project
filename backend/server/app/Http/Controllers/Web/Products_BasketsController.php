<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductsBasket;
use App\Models\Product;
use App\Models\User;
use Auth;

/**
 * @OA\Tag(
 *     name="Shopping Basket",

 * )
 */

class Products_BasketsController extends Controller
{

    
 /**
     * @OA\Post(
     *     path="/api/addtobasket",
     *     summary="Add product to shopping basket",
     *     tags={"Shopping Basket"},
     *     security={{ "bearerAuth": {} }},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"user","sku","qty","ground"},
     *             @OA\Property(property="user", type="string", example="user@example.com"),
     *             @OA\Property(property="sku", type="string", example="PROD-001"),
     *             @OA\Property(property="qty", type="integer", example=1),
     *             @OA\Property(property="ground", type="number", format="float", example=2.50)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Product added successfully",
     *         @OA\JsonContent(type="boolean")
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthenticated"
     *     )
     * )
     */
    public function addToBasket(Request $request)
    {

        $user = $request->input("user");
        $sku = $request->input("sku");
        $qty = $request->input("qty");
        $ground = $request->input("ground");
        $productFromDB = Product::where("sku", $sku)->get();
        $itemPrice = "0.00";
        $totalPrice = "0.00";
        if ($productFromDB[0]["offer_price"] == "") {
            $itemPrice = $productFromDB[0]["price"];

        } else {
            $itemPrice = $productFromDB[0]["offer_price"];

        }

        $totalPrice = ($itemPrice * $qty) + ($qty * $ground);


        $pic = $productFromDB[0]["image_nobackground"];
        $name = $productFromDB[0]["name"];



        $insertToDB = ProductsBasket::insert([

            "user" => $user,
            "sku" => $sku,
            "ground" => $ground,
            "qty" => $qty,
            "unit_price" => $itemPrice,
            "total_price" => $totalPrice,
            "image_nobackground" => $pic,
            "product_name" => $name

        ]);

        return $insertToDB;

    }

    /**
     * @OA\Get(
     *     path="/api/basket",
     *     summary="Get user's shopping basket",
     *     tags={"Shopping Basket"},
     *     security={{ "bearerAuth": {} }},
     *     @OA\Response(
     *         response=200,
     *         description="List of basket items",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer"),
     *                 @OA\Property(property="user", type="string"),
     *                 @OA\Property(property="sku", type="string"),
     *                 @OA\Property(property="ground", type="number"),
     *                 @OA\Property(property="qty", type="integer"),
     *                 @OA\Property(property="unit_price", type="number"),
     *                 @OA\Property(property="total_price", type="number"),
     *                 @OA\Property(property="image_nobackground", type="string"),
     *                 @OA\Property(property="product_name", type="string")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthenticated"
     *     )
     * )
     */
    public function getBasket()
    {
        $User = Auth::User();
        $email = $User["email"];

        $products = ProductsBasket::where("user", $email)->get();

        // $productsBasket = ProductsBasket::where("user", $emailUser);

        return $products;
    }
 /**
     * @OA\Delete(
     *     path="/api/removebasket={id}",
     *     summary="Remove item from shopping basket",
     *     tags={"Shopping Basket"},
     *     security={{ "bearerAuth": {} }},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"id"},
     *             @OA\Property(property="id", type="integer", example=1)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Item removed successfully",
     *         @OA\JsonContent(type="boolean")
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthenticated"
     *     )
     * )
     */
    public function RemoveCartList(Request $request)
    {
        $User = Auth::User();
        $id = $request->id;
        $owner = $User["email"];
        $action = ProductsBasket::where('id', $id)->where("user", $owner)->delete();
        return $action;

    } // End Method 

}

