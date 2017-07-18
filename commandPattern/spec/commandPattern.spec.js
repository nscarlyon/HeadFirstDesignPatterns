"use strict";
var commandPattern_1 = require("../src/commandPattern");
describe('', function () {
    it('should set light on and off commands', function () {
        var remote = new commandPattern_1.RemoteControl();
        var light = new commandPattern_1.Light("Living Room");
        var lightOn = new commandPattern_1.LightOnCommand(light);
        var lightOff = new commandPattern_1.LightOffCommand(light);
        remote.setCommand(0, lightOn, lightOff);
        expect(remote.buttonWasPressed(0)).toEqual('Living Room light is on');
        expect(remote.offButtonWasPressed(0)).toEqual('Living Room light is off');
    });
    it('should set multiple commands', function () {
        var remote = new commandPattern_1.RemoteControl();
        var light = new commandPattern_1.Light("Living Room");
        var lightOn = new commandPattern_1.LightOnCommand(light);
        var lightOff = new commandPattern_1.LightOffCommand(light);
        var garageDoor = new commandPattern_1.GarageDoor();
        var openGarageDoor = new commandPattern_1.GarageDoorOpenCommand(garageDoor);
        var closeGarageDoor = new commandPattern_1.GarageDoorCloseCommand(garageDoor);
        remote.setCommand(0, lightOn, lightOff);
        remote.setCommand(1, openGarageDoor, closeGarageDoor);
        expect(remote.buttonWasPressed(0)).toEqual('Living Room light is on');
        expect(remote.offButtonWasPressed(0)).toEqual('Living Room light is off');
        expect(remote.buttonWasPressed(1)).toEqual('Garage door is open');
        expect(remote.offButtonWasPressed(1)).toEqual('Garage door is close');
    });
    it('should be able to press a button with no command', function () {
        var remote = new commandPattern_1.RemoteControl();
        expect(remote.buttonWasPressed(0)).toEqual("Please set a command");
    });
    it('should undo turning a light on', function () {
        var remote = new commandPattern_1.RemoteControl();
        var light = new commandPattern_1.Light("Living Room");
        var lightOn = new commandPattern_1.LightOnCommand(light);
        var lightOff = new commandPattern_1.LightOffCommand(light);
        remote.setCommand(0, lightOn, lightOff);
        remote.buttonWasPressed(0);
        expect(remote.undoButtonWasPushed()).toEqual("Living Room light is off");
    });
    it('should undo ceiling fan commands', function () {
        var remote = new commandPattern_1.RemoteControl();
        var ceilingFan = new commandPattern_1.CeilingFan("Bed Room");
        var ceilingFanHighCommand = new commandPattern_1.CeilingFanHighCommand(ceilingFan);
        var ceilingFanMediumCommand = new commandPattern_1.CeilingFanMediumCommand(ceilingFan);
        var ceilingFanOffCommand = new commandPattern_1.CeilingFanOffCommand(ceilingFan);
        remote.setCommand(0, ceilingFanHighCommand, ceilingFanOffCommand);
        remote.setCommand(1, ceilingFanMediumCommand, ceilingFanOffCommand);
        remote.buttonWasPressed(0);
        remote.buttonWasPressed(1);
        expect(remote.undoButtonWasPushed()).toEqual("Ceiling fan speed is set to 3");
    });
    it('should set macro commands', function () {
        var remote = new commandPattern_1.RemoteControl();
        var light = new commandPattern_1.Light("Living Room");
        var lightOn = new commandPattern_1.LightOnCommand(light);
        var lightOff = new commandPattern_1.LightOffCommand(light);
        var stereo = new commandPattern_1.Stereo("Kitchen");
        var stereoOn = new commandPattern_1.StereoOnWithCDCommand(stereo);
        var stereoOff = new commandPattern_1.StereoOffCommand(stereo);
        var partyOn = [lightOn, stereoOn];
        var partyOff = [lightOff, stereoOff];
        var partyOnMacro = new commandPattern_1.MacroCommand(partyOn);
        var partyOffMacro = new commandPattern_1.MacroCommand(partyOff);
        remote.setCommand(0, partyOnMacro, partyOffMacro);
        expect(remote.buttonWasPressed(0)).toEqual("Living Room light is on\n" +
            "Kitchen stereo is on\n" +
            "Kitchen stereo is set for CD input\n" +
            "Kitchen stereo volume set to 11\n");
    });
});
//# sourceMappingURL=commandPattern.spec.js.map