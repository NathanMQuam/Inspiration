class TodoListService {
   createTodo(description) {
      console.log('createTodo');
   }

   getTodoList() {
      console.log('getTodoList');
   }

   getTodoItem(id) {
      console.log('getTodoItem');
   }

   updateTodoItem(id, completed) {
      console.log('updateTodoItem');
   }

   deleteTodoItem(id) {
      console.log('deleteTodoItem');
   }
}

export const todoListService = new TodoListService()