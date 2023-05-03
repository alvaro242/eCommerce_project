<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WebInfo;

/**
 * @OA\Get(
 *     path="/webinfo",
 * tags={"webinfo"},
 *     @OA\Response(response="200", description="Obtain web info")
 * )
 */

class WebInfoController extends Controller
{
    public function getAllInfo(){

        $allInfo = WebInfo::get();
        return $allInfo;
    }

  
}
