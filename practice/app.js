const app = Vue.createApp({
    data() {
        return {
            list: [],
            listItem: ''
        }
    },
    methods: {
      addName() {
        this.list.push(this.listItem);
        this.listItem = '';
      }  
    }
});

app.mount('#to-do-app');