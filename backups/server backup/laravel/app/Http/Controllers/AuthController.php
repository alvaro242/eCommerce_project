<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use DB;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\SignupRequest;

/**
 * @OA\Post(
 *     path="/login",
 * tags={"Authentification"},
 *     @OA\Response(response="200", description="send login details, receive token")
 * )
 * @OA\Post(
 *     path="/signup",
 * tags={"Authentification"},
 *     @OA\Response(response="200", description="send signup details, received 200 for success 400 for error")
 * )
 */

class AuthController extends Controller
{
    public function Login(Request $request){

        try{
            if (Auth::attempt($request->only("email", "password"))){
                $user = Auth::user();
                $token = $user->createToken("app")->accessToken;

                return response([
                    "message" => "Logged in",
                    "token" => $token,
                    "user" => $user
                ], 200);
            }
        }catch(Exception $exception){
            return response ([ "message" => $exception-> getMessage()], 400);
        }

        return response([
            "message" => "Invalid credentials"
        ], 401);

    }

    public function Signup(SignupRequest $request){
        try{

            $user = User::create([
                "name" => $request->name,
                "email"=>$request ->email,
                "password"=> Hash::make($request ->password)
            ]);

            $token = $user->createToken("app")->accessToken;

            return response([
                "message" => "The user has been registered",
                "token" => $token,
                "user" => $user
            ], 200);

        }catch(Exception $exception ){
            return response([
                "message" => $exception->getMessage()
            ], 400);
        }
    }
}
