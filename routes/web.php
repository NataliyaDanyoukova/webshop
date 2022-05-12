<?php

use App\Http\Controllers\StripeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();
//
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//
Route::get('/{vue_capture?}', function(){
    return view('welcome');
}) ->where('vue_capture', '[\/\w\.-]*');

//Route::get('/getSession', [StripeController::class, 'getSession']);

Route::get('/stripe', [StripeController::class, 'index']);
Route::get('/getSession', [StripeController::class, 'getSession']);
Route::get('/checkout', [StripeController::class, 'checkout']);
Route::get('/users/setup-intent', [UserController::class, 'getSetupIntent']);


Route::get('/getStripe', function(){
    return view('wel');});

// Route::get('/checkout', [StripeController::class, 'checkout']);







//Route::get('/user/setup-intent', 'UserController@getSetupIntent');
//Route::post('/user/payments', 'UserController@postPaymentMethods');
//
//Route::get('/user/payment-methods', 'UserController@getPaymentMethods');
