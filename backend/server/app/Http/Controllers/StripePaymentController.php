<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe;
use App\Models\Order;

/** * @OA\Post( 
 * * path="/api/payment", 
 * * summary="Process a payment", 
 * * description="Endpoint to process a payment using Stripe.", 
 * * tags={"Payment"}, 
 * * @OA\RequestBody( 
 * * required=true, 
 * * @OA\JsonContent( 
 * * required={"number", "exp_month", "exp_year", "cvc", "amount", "description"}, 
 * * @OA\Property(property="number", type="string", description="Credit card number"), 
 * * @OA\Property(property="exp_month", type="integer", description="Expiration month"), 
 * * @OA\Property(property="exp_year", type="integer", description="Expiration year"), 
 * * @OA\Property(property="cvc", type="string", description="CVC code"), 
 * * @OA\Property(property="amount", type="integer", description="Payment amount in pence (for GBP)"), 
 * * @OA\Property(property="description", type="string", description="Order description or ID") * ) * ), 
 * * @OA\Response( * response=201, * description="Payment successful", 
 * * @OA\JsonContent( * @OA\Property(property="status", type="string") * ) * ), 
 * * @OA\Response( * response=500, * description="Payment error", * @OA\JsonContent( 
 * * @OA\Property(property="response", type="string", example="Error") * ) * ) * ) */

class StripePaymentController extends Controller
{
    public function payment(Request $request)
    {
        try {
            $stripe = new \Stripe\StripeClient(
                env('STRIPE_SECRET')
            );
            $newToken = $stripe->tokens->create([
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

            return response()->json([[$response->status]], 201);




        } catch (Exception $e) {
            return response()->json([['response' => 'Error']], 500);

        }




    }
}