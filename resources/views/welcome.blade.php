<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Hair&Beauty</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('styles/bootstrap4/bootstrap.min.css') }}">

    {{--    <link href="{{ asset('plugins/font-awesome-4.7.0/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css">--}}
    <link rel="stylesheet" type="text/css" href="{{ asset('styles/main_styles.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('styles/responsive.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('styles/laravel_style.css') }}">
    <!-- Styles -->

</head>
<body class="antialiased">

<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">


    <div class="container">
        <div class="logo_container">
            <a href="/">Hair & <span>Beauty</span></a>
        </div>
        <div class="justify-content-center">
            <cart-icon></cart-icon>
{{--            <router-link to="/cart" >--}}
{{--                <i class="fa fa-shopping-cart" aria-hidden="true">Cart</i>--}}
{{--                <span id="checkout_items" class="checkout_items">0 </span>--}}
{{--            </router-link>--}}
        </div>
        {{--        <nav class="navbar">--}}
        {{--            <ul class="navbar_menu align-content-center">--}}
        {{--                <li><a href="#">home</a></li>--}}
        {{--                <li><a href="#">shop</a></li>--}}
        {{--                <li><a href="#">promotion</a></li>--}}
        {{--                <li><a href="#">pages</a></li>--}}
        {{--                <li class="checkout">--}}

        {{--                    <router-link to="/cart">--}}
        {{--                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>--}}
        {{--                        <span id="checkout_items" class="checkout_items"> </span>--}}
        {{--                    </router-link>--}}

        {{--                </li>--}}
        {{--            </ul>--}}


        <div
            class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">

            @if (Route::has('login'))
                <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    @auth
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                               data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>
{{--                        <checkout :user="{{ Auth::user() }}"></checkout>--}}

                    @else
                        <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log
                            in</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}"
                               class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                        @endif
                    @endauth
                </div>
            @endif


        </div>
    </div>
</nav>

<div>
<div>welcome page</div>
    <div id="app">
        <router-link to="/"></router-link>
        <cart-icon class="justify-content-center" ></cart-icon>
        <router-view></router-view>

{{--        <router-link to="/cart" >--}}
{{--                        <i class="fa fa-shopping-cart" aria-hidden="true">Cart_welcome</i>--}}
{{--                        <span id="checkout_items" class="checkout_items">45</span>--}}
{{--                    </router-link>--}}
    </div>


</div>


<!-- Scripts -->
<script src="{{ asset('js/app.js') }}"></script>


</body>
</html>
