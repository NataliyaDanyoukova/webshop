<?php

namespace App\Http\Controllers;

use App\Models\order;
use App\Models\orderline;
use App\Models\User;
use App\Models\address;
use Carbon\Carbon;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Stripe\Token;

class UserController extends Controller
{

    public function __construct()
    {
        //$this->middleware('auth');
    }

public function getUser(){
    return Auth::user()->getAuthIdentifier();
}





}
