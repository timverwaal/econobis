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
use App\Eco\Mailbox\MailFetcherGmail;
use Dacastro4\LaravelGmail\Facade\LaravelGmail;
use Dacastro4\LaravelGmail\LaravelGmailClass;

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
    echo LaravelGmail::check() ? 'Ingelogd: ' . LaravelGmail::user() : 'Niet ingelogd';
});

Route::get('/oauth/gmail/fetch-mails-user/{user}', function ($user){
    echo "User (parm): " . $user . "<br />";
    $messages = LaravelGmail::message()->from($user)->unread()->preload()->all();
    foreach ( $messages as $message ) {
        echo "User: " . LaravelGmail::user() . "<br />";
        echo "Id: " . $message->getId() . "<br />";
        echo "Internal date : " . $message->getInternalDate() . "<br />";
        echo "Date: " . $message->getDate() . "<br />";
        echo "Subject: " . $message->getSubject() . "<br />";
        echo "Tekst:" . "<br />";
        echo $message->getHtmlBody();
        echo "<br />";
    }
});

Route::get('/oauth/gmail/fetch-mails-preload', function (){
    $messages = LaravelGmail::message()->unread()->preload()->all();
    foreach ( $messages as $message ) {
        echo "User: " . LaravelGmail::user() . "<br />";
        echo "Id: " . $message->getId() . "<br />";
        echo "Internal date : " . $message->getInternalDate() . "<br />";
        echo "Date: " . $message->getDate() . "<br />";
        echo "Subject: " . $message->getSubject() . "<br />";
        echo "Tekst:" . "<br />";
        echo $message->getHtmlBody();
        echo "<br />";
    }

});
Route::get('/oauth/gmail/fetch-mails/{mailboxId}', function ($mailboxId){

    $mailbox = \App\Eco\Mailbox\Mailbox::find($mailboxId);
    $mailFetcherGmail = new MailFetcherGmail($mailbox);
    $mailFetcherGmail->fetchNew();

});


Route::get('/oauth/gmail/fetch-mail/{id}', function ($id){
    $mail = LaravelGmail::message()->get( $id );
    $mail->markAsRead();

    echo "User: " . LaravelGmail::user() . "<br />";
    echo "Id: " . $mail->getId() . "<br />";
    echo "Internal date : " . $mail->getInternalDate() . "<br />";
    echo "Date: " . $mail->getDate() . "<br />";
    echo "Subject: " . $mail->getSubject() . "<br />";
    echo "Tekst:" . "<br />";
    echo $mail->getHtmlBody();
    echo "<br />";
});
