const app = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            fullName: '',
            number: 0,
            submitNumber: 0
        }
    },
    computed: {
        
    },
    watch: {
        fullName() {
            const that = this;
            setTimeout(function() {
                that.firstName = '';
                that.lastName = '';
                that.fullName = '';
            }, 3000)
        }
    },
    methods: {
        userFirstName(e) {
            this.firstName = e.target.value;
        },
        userLastName(e) {
            this.lastName = e.target.value;
        },
        submitName() {
            this.fullName = this.firstName + ' ' + this.lastName;
        },
        userNumber(e) {
            this.number = e.target.value;
            console.log('input event triggered...')
        },
        enterNumber() {
            this.submitNumber = this.number;
            console.log('clicked')
            console.log(this.number)
        }
    }
});
app.mount('#practice');