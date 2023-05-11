<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\WebInfoController;
use App\Http\Controllers\Web\CategoryController;
use App\Http\Controllers\Web\SubcategoryController;
use App\Http\Controllers\Web\ProductController;
use App\Http\Controllers\Web\Products_BasketsController; 
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Web\CheckoutController;
use App\Http\Controllers\StripePaymentController;
use App\Http\Controllers\Web\OrderController;

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

Route::post('/addtobasket' , [Products_BasketsController::class, "addToBasket"]);

//requires token
Route::get('/basket' , [Products_BasketsController::class, "getBasket"])->middleware("auth:api");

Route::delete('/removebasket={id}',[Products_BasketsController::class, 'RemoveCartList'])->middleware("auth:api");

Route::post('/neworder', [CheckoutController::class, "createNewOrder"])->middleware("auth:api");

//Stripe payments

Route::post('/payment', [StripePaymentController::class, "payment"]);

Route::get('/myorders', [OrderController::class, "getMyOrders"])->middleware("auth:api");

Route::get('/order={orderRef}', [OrderController::class, "getProductsByOrder"])->middleware("auth:api");