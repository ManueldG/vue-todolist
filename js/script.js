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
        newTodo:'',
        },
        methods:{
            addTodo:function(){
            console.log("ciao");
            if (this.newTodo!=='')
                console.log("dentro if");
                this.todos.push({
                    text:this.newTodo,
                    complete:false,
                });
                console.log(this.todos);
        },
    }


})
}
