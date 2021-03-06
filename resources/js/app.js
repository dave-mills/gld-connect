/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./echo');

window.Vue = require('vue');
import VueEcho from 'vue-echo-laravel';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('comms', require('./components/Comms.vue').default);

var pusherLocation = ''

if(process.env.MIX_PUSHER_LOCATION) {
    pusherLocation = process.env.MIX_PUSHER_LOCATION
} else {
    pusherLocation = window.location.hostname
}

Vue.use(VueEcho, {
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    wsHost: pusherLocation,
    wsPort: process.env.MIX_PUSHER_PROXY_PORT,
    wssPort: process.env.MIX_PUSHER_PROXY_PORT,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
});


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
