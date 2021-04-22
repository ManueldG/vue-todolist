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
            update(index){
                this.todos[index].complete=!this.todos[index].complete;
            },
            remove(index){
                this.todos.splice(index,1);
            }


    }


})
}
