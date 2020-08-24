<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 03-01-2018
 * Time: 14:09
 */

namespace App\Http\Controllers\Api\Mailbox;


use App\Http\Controllers\Controller;
use Dacastro4\LaravelGmail\Facade\LaravelGmail;
//use Dacastro4\LaravelGmail\LaravelGmailClass;

class GmailController extends Controller
{
    private $mailbox;

    public function __construct($mailbox)
    {
        $this->mailbox = $mailbox;
    }

    public function oauthGmail()
    {
//        return LaravelGmail::redirect();
        $config['gmail.project_id'] = $this->mailbox->gmail_project_id;
        $config['gmail.client_id'] = $this->mailbox->gmail_client_id;
        $config['gmail.client_secret'] = $this->mailbox->gmail_client_secret;
        $config['gmail.redirect_url'] = $this->mailbox->gmail_redirect_url;
        $config['gmail.credentials_file_name'] = "gmail-".$this->mailbox->id."-json";
        $config['gmail.allow_multiple_credentials'] = true;
        $config['gmail.allow_json_encrypt'] = false;
        $config['gmail.access_type'] = "offline";
        $config['gmail.approval_prompt'] = "force";
        $config['gmail.scopes'] = ['readonly', 'modify'];
//        dd($config);
//        $configs = new GmailConfigs($config);
//        print_r(class_basename($configs));
//        dd($configs['config']);
        $gmail = new EconobisLaravelGmailClass($config, $this->mailbox->id);
        return $gmail->redirect();
    }


}