<?php

namespace App\Http\Controllers\Api\Mailbox;

use Dacastro4\LaravelGmail\Exceptions\AuthException;
use Dacastro4\LaravelGmail\GmailConnection;
use Dacastro4\LaravelGmail\LaravelGmailClass;
use Dacastro4\LaravelGmail\Services\Message;
use Illuminate\Support\Facades\Redirect;

abstract class EconobisLaravelGmailClass extends LaravelGmailClass
{
	public function __construct($config, $userId = null)
	{
		parent::__construct($config, $userId);
	}

}
