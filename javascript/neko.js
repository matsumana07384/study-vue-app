//メモ

var app = new Vue({

    // mount する要素
    el: '#app',
    // アプリケーションで使用するデータ
    data: {
        message: 'おかちじぇーえす'

    },

    //算出プロパティ 
    computed: {
        computedMessage: function () {
            //なにか処理した結果をデータとして返す
            return this.message + '!'
        }
    },

    // ライフサイクルチェック
    created: function () {
        console.log('created')
    },
    // アプリケーションで使用するメソッド
    methods: {
        handleClick: function (event) {
            alert(event.target)
        }
    }
})