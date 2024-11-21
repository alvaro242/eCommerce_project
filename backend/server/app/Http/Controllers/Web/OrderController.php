<?php


 namespace App\Http\Controllers\Web;

 use App\Http\Controllers\Controller;
 use Illuminate\Http\Request;
 use App\Models\Order;
 use App\Models\Product;
 use App\Models\Order_products;
 use Auth;
 
 
 class OrderController extends Controller
 {
     public function getMyOrders()
     {
         $User = Auth::User();
         $orders = Order::where("userID", $User["id"])->get();
         return $orders;
     }
 
   
     public function getProductsByOrder(Request $request)
     {
         $User = Auth::User();
         $UserID = $User["id"];
         $result = Order::where("id", $request->orderRef)->get();
         $ownerID = $result[0]["userID"];
 
         if ($UserID == $ownerID) {
             $productsOrder = Order_products::where("order_number", $request->orderRef)->get();
 
             foreach ($productsOrder as $item) {
                 $match = Product::where("sku", $item["product_SKU"])->first();
                 $name = $match["name"];
                 $item->name = $name;
             }
 
             return $productsOrder;
         }
     }
 }
 