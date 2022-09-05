const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            number: 37
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.counter = 0;
            },5000)
        }
    },
    computed: {
        result() {
            console.log(this.counter);
            if (this.counter === this.number) {
                return this.number
            } else if (this.counter > this.number) {
                return 'Too much!'
            } else {
                return 'Not there yet.'
            }
        }
    },
    methods: {
        add(num) {
            this.counter += num;
        }
    }
});

app.mount('#assignment');