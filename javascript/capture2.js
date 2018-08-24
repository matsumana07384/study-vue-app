var state = { count:0 }

var app = new Vue({

    el:'#app',
    
    data:{
        // state: state,
        inputdata: '初期値',
        message:{

            value:'はろーおかちじぇーえす',
        },
        //配列データ
        list:['りんご','ばなな','いちご'],
        num: 1,
        pi:3.14,
        // math_pi:Math.round(pi)
        radius:50,
    
        count:0
        },
        methods:{
            increment:function(){
                this.count += 1
            }

        }

    
    }
)

state.count++ //リアクティブデータ