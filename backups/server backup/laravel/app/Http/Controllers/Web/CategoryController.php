<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;

/**
 * @OA\Get(
 *     path="/categories",
 * tags={"categories"},
 *     @OA\Response(response="200", description="Obtain categories")
 * )
 */


class CategoryController extends Controller
{
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
