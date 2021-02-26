export default class TodoList {
   constructor(data) {
      this.description = data.description
      this.completed = data.completed
      this.user = data.user
      this.id = data._id || data.id
   }

   get Template() {
      // TODO: Format and style this
      return `<p class="d-flex">
         <div>${this.description}, Completed: ${this.completed}</div>
         <div>
            <button type='button' onclick='app.todoListController.updateTodoItem("${this.id}")'>Toggle Complete</button>
            <button type='button' onclick='app.todoListController.deleteTodoItem("${this.id}")'>Delete</button>
         </div>
      </p>`
   }
}