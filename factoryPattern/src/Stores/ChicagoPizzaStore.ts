import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../Pizzas/Pizza";
import {PizzaIngredientFactory} from "../IngredientFactory/PizzaIngredientFactory";
import {CheesePizza} from "../Pizzas/CheesePizza";
import {ClamPizza} from "../Pizzas/ClamPizza";
import {VeggiePizza} from "../Pizzas/VeggiePizza";
import {PepperoniPizza} from "../Pizzas/PepperoniPizza";
import {ChicagoPizzaIngredientFactory} from "../IngredientFactory/ChicagoPizzaIngredientFactory";

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        let pizza: Pizza = null;
        let ingredientFactory: PizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
        if (item === "cheese") {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("Chicago Style Cheese Pizza");
        }
        else if (item === "clam") {
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName("Chicago Style Clam Pizza");
        }
        else if (item === "veggie") {
            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName("Chicago Style Veggie Pizza");
        }
        else if (item === "pepperoni") {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("Chicago Style Pepperoni Pizza");
        }
        return pizza;
    }
}