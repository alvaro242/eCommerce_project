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
*/
//Auth
Route::post('/login', [AuthController::class, "Login"]);

Route::post('/signup', [AuthController::class, "Signup"]);

Route::get("/user", [UserController::class, "getUser"])->middleware("auth:api");

// END Auth


//requires access token


Route::get('/basket', [Products_BasketsController::class, "getBasket"])->middleware("auth:api");

Route::delete('/removebasket={id}', [Products_BasketsController::class, 'RemoveCartList'])->middleware("auth:api");

Route::post('/neworder', [CheckoutController::class, "createNewOrder"])->middleware("auth:api");

Route::get('/myorders', [OrderController::class, "getMyOrders"])->middleware("auth:api");

Route::get('/order={orderRef}', [OrderController::class, "getProductsByOrder"])->middleware("auth:api");

Route::post('/addtobasket', [Products_BasketsController::class, "addToBasket"]);



//Public info
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




//Stripe payments

Route::post('/payment', [StripePaymentController::class, "payment"]);