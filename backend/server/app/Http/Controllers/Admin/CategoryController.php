<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;

/**
 * @OA\Tag(
 *     name="Categories",
 *     description="API Endpoints for Category operations"
 * )
 */


class CategoryController extends Controller
{

    /**
 * @OA\Get(
 *     path="/api/categories",
 *     tags={"Categories"},
 *     summary="Get all categories with their subcategories",
 *     @OA\Response(
 *         response=200,
 *         description="List of categories with subcategories",
 *         @OA\JsonContent(
 *             type="array",
 *             @OA\Items(
 *                 @OA\Property(property="name", type="string", example="Coffee"),
 *                 @OA\Property(property="image", type="string", example="storage/categories/coffee.png"),
 *                 @OA\Property(
 *                     property="subcategory",
 *                     type="array",
 *                     @OA\Items(
 *                         @OA\Property(property="id", type="integer", example=1),
 *                         @OA\Property(property="name", type="string", example="Brazil"),
 *                         @OA\Property(property="parent_category", type="string", example="Coffee"),
 *                         @OA\Property(property="images", type="string", example="storage/subcategories/brazil.png"),
 *                         @OA\Property(property="created_at", type="string", format="datetime", nullable=true),
 *                         @OA\Property(property="updated_at", type="string", format="datetime", nullable=true)
 *                     )
 *                 )
 *             )
 *         )
 *     )
 * )
 */
    
    public function getAllCategories(){

        $categories = Category::get();

        $categoryArray = [];

        foreach ($categories as $thisCategory){
            //for each category save the subcatogy by searching subcategories where parents name equals their name
            $subcategory = Subcategory::where('parent_category', $thisCategory['name'])->get();

        $item = [
            "name" => $thisCategory['name'],
            "image" => $thisCategory['image'],
            "subcategory" => $subcategory
        ];

        array_push($categoryArray, $item);

        }

        return $categoryArray;

    }
}
