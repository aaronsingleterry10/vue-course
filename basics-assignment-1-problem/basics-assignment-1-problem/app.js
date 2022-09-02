const app = Vue.createApp({
    data() {
        return {
            name: 'Aaron Singleterry',
            age: 32,
            img: 'me.png'
        }
    },
    methods: {
        randomNumber() {
            const num = Math.random();
            return num;
        }
    }
});

app.mount('#assignment');