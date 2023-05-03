<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * @OA\Get(
 *     path="/projects",
 *     @OA\Response(response="200", description="Display a listing of projects.")
 * )
 */

class HomeController extends Controller
{
    
    public function index (Request $request)
    {
        return response()->json([
            "name" => $request -> input("name"),
            "message" => "hellow world",
        ]);
    }
}
