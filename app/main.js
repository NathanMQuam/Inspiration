import todoListController from "./Controllers/TodoListController.js";

class App {
  todoListController = new todoListController()
}

window["app"] = new App();
