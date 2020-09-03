<?php

namespace App\Http\Controllers\Api\Mailbox;

use Dacastro4\LaravelGmail\Exceptions\AuthException;
use Dacastro4\LaravelGmail\GmailConnection;
use Dacastro4\LaravelGmail\Services\Message;
use Illuminate\Support\Facades\Redirect;

class EconobisLaravelGmailClass extends GmailConnection
{
	public function __construct($config, $userId = null)
	{
		parent::__construct($config, $userId);
	}

	/**
	 * @return Message
	 * @throws AuthException
	 */
	public function message()
	{
		if (!$this->getToken()) {
			throw new AuthException('No credentials found.');
		}

		return new Message($this);
	}

	/**
	 * Returns the Gmail user email
	 *
	 * @return \Google_Service_Gmail_Profile
	 */
	public function user()
	{
		return $this->config('email');
	}

	/**
	 * Updates / sets the current userId for the service
	 *
	 * @return \Google_Service_Gmail_Profile
	 */
	public function setUserId($userId)
	{
		$this->userId = $userId;
		return $this;
	}

	public function redirect()
	{
		return Redirect::to($this->getAuthUrl());
	}

	/**
	 * Gets the URL to authorize the user
	 *
	 * @return string
	 */
	public function getAuthUrl()
	{
		return $this->createAuthUrl();
	}

	public function logout()
	{
		$this->revokeToken();
		$this->deleteAccessToken();
	}

}
