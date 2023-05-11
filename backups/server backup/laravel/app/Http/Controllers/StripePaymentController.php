<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe;
use App\Models\Order;

/**
 * @OA\Post(
 *     path="/payment",
 *     tags={"Stripe"},
 *     @OA\Response(response="201", description="Requires exp_month, exp_year,cvc, amount, description"),
 *     @OA\Response(response="500", description="Incorrect card details", @OA\JsonContent(example={"error": "Incorrect card details"}))
 * )
 */
 
 

class StripePaymentController extends Controller
{
    public function payment(Request $request){
        try{
            $stripe = new \Stripe\StripeClient(
                env('STRIPE_SECRET'));
            $newToken=  $stripe->tokens->create([
                'card' => [
                  'number' => $request->number,
                  'exp_month' => $request->exp_month,
                  'exp_year' => $request->exp_year,
                  'cvc' => $request->cvc,
                ],
              ]);

              Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

              $response = $stripe->charges->create([
                'amount' => $request->amount,
                'currency' => 'gbp',
                'source' => $newToken->id,
                'description' => $request->description,
              ]);
            //change status to paid 
              $orderInfo = Order::where("id", $request->description)->first();
              $orderInfo->status = "Paid";
              $orderInfo->save();

              return response()->json([[$response-> status]], 201);

            
              

        }
        catch(Exception $e){
            return response()->json([['response' => 'Error']], 500);

        }


        

    }
}
