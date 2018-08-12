var app = new Vue({
  
  // mount する要素
  el: '#app',

  // アプリケーションで使用するデータ
  data: {
    
    message: 'Vue.js'

  },

//算出プロパティ 
  computed:{
    computedMessage: function(){
      return this.message + '!'
    }
  },

  // ライフサイクルチェック
  created:function() {
    
  },

  // アプリケーションで使用するメソッド
  methods: {
    handleClick: function(event){
     alert(event.target) 
    }
  }
})