export interface Command {
    execute(): string;
    undo(): string;
}

export class LightOnCommand implements Command {
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): string {
        return this.light.on();
    }

    undo(): string {
        return this.light.off();
    }
}

export class LightOffCommand implements Command {
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): string {
        return this.light.off();
    }

    undo(): string {
        return this.light.on();
    }
}

export class Light {
    location: string;

    constructor(location: string) {
        this.location = location;
    }

    on(): string {
        return this.location + " light is on";
    }

    off(): string {
        return this.location + " light is off";
    }
}

export class NoCommand implements Command{
    execute(): string {
        return "Please set a command";
    }

    undo(): string {
        return "";
    }
}

export class RemoteControl {
    onCommands: Command[];
    offCommands: Command[];
    undoCommand: Command;

    constructor() {
        this.onCommands = [];
        this.offCommands = [];

        let noCommand: Command = new NoCommand();
        for(let i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
        this.undoCommand = noCommand;
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    buttonWasPressed(slot: number): string {
        this.undoCommand = this.onCommands[slot];
        return this.onCommands[slot].execute();
    }

    offButtonWasPressed(slot: number): string {
        this.undoCommand = this.offCommands[slot];
        return this.offCommands[slot].execute();
    }

    undoButtonWasPushed(): string {
        return this.undoCommand.undo();
    }

    toString(): string {
        let stringBuff: string = "\n=====Remote Control====\n";
        for (let i = 0; i < this.onCommands.length; i ++) {
            stringBuff+= "[slot " + i + "] " +
                this.onCommands[i] + "\n";
        }
        return stringBuff;
    }
}

export class GarageDoorOpenCommand implements  Command {
    garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    execute(): string {
        return this.garageDoor.up();
    }

    undo(): string {
        return this.garageDoor.down();
    }
}

export class GarageDoorCloseCommand implements  Command {
    garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    execute(): string {
        return this.garageDoor.down();
    }

    undo(): string {
        return this.garageDoor.up();
    }
}

export class GarageDoor {
    up(): string {
        return "Garage door is open";
    }

    down(): string {
        return "Garage door is close";
    }
}

export class StereoOnWithCDCommand implements  Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): string {
        return this.stereo.on() + "\n" +
             this.stereo.setCD() + "\n" +
             this.stereo.setVolume(11);
    }

    undo(): string {
        return this.stereo.off();
    }
}

export class StereoOffCommand implements  Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): string {
        return this.stereo.off();
    }

    undo(): string {
        return this.stereo.on() + this.stereo.setCD() + this.stereo.setVolume(11);
    }
}

export class Stereo {
    location: string;

    constructor(location: string) {
        this.location = location;
    }

    on(): string {
        return this.location + " stereo is on";
    }

    off(): string {
        return this.location + " stereo is off";
    }

    setCD(): string {
        return this.location + " stereo is set for CD input";
    }

    setVolume(volume: number): string {
        return this.location + " stereo volume set to " + volume;
    }
}

export class CeilingFan {
    high: number = 3;
    medium: number = 2;
    low: number = 1;
    off: number = 0;
    location: string;
    speed: number;

    constructor(location: string) {
        this.location = location;
        this.speed = this.off;
    }

    setHigh(): string {
        this.speed = this.high;
        return "Ceiling fan speed is set to " + this.speed;
    }

    setMedium(): string {
        this.speed = this.medium;
        return "Ceiling fan speed is set to " + this.speed;
    }

    setLow(): string {
        this.speed = this.low;
        return "Ceiling fan speed is set to " + this.speed;
    }

    setOff(): string {
        this.speed = this.off;
        return "Ceiling fan speed is set to " + this.speed;
    }

    getSpeed(): number {
        return this.speed;
    }
}

export class CeilingFanHighCommand implements  Command {
    ceilingFan: CeilingFan;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): string {
        this.prevSpeed = this.ceilingFan.getSpeed();
        return this.ceilingFan.setHigh();
    }

    undo(): string {
        if (this.prevSpeed === this.ceilingFan.high) {
            return this.ceilingFan.setHigh();
        } else if (this.prevSpeed === this.ceilingFan.medium) {
            return this.ceilingFan.setMedium();
        } else if (this.prevSpeed === this.ceilingFan.low) {
            return this.ceilingFan.setLow();
        } else if (this.prevSpeed === this.ceilingFan.off) {
            return this.ceilingFan.setOff();
        }
    }
}

export class CeilingFanOffCommand implements  Command {
    ceilingFan: CeilingFan;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): string {
        this.prevSpeed = this.ceilingFan.getSpeed();
        return this.ceilingFan.setOff();
    }

    undo(): string {
        if (this.prevSpeed === this.ceilingFan.high) {
            return this.ceilingFan.setHigh();
        } else if (this.prevSpeed === this.ceilingFan.medium) {
            return this.ceilingFan.setMedium();
        } else if (this.prevSpeed === this.ceilingFan.low) {
            return this.ceilingFan.setLow();
        } else if (this.prevSpeed === this.ceilingFan.off) {
            return this.ceilingFan.setOff();
        }
    }
}

export class CeilingFanMediumCommand implements  Command {
    ceilingFan: CeilingFan;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): string {
        this.prevSpeed = this.ceilingFan.getSpeed();
        return this.ceilingFan.setMedium();
    }

    undo(): string {
        if (this.prevSpeed === this.ceilingFan.high) {
            return this.ceilingFan.setHigh();
        } else if (this.prevSpeed === this.ceilingFan.medium) {
            return this.ceilingFan.setMedium();
        } else if (this.prevSpeed === this.ceilingFan.low) {
            return this.ceilingFan.setLow();
        } else if (this.prevSpeed === this.ceilingFan.off) {
            return this.ceilingFan.setOff();
        }
    }
}

export class MacroCommand implements  Command {
    commands: Command[];

    constructor(commands: Command[]) {
        this.commands = commands;
    }

    execute(): string {
        let output: string = "";
        for(let i = 0; i < this.commands.length; i++) {
            output+=this.commands[i].execute() +"\n";
        }
        return output;
    }

    undo(): string {
        let output: string = "";
        for(let i = 0; i < this.commands.length; i++) {
            this.commands[i].undo();
        }
        return output;
    }
}