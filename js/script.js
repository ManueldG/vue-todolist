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
            
            if (this.newTodo!=='')
                this.todos.push({
                    text:this.newTodo,
                    complete:false,
                });
                this.newTodo='';
        },
    }


})
}
