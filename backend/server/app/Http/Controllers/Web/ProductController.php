<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;


/**
 * @OA\Tag(
 *     name="Products",
 *     description="API Endpoints for Product operations"
 * )
 */

 /**
 * @OA\Schema(
 *     schema="Product",
 *     type="object",
 *     title="Product",
 *     description="Product model",
 *     @OA\Property(property="id", type="integer", description="Product ID"),
 *     @OA\Property(property="name", type="string", description="Product name"),
 *     @OA\Property(property="category", type="string", description="Product category"),
 *     @OA\Property(property="subcategory", type="string", description="Product subcategory"),
 *     @OA\Property(property="description", type="string", description="Product description"),
 *     @OA\Property(property="price", type="number", format="float", description="Product price"),
 *     @OA\Property(property="image", type="string", description="Product image URL"),
 *     @OA\Property(property="extra_feature", type="string", description="Product extra feature"),
 *     @OA\Property(property="created_at", type="string", format="date-time", description="Creation timestamp"),
 *     @OA\Property(property="updated_at", type="string", format="date-time", description="Update timestamp")
 * )
 */

class ProductController extends Controller
{

    /**
     * @OA\Get(
     *     path="/api/products/category={category}",
     *     tags={"Products"},
     *     summary="Retrieve products by category",
     * @OA\Parameter(
     *         name="category",
     *         in="path",
     *         required=true,
     *         description="The category of the products to retrieve",
     *         example="accesories",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="List of products by category",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Product")
     *         )
     *     )
     * )
     */
    public function getProductsByCategory(Request $request){

        $category = $request->category;
        $productsByCategory = Product::where('category',$category)-> get();
        return $productsByCategory;
    }

     /**
     * @OA\Get(
     *     path="/api/products",
     *     tags={"Products"},
     *     summary="Retrieve all products",
     *     @OA\Response(
     *         response=200,
     *         description="List of all products",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Product")
     *         )
     *     )
     * )
     */

    public function getAllProducts(Request $request){

       
        $allProducts = Product::get();
        return $allProducts;
    }

    /**
     * @OA\Get(
     *     path="/api/products/subcategory={subcategory}",
     *     tags={"Products"},
     *     summary="Retrieve products by subcategory",
     * @OA\Parameter(
     *         name="subcategory",
     *         in="path",
     *         required=true,
     *         description="The subcategory of the products to retrieve",
     *         example="colombia",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="List of products by subcategory",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Product")
     *         )
     *     )
     * )
     */

    public function getProductsBySubcategory(Request $request){

        $subcategory = $request->subcategory;
        $productsBySubcategory = Product::where('subcategory',$subcategory)-> get();
        return $productsBySubcategory;
    }

    /**
     * @OA\Get(
     *     path="/api/products/feature={feature}",
     *     tags={"Products"},
     *     summary="Retrieve products by extra feature",
     * @OA\Parameter(
     *         name="feature",
     *         in="path",
     *         required=true,
     *         description="The extra feature of the products to retrieve",
     *         example="topseller",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="List of products by extra feature",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Product")
     *         )
     *     )
     * )
     */

    public function getProductsByExtraFeature(Request $request){

        $feature = $request->feature;
        $productsByExtraFeature = Product::where('extra_feature',$feature)-> get();
        return $productsByExtraFeature;
    }

    /**
     * @OA\Get(
     *     path="/api/products/id={id}",
     *     tags={"Products"},
     *     summary="Retrieve product by ID",
     * @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="The ID of the product to retrieve",
     *         example="7",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Product details",
     *         @OA\JsonContent(ref="#/components/schemas/Product")
     *     )
     * )
     */

    public function getProductByID(Request $request){

        $productid = $request->productid;
        $productDetails = Product::where('id',$productid)-> get();
        return $productDetails;
    }

    /**
 * @OA\Get(
 *     path="/api/products/search={input}",
 *     tags={"Products"},
 *     summary="Search products by name",
 *     @OA\Parameter(
 *         name="input",
 *         in="path",
 *         required=true,
 *         description="The name or partial name of the product to search for",
 *         example="natural",
 *         @OA\Schema(type="string")
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Search results",
 *         @OA\JsonContent(
 *             type="array",
 *             @OA\Items(ref="#/components/schemas/Product")
 *         )
 *     ),
 *     @OA\Response(
 *         response=404,
 *         description="No products found",
 *         @OA\JsonContent(
 *             @OA\Property(property="error", type="string", example="No products found")
 *         )
 *     )
 * )
 */

    public function searchProducts(Request $request){
        $input = $request-> input;
        $results = Product::where("name", "LIKE", "%{$input}%")->get();
        return $results;

    }
}
