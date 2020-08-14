<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 03-01-2018
 * Time: 17:01
 */

namespace App\Eco\Mailbox;


use App\Eco\Email\Email;
use App\Eco\Email\EmailAttachment;
use App\Eco\EmailAddress\EmailAddress;
use Carbon\Carbon;
use Dacastro4\LaravelGmail\Facade\LaravelGmail;
use Illuminate\Support\Facades\Log;
use Storage;

class MailFetcherGmail
{

    /**
     * @var Mailbox
     */
//    private $mailbox;
    private $fetchedEmails = [];

//    public function __construct(Mailbox $mailbox)
    public function __construct()
    {
//        $this->mailbox = $mailbox;

//        $this->initStorageDir();
//        $this->initGmailConfig();
    }

    public function fetchNew()
    {
        $messages = LaravelGmail::message()->unread()->preload()->all();
        foreach ( $messages as $message ) {
            echo "Nieuwe test! <br />";
            echo "User: " . LaravelGmail::user() . "<br />";
            echo "Id: " . $message->getId() . "<br />";
            echo "Internal date : " . $message->getInternalDate() . "<br />";
            echo "Date: " . $message->getDate() . "<br />";
            echo "Subject: " . $message->getSubject() . "<br />";
            echo "Tekst:" . "<br />";
            echo $message->getHtmlBody();
            echo "<br />";
        }

//        $this->mailbox->date_last_fetched = $dateTime;
//        $this->mailbox->imap_id_last_fetched = $imapIdLastFetched;
//        $this->mailbox->save();

    }

//    private function initGmailConfig()
//    {
//    }

//    private function initStorageDir()
//    {
//        $storageDir = $this->getStorageDir();
//
//        if (!is_dir($storageDir)) {
//            mkdir($storageDir, 0777, true);
//        }
//    }

    /**
     * @return string
     */
//    private function getStorageDir()
//    {
//        return $this->getStorageRootDir() . DIRECTORY_SEPARATOR . 'mailbox_' . $this->mailbox->id . DIRECTORY_SEPARATOR . 'inbox' ;
//    }

    /**
     * @return string
     */
//    private function getAttachmentDBName()
//    {
//        return 'mailbox_' . $this->mailbox->id . DIRECTORY_SEPARATOR . 'inbox' . DIRECTORY_SEPARATOR;
//    }

