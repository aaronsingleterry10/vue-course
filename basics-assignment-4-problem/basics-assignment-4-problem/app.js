const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            toggle: false,
            userColor: ''
        }
    },
    computed: {
        paraClass() {
            return {
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                visible: !this.toggle,
                hidden: this.toggle
            }
        }
    },
    methods: {
        toggleColors() {
            this.toggle = !this.toggle;
        }   
    }
});

app.mount('#assignment');