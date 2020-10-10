<template>
    <div class="container full-height d-flex flex-column justify-content-center align-items-center">
        <div
            id="output"
            class="h-75 text-light"
        >
            <div
                v-for="message in messages"
                :key="message.id"
            >
                {{ message.text }}
            </div>
            ...
        </div>
        <h1 style="height: 40px">
            <form
                action="#"
                @submit.prevent="send"
            >
                <input
                    id="themessage"
                    v-model="themessage"
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
            }
        },
        mounted() {

            this.refocus();

            console.log("are you still there?")
            this.$echo.channel('Chat')
                .listen('SomeoneEnteredTheRoom', (e) => {
                    console.log("someone entered the room");
                })
                .listen('SomeoneSentAMessage', (e) => {
                    console.log("someone sent a message");
                    const messageIds = this.messages.map((message) => {return message.id})
                    if(!messageIds.includes(e.message.id)){
                        this.messages.push(e.message)
                    }
                })

            axios.post("/entered")

            axios.get('/messages')
                .then(response => this.messages = response.data)

        },
        methods: {
            refocus: function() {
                document.getElementById('themessage').focus();
            },
            send: function() {
                console.log('someone is sending a message');
                axios.post('/messages', {'text': this.themessage})
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
            }
        }
    }
</script>
