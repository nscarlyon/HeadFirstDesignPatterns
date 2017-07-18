// export class Coffee extends CaffeineBeverage {
//     brew(): string {
//         return "Dripping coffee through filter";
//     }
//
//     addCondiments(): string {
//         return "Adding sugar and milk";
//     }
// }

abstract class CaffeineBeverage {
    abstract brew(): string;
    abstract addCondiments(): string;

    prepareRecipe(): string {
        let output: string = "";
        output+=this.boilWater() + "\n";
        output+=this.brew() + "\n";
        output+=this.pourInCup() + "\n";
        output+=this.addCondiments();
        return output;
    }

    boilWater(): string {
        return "Boiling water";
    }

    pourInCup(): string {
        return "Pouring into cup";
    }
}

export class Tea extends CaffeineBeverage {
    brew(): string {
        return "Steeping the tea";
    }

    addCondiments(): string {
        return "Adding lemon";
    }
}