    /**
     * @return string
     */
//    private function getStorageRootDir()
//    {
//        return Storage::disk('mail_attachments')->getDriver()->getAdapter()->getPathPrefix();
//    }

//    private function fetchEmail($mailId)
//    {
//        $emailData = $this->imap->getMail($mailId);
//        try {
//            $dateSent = Carbon::parse( $emailData->date ) ;
//        } catch(\Exception $ex) {
//            try {
//                $dateSentStrip = str_replace(" (GMT+01:00)", "", $emailData->date);
//                $dateSentStrip = str_replace(" (GMT+02:00)", "", $dateSentStrip);
//                $dateSentStrip = str_replace(" (GMT+03:00)", "", $dateSentStrip);
//                $dateSentStrip = str_replace(" (GMT+04:00)", "", $dateSentStrip);
//                $dateSentStrip = str_replace(" (GMT+05:00)", "", $dateSentStrip);
//                $dateSentStrip = str_replace(" (GMT+06:00)", "", $dateSentStrip);
//                $dateSentStrip = str_replace(" (GMT+07:00)", "", $dateSentStrip);
//                $dateSentStrip = str_replace(" (GMT+08:00)", "", $dateSentStrip);
//                $dateSentStrip = str_replace(" (West-Europa (standaardtijd))", "", $dateSentStrip);
//                $dateSentStrip = str_replace(" (West-Europa (zomertijd))", "", $dateSentStrip);
//                $dateSentStrip = str_replace(" (W. Europe Daylight Time)", "", $dateSentStrip);
//                $dateSent = Carbon::parse( $dateSentStrip );
//            } catch(\Exception $ex2) {
//                Log::error("Failed to retrieve date sent (" . $emailData->date . ") from email (" . $emailData->id . ") in mailbox (" . $this->mailbox->id . "). Error: " . $ex2->getMessage());
//                echo "Failed to retrieve date sent from email: " . $ex2->getMessage();
//                die();
//            }
//        }
//
//        $textHtml = '';
//        try {
//            if ($emailData->textHtml) {
//                $textHtml = $emailData->textHtml;
//            } else {
//                if ($emailData->textPlain) {
//                    $textHtml = nl2br($emailData->textPlain);
//                }
//            }
//        } catch(\Exception $ex) {
//            Log::error("Failed to retrieve textHtml or textPlain from email (" . $emailData->id . ") in mailbox (" . $this->mailbox->id . "). Error: " . $ex->getMessage());
//            echo "Failed to retrieve textHtml or textPlain from email (" . $emailData->id . ") in mailbox (" . $this->mailbox->id . "). Error: " . $ex->getMessage();
//            return;
//        }
//        $textHtml = $textHtml?: '';
//        // when encoding isn't UTF-8 encode texthtml to utf8.
//        $currentEncodingTextHtml= mb_detect_encoding( $textHtml, 'UTF-8', true);
//        if(false === $currentEncodingTextHtml){
//            $textHtml = utf8_encode($textHtml);
//        }
//
//        if(strlen($textHtml) > 250000){
//            $textHtml = substr($emailData->textHtml, 0, 250000);
//            $textHtml .= '<p>Deze mail is langer dan 250.000 karakters en hierdoor ingekort.</p>';
//        }
//
//        $subject = $emailData->subject ? $emailData->subject : '';
//
//        if(strlen($subject) > 250){
//            $subject = substr($emailData->textHtml, 0, 249);
//        }
//
//        $email = new Email([
//            'mailbox_id' => $this->mailbox->id,
//            'from' => $emailData->fromAddress,
//            'to' => array_keys($emailData->to),
//            'cc' => array_keys($emailData->cc),
//            'bcc' => array_keys($emailData->bcc),
//            'subject' => $subject,
//            'html_body' => $textHtml,
//            'date_sent' => $dateSent,
//            'folder' => 'inbox',
//            'imap_id' => $emailData->id,
//            'message_id' => $emailData->messageId,
//            'status' => 'unread'
//        ]);
//        $email->save();
//
//        //if from email exists in any of the email addresses make a pivot record.
//        $this->addRelationToContacts($email);
//
//        foreach ($emailData->getAttachments() as $attachment){
//            $name = substr($attachment->filePath, strrpos($attachment->filePath, DIRECTORY_SEPARATOR) + 1);
//
//            $filename = $this->getAttachmentDBName() . $name;
//
//            $emailAttachment = new EmailAttachment([
//                'filename' => $filename,
//                'name' => $attachment->name,
//                'email_id' => $email->id,
//            ]);
//            $emailAttachment->save();
//        }
//
//        $this->fetchedEmails[] = $email;
//    }

//    public function addRelationToContacts(Email $email){
//
//        //soms niet koppelen
//        $mailboxIgnores = $email->mailbox->mailboxIgnores;
//
//        foreach ($mailboxIgnores as $ignore){
//            switch ($ignore->type_id) {
//                case 'e-mail':
//                   if($ignore->value === $email->from){
//                       return false;
//                   }
//                    break;
//                case 'domain':
//                    $domain = preg_replace( '!^.+?([^@]+)$!', '$1', $email->from);
//                    if ($ignore->value === $domain) {
//                        return false;
//                    }
//                    break;
//            }
//        }
//
//        // Link contact from email to address
//        if($email->mailbox->link_contact_from_email_to_address) {
//            $emailAddressesIds = EmailAddress::where('email', $email->to)->pluck('contact_id')->toArray();
//        // Link contact from email from address
//        } else {
//            $emailAddressesIds = EmailAddress::where('email', $email->from)->pluck('contact_id')->toArray();
//        }
//
//        //If contact has twice same emailaddress
//        $uniqueEmailAddressesIds = array_unique($emailAddressesIds);
//
//        $email->contacts()->attach($uniqueEmailAddressesIds);
//    }

//    public function getFetchedEmails()
//    {
//        return $this->fetchedEmails;
//    }


}