import {Pizza} from "./Pizza";
import {PizzaIngredientFactory} from "../IngredientFactory/PizzaIngredientFactory";

export class VeggiePizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): string {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.veggies = this.ingredientFactory.createVeggies();
        this.clams = this.ingredientFactory.createClam();
        return "Preparing" + this.name;    }
}