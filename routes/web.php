<?php

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





Route::get('/rsvp', function () {
    return view('rsvp');
});

Route::group(['prefix'=>'/','as'=>'member'], function(){
    Route::get('/', function () {
        return view('welcome');
    });

    Route::get('/account', function () {
        return view('member.account');
    });

    Route::get('login', function () {
        return view('member.login');
    });
    Route::get('register', function () {
        return view('member.register');
    });
    Route::get('events', function () {
        return view('member.events');
    });
    Route::get('event/{id}', function () {
        return view('member.event');
    });
});