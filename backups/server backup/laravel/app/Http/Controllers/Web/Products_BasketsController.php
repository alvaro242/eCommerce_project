<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductsBasket;  
use App\Models\Product; 
use App\Models\User;
use Auth;

/**
 * @OA\post(
 *     path="/addtobasket",
 * tags={"basket"},
 *     @OA\Response(response="200", description="send the following elemets to api: user, sku, qty, ground(0/1)")
 * )
 * 
 * 
 * *  @OA\get(
 *     path="/getbasket",
 * tags={"basket"},
 *     @OA\Response(response="200", description="Requires token. Return items in basket for the logged in user")
 * )
 * *  @OA\Delete(
 *     path="/removebasket={id}",
 * tags={"basket"},
 *     @OA\Response(response="200", description="Requires token. 1 if item deleted from basket")
 * )
 */

class Products_BasketsController extends Controller
{
    public function addToBasket(Request $request){ 

        $user = $request->input("user");
        $sku= $request->input("sku");
        $qty= $request->input("qty");
        $ground= $request->input("ground");
        $productFromDB= Product::where("sku", $sku)->get();
        $itemPrice="0.00";
        $totalPrice="0.00";
        if ($productFromDB[0]["offer_price"] == ""){
            $itemPrice = $productFromDB[0]["price"];
            
        }

        else{
            $itemPrice = $productFromDB[0]["offer_price"];
           
        }

        $totalPrice = ($itemPrice * $qty) + ($qty * $ground);

       
        $pic = $productFromDB[0]["image_nobackground"];
        $name = $productFromDB[0]["name"];
    


        $insertToDB = ProductsBasket::insert([

            "user" => $user,
            "sku" => $sku,
            "ground" =>$ground,
            "qty"=> $qty,
            "unit_price" => $itemPrice,
            "total_price" => $totalPrice,
            "image_nobackground"=>$pic,
            "product_name"=>$name

        ]);

        return $insertToDB;
    
}

public function getBasket(){
    $User = Auth::User();
    $email = $User["email"];

    $products = ProductsBasket::where("user", $email)-> get();

     // $productsBasket = ProductsBasket::where("user", $emailUser);

    return $products;
}

public function RemoveCartList(Request $request){
    $User = Auth::User();
    $id = $request->id;
    $owner = $User["email"];
    $action = ProductsBasket::where('id',$id)->where("user",$owner)->delete();
    return $action;

}// End Method 
 
}