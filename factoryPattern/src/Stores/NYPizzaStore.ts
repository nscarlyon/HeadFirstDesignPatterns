import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../Pizzas/Pizza";
import {PizzaIngredientFactory} from "../IngredientFactory/PizzaIngredientFactory";
import {NYPizzaIngredientFactory} from "../IngredientFactory/NYPizzaIngredientFactory";
import {CheesePizza} from "../Pizzas/CheesePizza";
import {ClamPizza} from "../Pizzas/ClamPizza";
import {VeggiePizza} from "../Pizzas/VeggiePizza";
import {PepperoniPizza} from "../Pizzas/PepperoniPizza";

export class NYPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        let pizza: Pizza = null;
        let ingredientFactory: PizzaIngredientFactory = new NYPizzaIngredientFactory();
        if (item === "cheese") {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("New York Style Cheese Pizza");
        }
        else if (item === "clam") {
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName("New York Style Clam Pizza");
        }
        else if (item === "veggie") {
            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName("New York Style Veggie Pizza");
        }
        else if (item === "pepperoni") {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("New York Style Pepperoni Pizza");
        }
        return pizza;
    }
}