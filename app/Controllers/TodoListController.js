import { ProxyState } from "../AppState.js";
// import TodoListItem from "../Models/TodoListItem.js";
import { todoListService } from "../Services/TodoListService.js";


// Private
function _draw() {
   let result = ''
   ProxyState.todoList.forEach(li => result += li.Template)
   document.getElementById('todo-list').innerHTML = result
}

// Public
export default class TodoListController {
   constructor() {
      ProxyState.on('todoList', _draw)
      this.getTodoList()
   }

   createTodo(event) {
      event.preventDefault()
      let form = event.target
      console.log('Creating task:', form.task.value)
      todoListService.createTodo(form.task.value)
      form.reset()
   }

   getTodoList() {
      todoListService.getTodoList()
   }

   // getTodoItem(id) {
   //    todoListService.getTodoItem(id)
   // }

   updateTodoItem(id) {
      todoListService.updateTodoItem(id)
   }

   deleteTodoItem(id) {
      todoListService.deleteTodoItem(id)
   }
}