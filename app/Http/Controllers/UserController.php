<?php

namespace App\Http\Controllers;

use App\Models\order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Stripe\Token;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function purchase(Request $request)
    {

        $user = User::firstOrCreate(
            [
                'email' => $request->input('email')
            ],
            [
                'password' => Hash::make('test123456'),
                'name' => $request->input('first_name') . ' ' . $request->input('last_name'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'zip_code' => $request->input('zip_code')
            ]
        );

        try {
            $payment = $user->charge(
                $request->input('amount')*100,
                $request->input('payment_method_id')
            );

            $payment = $payment->asStripePaymentIntent();

            $order = $user->orders()
                ->create([
                    //'transaction_id' => $payment->charges->data[0]->id,
                    'total_amount' => $payment->charges->data[0]->amount
                ]);

            foreach (json_decode($request->input('cart'), true) as $item) {
                $order->products()
                    ->attach($item['id'], ['quantity' => $item['quantity']]);
            }

            $order->load('products');
            return $order;

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }



    }



    public function pay(Request $request)
    {
        $order = Order::where('user_id', auth()->id())->findOrFail($request->input('order_id'));
        $user = auth()->user();
        $paymentMethod = $request->input('payment_method');
        try {
            $user->createOrGetStripeCustomer();
            $user->updateDefaultPaymentMethod($paymentMethod);

        } catch (\Exception $ex) {
            return back()->with('error', $ex->getMessage());
        }

        return redirect()->route('success');
    }
//
//        try {
//            $payment = $user->charge(
//            //  $request->input('amount'),
//                10,
//                $request->input('payment_method_id')
//            );
//
//            $payment = $payment->asStripePaymentIntent();
//
//
//            return $payment;
//        } catch (\Exception $e) {
//            return response()->json(['message' => $e->getMessage()], 500);
//        }
//
//    }

//
//    public function purchase(Request $request)
//    {
//        //$user = User::firstOrCreate();
//       $user = User::find($request->input('email'));
////        $userCashier = Cashier::findBillable($user->stripe_id);
//
////        var_dump($userCashier);
////        exit();
//
//        $stripeCustomer = $user->createOrGetStripeCustomer([
//            'email' => $request->input('email'),
//            'password' => Hash::make('test12345'),
//            'name' => $request->input('first_name') . ' ' . $request->input('last_name'),
//            'address' => $request->input(''),
//            'city' => $request->input('city'),
//            'zip_code' => $request->input('zip_code')
//        ]);

//
//        (
//            [
//                'email' => $request->input('email')
//            ],
//            [
//                'password' => Hash::make('test12345'),
//                'name' => $request->input('first_name') . ' ' . $request->input('last_name'),
//                //'name'=> $request->input('name'),
////                'address' => $request->input(''),
////                'city' => $request->input('city'),
////                //'state' => $request->input('state'),
//               // 'zip_code' => $request->input('zip_code')
//            ]
//        );

//        try {
//            $payment = $user->charge(
//                $request->input('amount'),
//                $request->input('payment_method_id')
//            );
//
//            $payment = $payment->asStripePaymentIntent();
//
//            $order = $user->orders()
//                ->create([
//                    //  'transaction_id' => $payment->charges->data[0]->id,
//                    'total' => $payment->charges->data[0]->amount
//                ]);
//
//            foreach (json_decode($request->input('cart'), true) as $item) {
//                $order->products()
//                    ->attach($item['id'], ['quantity' => $item['quantity']]);
//            }
//
//            $order->load('products');
//            return $order;
//
//        } catch (\Exception $e) {
//            return response()->json(['message' => $e->getMessage()], 500);
//        }
//
//    }

    /*    /**
         * Creates an intent for payment so we can capture the payment
         * method for the user.
         *
         * @param Request $request The request data from the user.
         */
//    public function getSetupIntent( Request $request ){
//        return $request->user()->createSetupIntent();
//    }

    /**
     * Adds a payment method to the current user.
     *
     * //     * @param Request $request The request data from the user.
     */
//    public function postPaymentMethods( Request $request ){
//        $user = $request->user();
//        $paymentMethodID = $request->get('payment_method');
//
//        if( $user->stripe_id == null ){
//            $user->createAsStripeCustomer();
//        }
//
//        $user->addPaymentMethod( $paymentMethodID );
//        $user->updateDefaultPaymentMethod( $paymentMethodID );
//
//        return response()->json( null, 204 );
//    }
    /**
     * Returns the payment methods the user has saved
     * //     *
     * //     * @param Request $request The request data from the user.
     * //     */
//    public function getPaymentMethods( Request $request ){
//        $user = $request->user();
//
//        $methods = array();
//        if( $user->hasPaymentMethod() ){
//            foreach( $user->paymentMethods() as $method ){
//                array_push( $methods, [
//                    'id' => $method->id,
//                    'brand' => $method->card->brand,
//                    'last_four' => $method->card->last4,
//                    'exp_month' => $method->card->exp_month,
//                    'exp_year' => $method->card->exp_year,
//                ] );
//            }
//        }
//
//        return response()->json( $methods );
//    }*/

}
