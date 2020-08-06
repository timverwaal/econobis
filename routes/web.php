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

Route::get('/twinfield', 'Api\Twinfield\TwinfieldController@twinfield');

// Welcome
use Dacastro4\LaravelGmail\Facade\LaravelGmail;

Route::get('/', 'HomeController@welcome');

Route::get('/oauth/gmail', function (){
    return LaravelGmail::redirect();
});

Route::get('/oauth/gmail/callback', function (){
    LaravelGmail::makeToken();
    return redirect()->to('/');
});

Route::get('/oauth/gmail/logout', function (){
    LaravelGmail::logout(); //It returns exception if fails
    return redirect()->to('/');
});

Route::get('/oauth/gmail/checkuser', function (){
    echo LaravelGmail::check() ? 'Ingelogd' : 'Niet ingelogd';
});

Route::get('/oauth/gmail/fetch-mails', function (){
    $messages = LaravelGmail::message()->unread()->preload()->all();
    foreach ( $messages as $message ) {
        echo LaravelGmail::user();
        echo "<br />";
        echo $message->getSubject();
        echo "<br />";
        echo $message->getHtmlBody();
        echo "<br />";
    }
});