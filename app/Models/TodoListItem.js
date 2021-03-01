export default class TodoList {
   constructor( data ) {
      this.description = data.description
      this.completed = data.completed
      this.user = data.user
      this.id = data._id || data.id
      this.newDescription = ''
   }

   get Template () {
      if ( this.completed ) {
         this.newDescription = `<s>${this.description}</s>`
      } else {
         this.newDescription = this.description
      }

      return /*html*/ `
         <div class="d-flex d-flex justify-content-between">
            <div onclick='app.todoListController.updateTodoItem("${this.id}")' style="cursor: pointer;">
               ${this.newDescription}
            </div>
            <button type='button' onclick='app.todoListController.deleteTodoItem("${this.id}")'>Delete</button>
         </div>
      `
   }
}