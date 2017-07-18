"use strict";
var LightOnCommand = (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.execute = function () {
        return this.light.on();
    };
    LightOnCommand.prototype.undo = function () {
        return this.light.off();
    };
    return LightOnCommand;
}());
exports.LightOnCommand = LightOnCommand;
var LightOffCommand = (function () {
    function LightOffCommand(light) {
        this.light = light;
    }
    LightOffCommand.prototype.execute = function () {
        return this.light.off();
    };
    LightOffCommand.prototype.undo = function () {
        return this.light.on();
    };
    return LightOffCommand;
}());
exports.LightOffCommand = LightOffCommand;
var Light = (function () {
    function Light(location) {
        this.location = location;
    }
    Light.prototype.on = function () {
        return this.location + " light is on";
    };
    Light.prototype.off = function () {
        return this.location + " light is off";
    };
    return Light;
}());
exports.Light = Light;
var NoCommand = (function () {
    function NoCommand() {
    }
    NoCommand.prototype.execute = function () {
        return "Please set a command";
    };
    NoCommand.prototype.undo = function () {
        return "";
    };
    return NoCommand;
}());
exports.NoCommand = NoCommand;
var RemoteControl = (function () {
    function RemoteControl() {
        this.onCommands = [];
        this.offCommands = [];
        var noCommand = new NoCommand();
        for (var i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
        this.undoCommand = noCommand;
    }
    RemoteControl.prototype.setCommand = function (slot, onCommand, offCommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    };
    RemoteControl.prototype.buttonWasPressed = function (slot) {
        this.undoCommand = this.onCommands[slot];
        return this.onCommands[slot].execute();
    };
    RemoteControl.prototype.offButtonWasPressed = function (slot) {
        this.undoCommand = this.offCommands[slot];
        return this.offCommands[slot].execute();
    };
    RemoteControl.prototype.undoButtonWasPushed = function () {
        return this.undoCommand.undo();
    };
    RemoteControl.prototype.toString = function () {
        var stringBuff = "\n=====Remote Control====\n";
        for (var i = 0; i < this.onCommands.length; i++) {
            stringBuff += "[slot " + i + "] " +
                this.onCommands[i] + "\n";
        }
        return stringBuff;
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
var GarageDoorOpenCommand = (function () {
    function GarageDoorOpenCommand(garageDoor) {
        this.garageDoor = garageDoor;
    }
    GarageDoorOpenCommand.prototype.execute = function () {
        return this.garageDoor.up();
    };
    GarageDoorOpenCommand.prototype.undo = function () {
        return this.garageDoor.down();
    };
    return GarageDoorOpenCommand;
}());
exports.GarageDoorOpenCommand = GarageDoorOpenCommand;
var GarageDoorCloseCommand = (function () {
    function GarageDoorCloseCommand(garageDoor) {
        this.garageDoor = garageDoor;
    }
    GarageDoorCloseCommand.prototype.execute = function () {
        return this.garageDoor.down();
    };
    GarageDoorCloseCommand.prototype.undo = function () {
        return this.garageDoor.up();
    };
    return GarageDoorCloseCommand;
}());
exports.GarageDoorCloseCommand = GarageDoorCloseCommand;
var GarageDoor = (function () {
    function GarageDoor() {
    }
    GarageDoor.prototype.up = function () {
        return "Garage door is open";
    };
    GarageDoor.prototype.down = function () {
        return "Garage door is close";
    };
    return GarageDoor;
}());
exports.GarageDoor = GarageDoor;
var StereoOnWithCDCommand = (function () {
    function StereoOnWithCDCommand(stereo) {
        this.stereo = stereo;
    }
    StereoOnWithCDCommand.prototype.execute = function () {
        return this.stereo.on() + "\n" +
            this.stereo.setCD() + "\n" +
            this.stereo.setVolume(11);
    };
    StereoOnWithCDCommand.prototype.undo = function () {
        return this.stereo.off();
    };
    return StereoOnWithCDCommand;
}());
exports.StereoOnWithCDCommand = StereoOnWithCDCommand;
var StereoOffCommand = (function () {
    function StereoOffCommand(stereo) {
        this.stereo = stereo;
    }
    StereoOffCommand.prototype.execute = function () {
        return this.stereo.off();
    };
    StereoOffCommand.prototype.undo = function () {
        return this.stereo.on() + this.stereo.setCD() + this.stereo.setVolume(11);
    };
    return StereoOffCommand;
}());
exports.StereoOffCommand = StereoOffCommand;
var Stereo = (function () {
    function Stereo(location) {
        this.location = location;
    }
    Stereo.prototype.on = function () {
        return this.location + " stereo is on";
    };
    Stereo.prototype.off = function () {
        return this.location + " stereo is off";
    };
    Stereo.prototype.setCD = function () {
        return this.location + " stereo is set for CD input";
    };
    Stereo.prototype.setVolume = function (volume) {
        return this.location + " stereo volume set to " + volume;
    };
    return Stereo;
}());
exports.Stereo = Stereo;
var CeilingFan = (function () {
    function CeilingFan(location) {
        this.high = 3;
        this.medium = 2;
        this.low = 1;
        this.off = 0;
        this.location = location;
        this.speed = this.off;
    }
    CeilingFan.prototype.setHigh = function () {
        this.speed = this.high;
        return "Ceiling fan speed is set to " + this.speed;
    };
    CeilingFan.prototype.setMedium = function () {
        this.speed = this.medium;
        return "Ceiling fan speed is set to " + this.speed;
    };
    CeilingFan.prototype.setLow = function () {
        this.speed = this.low;
        return "Ceiling fan speed is set to " + this.speed;
    };
    CeilingFan.prototype.setOff = function () {
        this.speed = this.off;
        return "Ceiling fan speed is set to " + this.speed;
    };
    CeilingFan.prototype.getSpeed = function () {
        return this.speed;
    };
    return CeilingFan;
}());
exports.CeilingFan = CeilingFan;
var CeilingFanHighCommand = (function () {
    function CeilingFanHighCommand(ceilingFan) {
        this.ceilingFan = ceilingFan;
    }
    CeilingFanHighCommand.prototype.execute = function () {
        this.prevSpeed = this.ceilingFan.getSpeed();
        return this.ceilingFan.setHigh();
    };
    CeilingFanHighCommand.prototype.undo = function () {
        if (this.prevSpeed === this.ceilingFan.high) {
            return this.ceilingFan.setHigh();
        }
        else if (this.prevSpeed === this.ceilingFan.medium) {
            return this.ceilingFan.setMedium();
        }
        else if (this.prevSpeed === this.ceilingFan.low) {
            return this.ceilingFan.setLow();
        }
        else if (this.prevSpeed === this.ceilingFan.off) {
            return this.ceilingFan.setOff();
        }
    };
    return CeilingFanHighCommand;
}());
exports.CeilingFanHighCommand = CeilingFanHighCommand;
var CeilingFanOffCommand = (function () {
    function CeilingFanOffCommand(ceilingFan) {
        this.ceilingFan = ceilingFan;
    }
    CeilingFanOffCommand.prototype.execute = function () {
        this.prevSpeed = this.ceilingFan.getSpeed();
        return this.ceilingFan.setOff();
    };
    CeilingFanOffCommand.prototype.undo = function () {
        if (this.prevSpeed === this.ceilingFan.high) {
            return this.ceilingFan.setHigh();
        }
        else if (this.prevSpeed === this.ceilingFan.medium) {
            return this.ceilingFan.setMedium();
        }
        else if (this.prevSpeed === this.ceilingFan.low) {
            return this.ceilingFan.setLow();
        }
        else if (this.prevSpeed === this.ceilingFan.off) {
            return this.ceilingFan.setOff();
        }
    };
    return CeilingFanOffCommand;
}());
exports.CeilingFanOffCommand = CeilingFanOffCommand;
var CeilingFanMediumCommand = (function () {
    function CeilingFanMediumCommand(ceilingFan) {
        this.ceilingFan = ceilingFan;
    }
    CeilingFanMediumCommand.prototype.execute = function () {
        this.prevSpeed = this.ceilingFan.getSpeed();
        return this.ceilingFan.setMedium();
    };
    CeilingFanMediumCommand.prototype.undo = function () {
        if (this.prevSpeed === this.ceilingFan.high) {
            return this.ceilingFan.setHigh();
        }
        else if (this.prevSpeed === this.ceilingFan.medium) {
            return this.ceilingFan.setMedium();
        }
        else if (this.prevSpeed === this.ceilingFan.low) {
            return this.ceilingFan.setLow();
        }
        else if (this.prevSpeed === this.ceilingFan.off) {
            return this.ceilingFan.setOff();
        }
    };
    return CeilingFanMediumCommand;
}());
exports.CeilingFanMediumCommand = CeilingFanMediumCommand;
var MacroCommand = (function () {
    function MacroCommand(commands) {
        this.commands = commands;
    }
    MacroCommand.prototype.execute = function () {
        var output = "";
        for (var i = 0; i < this.commands.length; i++) {
            output += this.commands[i].execute() + "\n";
        }
        return output;
    };
    MacroCommand.prototype.undo = function () {
        var output = "";
        for (var i = 0; i < this.commands.length; i++) {
            this.commands[i].undo();
        }
        return output;
    };
    return MacroCommand;
}());
exports.MacroCommand = MacroCommand;
//# sourceMappingURL=commandPattern.js.map