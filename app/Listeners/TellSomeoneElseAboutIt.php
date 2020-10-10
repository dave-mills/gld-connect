<?php

namespace App\Listeners;

use App\Mail\SomeoneEnteredTheRoom;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class TellSomeoneElseAboutIt
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        Mail::to('degmills@gmail.com')->send(
            new SomeoneEnteredTheRoom()
        );
    }
}
