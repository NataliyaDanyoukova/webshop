@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div>
<div>home page</div>
<div id="app">
    <router-link to="/"></router-link>
    <cart-icon class="justify-content-center"></cart-icon>
    <router-view></router-view>

    {{--        <router-link to="/cart" >--}}
    {{--                        <i class="fa fa-shopping-cart" aria-hidden="true">Cart_welcome</i>--}}
    {{--                        <span id="checkout_items" class="checkout_items">45</span>--}}
    {{--                    </router-link>--}}
</div>
@endsection
