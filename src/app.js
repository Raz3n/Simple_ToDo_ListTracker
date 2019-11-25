import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      items: [
        {task:"Practice Sumo deadlifts", isDone: false},
        {task:"Prep Gainzgiving for Sunday", isDone: false},
        {task:"Do laundry", isDone: true},
        {task:"Finish MVP", isDone: false},
        {task:"Wrestle Alligator", isDone: true} ],
        newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          task: this.newItem,
          isDone: false});
          this.newItem = "";
      },
      doItem: function (index) {
        this.items[index].isDone = true;
      }
    }
  });
});
