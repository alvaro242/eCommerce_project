<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;


/** * @OA\OpenApi( * @OA\Info( * title="GimmeBeans API ", * version="1.0.0" * ), * @OA\Components( * @OA\SecurityScheme( * securityScheme="bearerAuth", * type="http", * scheme="bearer", * bearerFormat="JWT" * ), * @OA\Schema( * schema="Order", * type="object", * @OA\Property(property="id", type="integer"), * @OA\Property(property="userID", type="integer"), * @OA\Property(property="delivery_address", type="string"), * @OA\Property(property="billing_address", type="string"), * @OA\Property(property="subtotal", type="number"), * @OA\Property(property="total", type="number"), * @OA\Property(property="status", type="string"), * @OA\Property(property="tax_percentage", type="number"), * @OA\Property(property="payment_method", type="string") * ), * @OA\Schema( * schema="OrderProduct", * type="object", * @OA\Property(property="order_number", type="integer"), * @OA\Property(property="product_SKU", type="string"), * @OA\Property(property="price", type="number"), * @OA\Property(property="ground", type="string"), * @OA\Property(property="qty", type="integer"), * @OA\Property(property="name", type="string") * ) * ) * ) */


class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}