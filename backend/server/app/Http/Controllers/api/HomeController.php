<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * Index for swagger page
 */

class HomeController extends Controller
{

    public function index(Request $request)
    {
        return response()->json([
            "name" => $request->input("name"),
            "message" => "hellow world",
        ]);
    }
}