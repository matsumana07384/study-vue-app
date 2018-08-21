  var app = new Vue({
    el: '#app',
    //アプリケーションで使用するデータ
    data: {
      message: 'Vue.js!',
      inputdata:'初期値',
      list:['りんご','ばなな','いちご'],
      showdata: true,
      show: true,
    },
    //算出プロパティ
    computed:{
        computedMessage: function(){
          return this.message+'!'
        }
    },
    // ライフサイクルフック
    created:function() {
      //行いたい処理
      
    },
    // アプリケーションで使用するメソッド
    methods:{
      handleClick: function(event){
        //行いたい処理
        alert(event.target)
        //[object HTMLButtonElement]
      }
    }
  });
