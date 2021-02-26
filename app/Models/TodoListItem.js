export default class TodoList {
   constructor({description, completed, user, _id, id}) {
      this.description = description
      this.completed = completed
      this.user = user
      this._id = _id || id
   }

   get Template() {
      return `<p>ToDo List, no html yet</p>`
   }
}