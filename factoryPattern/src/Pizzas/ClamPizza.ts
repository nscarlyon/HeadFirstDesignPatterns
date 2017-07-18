import {Pizza} from "./Pizza";
import {PizzaIngredientFactory} from "../IngredientFactory/PizzaIngredientFactory";

export class ClamPizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): string {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.veggies = this.ingredientFactory.createVeggies();
        this.clams = this.ingredientFactory.createClam();
        return "Preparing" + this.name;    }
}