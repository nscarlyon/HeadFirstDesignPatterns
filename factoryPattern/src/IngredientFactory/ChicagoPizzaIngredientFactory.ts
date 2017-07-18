import {PizzaIngredientFactory} from "./PizzaIngredientFactory";
import {Dough} from "../ingredients/Dough";
import {Sauce} from "../ingredients/Sauce";
import {Cheese} from "../ingredients/Cheese";
import {Veggies} from "../ingredients/Veggies";
import {Pepperoni} from "../ingredients/Pepperoni";
import {Clam} from "../ingredients/Clam";
import {ThickCrustDough} from "../ingredients/ThickCrustDough";
import {PlumTomatoSauce} from "../ingredients/PlumTomatoSauce";
import {MozzarellaCheese} from "../ingredients/MozzarellaCheese";
import {BlackOlives} from "../ingredients/BlackOlives";
import {Mushroom} from "../ingredients/Mushroom";
import {SlicedPepperoni} from "../ingredients/SlicedPepperoni";
import {FreshClams} from "../ingredients/FreshClams";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): Dough {
        return new ThickCrustDough();
    }

    createSauce(): Sauce {
        return new PlumTomatoSauce();
    }

    createCheese(): Cheese {
        return new MozzarellaCheese();
    }

    createVeggies(): Veggies[] {
        let veggies: Veggies[] = [new BlackOlives(), new Mushroom()];
        return veggies;
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createClam(): Clam {
        return new FreshClams();
    }

}