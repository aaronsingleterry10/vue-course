const app = Vue.createApp({
    data() {
        return {
            insertedTask: '',
            tasks: [],
            isVisible: true
        }
    },
    computed: {
        buttonCaption() {
            return this.isVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.insertedTask);
        },
        toggleView() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');