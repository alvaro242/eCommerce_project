<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subcategory;
use App\Models\Category;

/**
 * @OA\Tag(
 *     name="Subcategories",
 *     description="API Endpoints for Subcategory operations"
 * )
 */

 

class SubcategoryController extends Controller
{

    /**
     * @OA\Get(
     *     path="/api/subcategories",
     *     tags={"Subcategories"},
     *     summary="Get all subcategories",
     *     description="Returns a list of all subcategories",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer"),
     *                 @OA\Property(property="name", type="string"),
     *                 @OA\Property(property="parent_category", type="string"),
     *                 @OA\Property(property="images", type="string"),
     *                 @OA\Property(property="created_at", type="string", format="datetime"),
     *                 @OA\Property(property="updated_at", type="string", format="datetime")
     *             )
     *         )
     *     )
     * )
     */
    
    public function getAllSubcategories(){

     

     $subcategories = Subcategory::get();
        return $subcategories;
        }


    /**
     * @OA\Get(
     *     path="/api/subcategories/category={name}",
     *     tags={"Subcategories"},
     *     summary="Get subcategories by category name",
     *     description="Returns subcategories filtered by parent category name. Examples of category names: accesories, coffee",
     *     @OA\Parameter(
     *         name="category",
     *         in="query",
     *         required=true,
     *         description="Parent category name",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer"),
     *                 @OA\Property(property="parent_category", type="string"),
     *                 @OA\Property(property="subcategory_name", type="string"),
     *                 @OA\Property(property="created_at", type="string", format="datetime"),
     *                 @OA\Property(property="updated_at", type="string", format="datetime")
     *             )
     *         )
     *     )
     * )
     */

    public function getSubCategoriesByCategoryname(Request $request){

        $category = $request->category;

        $subcategoriesByCategory = Subcategory::where("parent_category", $category) -> get();

        return $subcategoriesByCategory;

    }
}
