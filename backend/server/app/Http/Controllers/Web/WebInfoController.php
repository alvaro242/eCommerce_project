<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WebInfo;



class WebInfoController extends Controller
{
    public function getAllInfo()
    {

        $allInfo = WebInfo::get();
        return $allInfo;
    }


}