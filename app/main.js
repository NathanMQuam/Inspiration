import ClockController from "./Controllers/ClockController.js";
import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import todoListController from "./Controllers/TodoListController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  todoListController = new todoListController()
  weatherController = new WeatherController()
  imageController = new ImageController()
  quoteController = new QuoteController()
  clockController = new ClockController()
}

window["app"] = new App();
