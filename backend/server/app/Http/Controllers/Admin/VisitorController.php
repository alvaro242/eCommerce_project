<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\visitor;

/**
 * @OA\Post(
 *     path="/visitor",
 * tags={"visitor"},
 *     @OA\Response(response="200", description="Send visitor details")
 * )
 */

class VisitorController extends Controller
{
    public function writeVisitorDetails(){
        
        $ip_address = $_SERVER['REMOTE_ADDR'];
       date_default_timezone_set("Europe/London");
        $visit_time = date("h:i:sa");
        $visit_date = date("d-m-Y");

        $result = visitor::insert([
            'ip_address' => $ip_address,
            'visit_time' => $visit_time,
            'visit_date' => $visit_date

        ]);

        return $result;

    }
}
