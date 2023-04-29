<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subcategory;

class SubcategoryController extends Controller
{

     public function getAllSubcategories(){
     $subcategories = Subcategory::get();
        return $subcategories;
        }
}
