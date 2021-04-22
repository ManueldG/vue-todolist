function main(){
    var app = new Vue({
        el:'#app',
        data:{
            todos:[
                {
                    text:'caffè',
                    complete:false,
            },
            {
                text:'latte',
                complete:false,
            }
        ],
        },
        methods:{
            X:function(){
            console.log("ciao");
        },
    }


})
}
