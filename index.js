/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      numbers: "1, 2, 3, 4, 5",
      misc: "blah blah blah"
    };
  },
  methods: {
    changeMessage: function() {
      this.message = "Whoa...";
    }
  }
});
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});