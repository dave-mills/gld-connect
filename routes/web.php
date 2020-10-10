<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Events\SomeoneEnteredTheRoom;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\MessageController;

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
    $user = User::create(['name' => HelperController::generateRandomString(6)]);
    Auth::login($user);
    return view('welcome');
});

Route::post('entered', function () {
    SomeoneEnteredTheRoom::dispatch();
});

Route::resource('messages', MessageController::class)->only([
    'index', 'store', 'update', 'destroy'
]);
