import {Dough} from "../ingredients/Dough";
import {Sauce} from "../ingredients/Sauce";
import {Veggies} from "../ingredients/Veggies";
import {Pepperoni} from "../ingredients/Pepperoni";
import {Clam} from "../ingredients/Clam";
import {Cheese} from "../ingredients/Cheese";

export abstract class Pizza {
    name: string;
    dough: Dough;
    sauce: Sauce;
    veggies: Veggies;
    pepperoni: Pepperoni;
    clams: Clam;
    cheese: Cheese;

    abstract prepare(): void;

    bake(): string {
        return "bake pizza";
    };

    cut(): string {
        return "cutting the pizza into triangle slices";
    };

    box(): string {
        return "box pizza";
    };

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}