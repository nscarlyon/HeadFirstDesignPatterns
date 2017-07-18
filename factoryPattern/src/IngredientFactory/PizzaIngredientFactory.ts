import {Clam} from "../ingredients/Clam";
import {Pepperoni} from "../ingredients/Pepperoni";
import {Veggies} from "../ingredients/Veggies";
import {Cheese} from "../ingredients/Cheese";
import {Sauce} from "../ingredients/Sauce";
import {Dough} from "../ingredients/Dough";

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClam(): Clam;
}
