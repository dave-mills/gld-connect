<template>
    <div
        id="theroom"
        class=" h-100 d-flex flex-column justify-content-center align-items-center mx-auto"
        style="width: 90%"
    >
        <div
            id="output"
            class="w-100 h-100 text-light d-flex flex-column justify-content-end"
        >
            <div
                v-for="message in messages"
                :key="message.id"
                :class="[message.world ? 'world' : '', 'message']"
                style="max-width: 95vw;"
            >
                {{ message.text }}
            </div>
            ...
        </div>
        <h1>
            <form
                action="#"
                @submit.prevent="send"
            >
                <input
                    id="themessage"
                    v-model="themessage"
                    style="height: 40px; max-width: 90vw"
                    type="text"
                    @blur="refocus"
                >
            </form>
        </h1>
        <div class="d-flex justify-content-end">
            <div
                class="btn btn-sm"
                @click="reset"
            >
                Reset
            </div>
        </div>
    </div>
</template>

<script>

    var axios = require('axios');

    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    export default {
        data: function() {
            return {
                'messages': [],
                'themessage': '',
                'users': [],
                'worldMessageId': 0
            }
        },
        mounted() {

            this.refocus();

            console.log("are you still there?")
            this.$echo.join('Chat')
                .here(users => {
                    console.log('there are currently ' + users.length + 'users in the room')
                    this.users = users
                })
                .listen('SomeoneEnteredTheRoom', (e) => {
                    console.log("someone entered the room");
                })
                .listen('SomeoneSentAMessage', (e) => {
                    console.log("someone sent a message with id " + e.message.id);
                    setTimeout(() => {
                        const messageIds = this.messages.map((message) => {return message.id})
                        console.log('message ids = ')
                        console.log(messageIds)
                        if(!messageIds.includes(e.message.id)){
                            this.messages.push(e.message)
                        }
                    }, 500);
                })
                .listen('AMessageWasDeleted', (e) => {
                    console.log('a message was deleted')
                    console.log(e.message)
                    this.messages.splice(this.messages.indexOf(e.message), 1)

                    //This almost certainly will result in the last message appearing exactly once,
                    this.newWorldMessage('the air around you thickens for a moment')
                    this.newWorldMessage('###reset/initialisation complete. please carry on/take no notice of us###')

                })
                .joining(user => {
                    console.log(user.name + 'has entered the room')
                    this.users.push(user)
                    console.log('there are ' + this.users.length + ' in the room')
                    this.newWorldMessage(`someone has entered the room`)
                })
                .leaving(user => {
                    console.log(user.name + 'has left the room')
                    this.users.splice(this.users.indexOf(user), 1)
                    console.log('there are ' + this.users.length + ' in the room')
                    this.newWorldMessage('someone has left the room')
                })


            axios.post("/entered")

            axios.get('/messages')
                .then(response => {
                    // var messages = response.data
                    // messages.sort(function(a, b) {
                    //     if(a.created_at < b.created_at) return -1;
                    //     if(a.created_at > b.created_at) return 1;
                    // })
                    this.messages = response.data
                })

        },
        methods: {
            refocus: function() {
                //if(this.themessage.length > 0) this.send()
                document.getElementById('themessage').focus();
            },
            send: function() {
                console.log('someone is sending a message');
                axios.post('/messages', {'text': this.themessage.toLowerCase()})
                    .then((response) => {
                        this.messages.push(response.data);
                    })

                this.themessage = ''
            },
            reset: function() {
                console.log("resetting");
                this.messages.forEach((message) => {
                    axios.delete('/messages/'+message.id)
                })
                this.messages = [];

            },
            newWorldMessage: function(text) {
                this.worldMessageId++

                this.messages.push({
                    'id': `world${this.worldMessageId}`,
                    'text': text,
                    'world': true,
                })
            }

        }
    }
</script>
