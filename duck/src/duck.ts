 abstract class Duck implements QuackBehavior{
    quackBehavior: QuackBehavior;

    quack(): void {
        console.log(this.quackBehavior.quack());
    }
}

export class MallardDuck extends Duck {
     quackBehavior: Quack;

    constructor() {
        super();
        this.quackBehavior = new Quack();
    }
}

interface QuackBehavior {
    quack(): void;
}

class Quack implements QuackBehavior {
    quack(): void {
        console.log("quack");
    }
}