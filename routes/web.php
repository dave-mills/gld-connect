<?php

use App\Events\SomeoneEnteredTheRoom;
use App\Http\Controllers\MessageController;
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

Route::get('/', function () {
    Auth::loginUsingId(1);
    return view('welcome');
});

Route::post('entered', function () {
    SomeoneEnteredTheRoom::dispatch();
});

Route::resource('messages', MessageController::class)->only([
    'index', 'store', 'update', 'destroy'
]);
