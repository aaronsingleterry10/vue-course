const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            toggle: false,
            userColor: ''
        }
    },
    methods: {
        toggleColors() {
            this.toggle = !this.toggle;
        }   
    }
});

app.mount('#assignment');