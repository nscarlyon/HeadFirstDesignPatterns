import {Pizza} from "../Pizzas/Pizza";

export abstract class PizzaStore {
    abstract createPizza(type: string): Pizza;

    orderPizza(type: string): Pizza {
        let pizza: Pizza = this.createPizza(type);
        let orderedPizza: string = "Making a " + pizza.getName();
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
