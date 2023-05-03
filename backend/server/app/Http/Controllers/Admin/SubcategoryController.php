<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subcategory;
use App\Models\Category;

/**
 * @OA\Get(
 *     path="/subcategories",
 *   tags={"subcategories"},
 *     @OA\Response(response="200", description="Obtain subcategories")
 * )
 * 
  * @OA\Get(
 *     path="/subcategories/{categoryname}",
 *   tags={"subcategories"},
 *     @OA\Response(response="200", description="Obtain subcategories")
 * )
 */

 

class SubcategoryController extends Controller
{

     public function getAllSubcategories(){
     $subcategories = Subcategory::get();
        return $subcategories;
        }


    public function getSubCategoriesByCategoryname(Request $request){

        $category = $request->category;

        $subcategoriesByCategory = Subcategory::where("parent_category", $category) -> get();

        return $subcategoriesByCategory;

    }
}
