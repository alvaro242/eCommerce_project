<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use DB;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\SignupRequest;

/**
 * @OA\Tag(
 *     name="Authentication",
 *     description="API Endpoints for Authentication operations"
 * )
 */

   /**
 * @OA\Post(
 *     path="/api/login",
 *     summary="User login",
 *     tags={"Authentication"},
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             @OA\Property(property="email", type="string", format="email"),
 *             @OA\Property(property="password", type="string", format="password"),
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Login successful",
 *         @OA\JsonContent(
 *             @OA\Property(property="token", type="string"),
 *             @OA\Property(property="user", type="object")
 *         )
 *     )
 * )
 */

class AuthController extends Controller
{
    public function Login(Request $request)
    {

        try {
            if (Auth::attempt($request->only("email", "password"))) {
                $user = Auth::user();
                $token = $user->createToken("app")->accessToken;

                return response([
                    "message" => "Logged in",
                    "token" => $token,
                    "user" => $user
                ], 200);
            }
        } catch (Exception $exception) {
            return response(["message" => $exception->getMessage()], 400);
        }

        return response([
            "message" => "Invalid credentials"
        ], 401);

    }

       /**
 * @OA\Post(
 *     path="/api/signup",
 *     summary="User registration",
 *     tags={"Authentication"},
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             @OA\Property(property="name", type="string"),
 *             @OA\Property(property="email", type="string", format="email"),
 *             @OA\Property(property="password", type="string", format="password")
 *         )
 *     ),
 *     @OA\Response(
 *         response=201,
 *         description="User created successfully"
 *     )
 * )
 */

    public function Signup(SignupRequest $request)
    {
        try {

            $user = User::create([
                "name" => $request->name,
                "email" => $request->email,
                "password" => Hash::make($request->password)
            ]);

            $token = $user->createToken("app")->accessToken;

            return response([
                "message" => "The user has been registered",
                "token" => $token,
                "user" => $user
            ], 200);

        } catch (Exception $exception) {
            return response([
                "message" => $exception->getMessage()
            ], 400);
        }
    }
}