import {PizzaIngredientFactory} from "./PizzaIngredientFactory";
import {Dough} from "../ingredients/Dough";
import {Sauce} from "../ingredients/Sauce";
import {Cheese} from "../ingredients/Cheese";
import {Veggies} from "../ingredients/Veggies";
import {Pepperoni} from "../ingredients/Pepperoni";
import {Clam} from "../ingredients/Clam";
import {ThinCrustDough} from "../ingredients/ThinCrustDough";
import {MarinaraSauce} from "../ingredients/MarinaraSauce";
import {ReggianoCheese} from "../ingredients/ReggianoCheese";
import {Garlic} from "../ingredients/Garlic";
import {Onion} from "../ingredients/Onion";
import {SlicedPepperoni} from "../ingredients/SlicedPepperoni";
import {FreshClams} from "../ingredients/FreshClams";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): Dough {
        return new ThinCrustDough();
    }

    createSauce(): Sauce {
        return new MarinaraSauce();
    }

    createCheese(): Cheese {
        return new ReggianoCheese();
    }

    createVeggies(): Veggies[] {
        let veggies: Veggies[] = [new Garlic(), new Onion()];
        return veggies;
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createClam(): Clam {
        return new FreshClams();
    }

}