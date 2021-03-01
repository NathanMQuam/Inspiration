import { ProxyState } from "../AppState.js";
import TodoList from "../Models/TodoListItem.js";
import { sandboxApi } from "../Services/AxiosService.js";



class TodoListService {
   async createTodo ( description ) {
      console.log( 'createTodo' );
      try {
         await sandboxApi.post( 'NathanMQuam/todos', { description } )
         this.getTodoList()
      } catch ( error ) {
         console.error( error );
      }
   }

   async getTodoList () {
      try {
         console.log( 'getTodoList' );
         let res = await sandboxApi.get( 'NathanMQuam/todos' )
         ProxyState.todoList = res.data.map( li => new TodoList( li ) )
         console.log( 'result:', ProxyState.todoList );
      } catch ( error ) {
         console.error( error );
      }
   }

   async updateTodoItem ( id ) {
      try {
         let item = ProxyState.todoList.find( i => i.id == id )
         item.completed = !item.completed
         await sandboxApi.put( 'NathanMQuam/todos/' + id, item )
         console.log( 'updateTodoItem' );
         this.getTodoList()
      } catch ( error ) {
         console.error( error );
      }
   }

   async deleteTodoItem ( id ) {
      console.log( 'deleteTodoItem' );
      try {
         let item = ProxyState.todoList.find( i => i.id == id )
         await sandboxApi.delete( 'NathanMQuam/todos/' + id )
         this.getTodoList()
      } catch ( error ) {
         console.error( error );
      }
   }
}

export const todoListService = new TodoListService()