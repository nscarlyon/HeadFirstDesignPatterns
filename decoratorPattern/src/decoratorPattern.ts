export abstract class Beverage {
    description: string = "Unknown Beverage";
    size: string = "tall";
    abstract cost():number;

    setSize(size: string): void {
        this.size = size;
    };

    getSize(): string {
        return this.size;
    };

    getDescription(): string {
        return this.description;
    }
}

export abstract class CondimentDecorator extends Beverage {
    abstract getDescription(): string;
}

export class Espresso extends Beverage {
    constructor() {
        super();
        this.description = "Espresso";
    }

    cost(): number {
        return 1.99;
    }
}

export class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = "House Blend Coffee";
    }

    cost(): number {
        return .89;
    }
}

export class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "Dark Roast Coffee";
    }

    cost(): number {
        return .99;
    }
}

export class Mocha extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number {
        if (this.beverage.getSize() === "tall") return .20 + this.beverage.cost();
        if (this.beverage.getSize() === "grande") return .25 + this.beverage.cost();
        if (this.beverage.getSize() === "venti") return .30 + this.beverage.cost();
    }
}

export class Whip extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    cost(): number {
        return .10 + this.beverage.cost();
    }
}