const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    },
    setName(e, lastName) {
      this.name = e.target.value;
    },
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = '';
    }
  },
});

app.mount('#events');
