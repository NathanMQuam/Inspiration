import { ProxyState } from "../AppState.js";
import { todoListService } from "../Services/TodoListService.js";


// Private
function _draw() {

}

// Public
export default class TodoListController {
   constructor() {
      ProxyState.on('todoList', _draw)
   }

   createTodo(description) {
      todoListService.createTodo(description)
   }

   getTodoList() {
      todoListService.getTodoList()
   }

   getTodoItem(id) {
      todoListService.getTodoItem(id)
   }

   updateTodoItem(id, completed) {
      todoListService.updateTodoItem(id, completed)
   }

   deleteTodoItem(id) {
      todoListService.deleteTodoItem(id)
   }
}