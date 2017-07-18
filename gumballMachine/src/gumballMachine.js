"use strict";
var GumballMachine = (function () {
    function GumballMachine(numberOfGumballs) {
        this.count = 0;
        this.state = this.soldOutState;
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);
        this.count = numberOfGumballs;
        this.state = this.soldOutState;
        if (this.count > 0)
            this.state = this.noQuarterState;
    }
    GumballMachine.prototype.setState = function (state) {
        this.state = state;
    };
    GumballMachine.prototype.releaseBall = function () {
        if (this.count != 0)
            this.count -= 1;
    };
    GumballMachine.prototype.getCount = function () {
        return this.count;
    };
    GumballMachine.prototype.getNoQuarterState = function () {
        return this.noQuarterState;
    };
    GumballMachine.prototype.getHasQuarterState = function () {
        return this.hasQuarterState;
    };
    GumballMachine.prototype.getSoldOutState = function () {
        return this.soldOutState;
    };
    GumballMachine.prototype.getSoldState = function () {
        return this.soldState;
    };
    GumballMachine.prototype.getWinnerState = function () {
        return this.winnerState;
    };
    GumballMachine.prototype.refill = function (count) {
        this.count = count;
        this.setState(this.getNoQuarterState());
    };
    return GumballMachine;
}());
exports.GumballMachine = GumballMachine;
var NoQuarterState = (function () {
    function NoQuarterState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    NoQuarterState.prototype.insertQuarter = function () {
        console.log("You inserted a quarter");
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    };
    NoQuarterState.prototype.ejectQuarter = function () {
        console.log("You haven't inserted a quarter.");
    };
    NoQuarterState.prototype.turnCrank = function () {
        console.log("You turned but there's no quarter.");
    };
    NoQuarterState.prototype.dispense = function () {
        console.log("You haven't inserted a quarter.");
    };
    return NoQuarterState;
}());
var HasQuarterState = (function () {
    function HasQuarterState(gumballMachine) {
        this.randomWinner = Math.floor(Math.random() * 12);
        this.gumballMachine = gumballMachine;
    }
    HasQuarterState.prototype.insertQuarter = function () {
        console.log("You can't insert another quarter");
    };
    HasQuarterState.prototype.ejectQuarter = function () {
        console.log("Eject Quarter");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    };
    HasQuarterState.prototype.turnCrank = function () {
        console.log("You turned...");
        var winner = this.randomWinner;
        if (winner === 3 && this.gumballMachine.getCount() > 1) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        }
        else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    };
    HasQuarterState.prototype.dispense = function () {
        console.log("No gumball dispensed");
    };
    return HasQuarterState;
}());
var SoldState = (function () {
    function SoldState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    SoldState.prototype.insertQuarter = function () {
        console.log("Please wait, we're already giving you a gumball");
    };
    SoldState.prototype.ejectQuarter = function () {
        console.log("Sorry, you already turned the crank.");
    };
    SoldState.prototype.turnCrank = function () {
        console.log("Turning twice doesn't get you another gumball");
    };
    SoldState.prototype.dispense = function () {
        console.log("A gumball comes rolling out the slot");
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() === 0) {
            console.log("Oopa, out of gumballs!");
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
        else {
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        }
    };
    return SoldState;
}());
var SoldOutState = (function () {
    function SoldOutState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    SoldOutState.prototype.insertQuarter = function () {
        console.log("You can't insert a quarter, the machine is sold out");
    };
    SoldOutState.prototype.ejectQuarter = function () {
        console.log("Sorry, you haven't inserted a quarter yet.");
    };
    SoldOutState.prototype.turnCrank = function () {
        console.log("You turned, but there are no gumballs.");
    };
    SoldOutState.prototype.dispense = function () {
        console.log("No gumball dispensed.");
    };
    return SoldOutState;
}());
var WinnerState = (function () {
    function WinnerState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    WinnerState.prototype.insertQuarter = function () {
        console.log("Please wait, we're already giving you a gumball");
    };
    WinnerState.prototype.ejectQuarter = function () {
        console.log("Sorry, you already turned the crank.");
    };
    WinnerState.prototype.turnCrank = function () {
        console.log("Turning twice doesn't get you another gumball");
    };
    WinnerState.prototype.dispense = function () {
        console.log("You're a winner! You get two gumballs for your quarter");
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() === 0) {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
        else {
            this.gumballMachine.releaseBall();
            if (this.gumballMachine.getCount() > 0) {
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            }
            else {
                console.log("Oops, out of gumballs!");
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    };
    return WinnerState;
}());
//# sourceMappingURL=gumballMachine.js.map