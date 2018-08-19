  var app = new Vue({
    el: '#app',
    data: {
      message: 'Vue.js!',
      list:['りんご','ばなな','いちご'],
      show: true
    },
    methods:{
      handleClick: function(event){
        alert(event.target)//[object HTMLButtonElement]
      }
    }
  });
