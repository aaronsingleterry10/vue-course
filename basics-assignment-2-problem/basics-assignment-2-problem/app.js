const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            enteredInput: ''
        }
    },
    methods: {
        showAlert() {
            alert('This is your alert!!');
        },
        showInput(e) {
            this.userInput = e.target.value;
        },
        enterInput() {
            this.enteredInput = this.userInput;
        }
    }
});

app.mount('#assignment');