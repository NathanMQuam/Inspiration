import ClockController from "./Controllers/ClockController.js";
import QuoteController from "./Controllers/QuoteController.js";
import todoListController from "./Controllers/TodoListController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  todoListController = new todoListController()
  weatherController = new WeatherController()
  quoteController = new QuoteController()
  clockController = new ClockController()
}

window["app"] = new App();
