const app = Vue.createApp({
    data() {
        return {
            list: [],
            listItem: '',
            name: '',
            enteredName: ''
        }
    },
    methods: {
      addItem() {
        this.list.push(this.listItem);
        this.listItem = '';
      },
      setName(e) {
        this.name = e.target.value;
      },
      enterName() {
          this.enteredName = this.name;
      }
    }
});

app.mount('#to-do-app');