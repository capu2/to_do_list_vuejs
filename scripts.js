


const todosApp ={
    data() {
        return {
            todos: [],
            newTodo: {
                done:false
            }
        }
    },
    methods: {
        addTodo: function(){
            if(this.newTodo.text){
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                localStorage.setItem("todos", JSON.stringify(this.todos))    
            }else{
                alert("Texto requerido!")
            }
            
        }
    }
};

Vue.createApp(todosApp).mount('#app')