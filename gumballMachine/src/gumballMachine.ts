export class GumballMachine {
    soldOutState: State;
    noQuarterState: State;
    hasQuarterState: State;
    soldState: State;
    winnerState: State;

    count: number = 0;
    state: State = this.soldOutState;

    constructor(numberOfGumballs: number) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);
        this.count = numberOfGumballs;
        this.state = this.soldOutState;
        if (this.count > 0) this.state = this.noQuarterState;
    }

    setState(state: State): void {
        this.state = state;
    }

    releaseBall(): void {
        if (this.count != 0) this.count -= 1;
    }

    getCount(): number {
        return this.count;
    }

    getNoQuarterState(): State {
        return this.noQuarterState;
    }

    getHasQuarterState(): State {
        return this.hasQuarterState;
    }

    getSoldOutState(): State {
        return this.soldOutState;
    }

    getSoldState(): State {
        return this.soldState
    }

    getWinnerState(): State {
        return this.winnerState;
    }

    refill(count: number): void {
        this.count = count;
        this.setState(this.getNoQuarterState());
    }
}

interface State {
    insertQuarter(): void;
    ejectQuarter(): void;
    turnCrank(): void;
    dispense(): void;
}

class NoQuarterState implements State {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter() {
        console.log("You inserted a quarter");
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())
    }

    ejectQuarter() {
        console.log("You haven't inserted a quarter.");
    }

    turnCrank() {
        console.log("You turned but there's no quarter.");
    }

    dispense() {
        console.log("You haven't inserted a quarter.");
    }

}

class HasQuarterState implements State {
    randomWinner: number = Math.floor(Math.random() * 12);
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter() {
        console.log("You can't insert another quarter");
    }

    ejectQuarter() {
        console.log("Eject Quarter");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    turnCrank() {
        console.log("You turned...");
        let winner: number = this.randomWinner;

        if (winner === 3 && this.gumballMachine.getCount() > 1) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        } else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }

    dispense() {
        console.log("No gumball dispensed");
    }
}


class SoldState implements State {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter() {
        console.log("Please wait, we're already giving you a gumball");
    }

    ejectQuarter() {
        console.log("Sorry, you already turned the crank.");
    }

    turnCrank() {
        console.log("Turning twice doesn't get you another gumball");
    }

    dispense() {
        console.log("A gumball comes rolling out the slot");
        this.gumballMachine.releaseBall();

        if (this.gumballMachine.getCount() === 0) {
            console.log("Oopa, out of gumballs!");
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
        else {
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        }
    }
}

class SoldOutState implements State {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter() {
        console.log("You can't insert a quarter, the machine is sold out");
    }

    ejectQuarter() {
        console.log("Sorry, you haven't inserted a quarter yet.");
    }

    turnCrank() {
        console.log("You turned, but there are no gumballs.");
    }

    dispense() {
        console.log("No gumball dispensed.");
    }
}

class WinnerState implements State {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter() {
        console.log("Please wait, we're already giving you a gumball");
    }

    ejectQuarter() {
        console.log("Sorry, you already turned the crank.");
    }

    turnCrank() {
        console.log("Turning twice doesn't get you another gumball");
    }

    dispense() {
        console.log("You're a winner! You get two gumballs for your quarter");
        this.gumballMachine.releaseBall();

        if (this.gumballMachine.getCount() === 0) {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        } else {
            this.gumballMachine.releaseBall();
            if (this.gumballMachine.getCount() > 0) {
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            } else {
                console.log("Oops, out of gumballs!");
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    }
}