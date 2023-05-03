<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;


/**
 * @OA\Get(
 *     path="/products",
 * tags={"products"},
 *     @OA\Response(response="200", description="Obtain products")
 * )
 * 
 *  @OA\Get(
 *     path="/products/category={category}",
 * tags={"products"},
 *     @OA\Response(response="200", description="Obtain products by category")
 * )
 * 
  * @OA\Get(
 *     path="/products/subcategory={subcategory}",
 * tags={"products"},
 *     @OA\Response(response="200", description="Obtain products by subcategory")
 * )
 * 
 *  @OA\Get(
 *     path="/products/feature={feature}",
 * tags={"products"},
 *     @OA\Response(response="200", description="Obtain products by extra feature")
 * )
 * 
 *  *  @OA\Get(
 *     path="/products/id={productid}",
 * tags={"products"},
 *     @OA\Response(response="200", description="Obtain products by product ID")
 * )
 * 
 * @OA\Get(
 *     path="/products/search={input}",
 * tags={"products"},
 *     @OA\Response(response="200", description="Obtain products by search input")
 * )
 */

class ProductController extends Controller
{
    public function getProductsByCategory(Request $request){

        $category = $request->category;
        $productsByCategory = Product::where('category',$category)-> get();
        return $productsByCategory;
    }

    public function getAllProducts(Request $request){

       
        $allProducts = Product::get();
        return $allProducts;
    }

    public function getProductsBySubcategory(Request $request){

        $subcategory = $request->subcategory;
        $productsBySubcategory = Product::where('subcategory',$subcategory)-> get();
        return $productsBySubcategory;
    }

    public function getProductsByExtraFeature(Request $request){

        $feature = $request->feature;
        $productsByExtraFeature = Product::where('extra_feature',$feature)-> get();
        return $productsByExtraFeature;
    }

    public function getProductByID(Request $request){

        $productid = $request->productid;
        $productDetails = Product::where('id',$productid)-> get();
        return $productDetails;
    }

    public function searchProducts(Request $request){
        $input = $request-> input;
        $results = Product::where("name", "LIKE", "%{$input}%")->get();
        return $results;

    }
}
