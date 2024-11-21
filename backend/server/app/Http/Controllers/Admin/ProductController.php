<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

/**
 * @OA\Tag(
 *     name="Products",
 *     description="API Endpoints for Product operations"
 * )
 */

class ProductController extends Controller
{

/**
     * @OA\Get(
     *     path="/api/products/search={input}",
     *     tags={"Products"},
     *     summary="Search products by name",
     *     @OA\Parameter(
     *         name="input",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Search results",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer"),
     *                 @OA\Property(property="name", type="string"),
     *                 @OA\Property(property="category", type="string"),
     *                 @OA\Property(property="subcategory", type="string"),
     *                 @OA\Property(property="description", type="string"),
     *                 @OA\Property(property="price", type="number"),
     *                 @OA\Property(property="image", type="string"),
     *                 @OA\Property(property="extra_feature", type="string"),
     *                 @OA\Property(property="created_at", type="string", format="datetime"),
     *                 @OA\Property(property="updated_at", type="string", format="datetime")
     *             )
     *         )
     *     )
     * )
     */

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
