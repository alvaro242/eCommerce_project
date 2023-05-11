<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

/**
 * @OA\Get(
 *     path="/user",
 * tags={"Authentification"},
 *     @OA\Response(response="200", description="requires token. Receive user info")
 * )

 */

class UserController extends Controller
{
    public function User(){
        return Auth::user();
    }
}
