<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\WebInfoController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\SubcategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\api\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| API Routes

|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

*/
//Auth
Route::post('/login', [AuthController::class, "Login"]);

Route::post('/signup', [AuthController::class, "Signup"]);

Route::get("/user", [UserController::class, "User"])->middleware("auth:api");

// END Auth

//two first are disabled in frontend
Route::post('/visitor', [VisitorController::class, 'writeVisitorDetails']);

Route::get('/webinfo', [WebInfoController::class, 'getAllInfo']);

Route::get('/categories', [CategoryController::class, 'getAllCategories']);

Route::get('/subcategories', [SubcategoryController::class, 'getAllSubcategories']);

Route::get('/subcategories/category={category}', [SubcategoryController::class, 'getSubCategoriesByCategoryname']);

Route::get('/products', [ProductController::class, 'getAllProducts']);

Route::get('/products/category={category}', [ProductController::class, 'getProductsByCategory']);

Route::get('/products/subcategory={subcategory}', [ProductController::class, 'getProductsBySubcategory']);

Route::get('/products/feature={feature}', [ProductController::class, 'getProductsByExtraFeature']);

Route::get('/products/id={productid}', [ProductController::class, 'getProductByID']);

Route::get('/products/search={input}', [ProductController::class, 'searchProducts']);
