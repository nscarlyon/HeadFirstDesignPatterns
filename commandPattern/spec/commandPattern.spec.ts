import {
    Light, LightOnCommand,
    RemoteControl, LightOffCommand, GarageDoor, GarageDoorOpenCommand, GarageDoorCloseCommand, CeilingFan,
    CeilingFanHighCommand, CeilingFanOffCommand, CeilingFanMediumCommand, Stereo, StereoOnWithCDCommand,
    StereoOffCommand, Command, MacroCommand
} from "../src/commandPattern";

describe('', () => {

    it('should set light on and off commands', () => {
        let remote: RemoteControl = new RemoteControl();
        let light: Light = new Light("Living Room");
        let lightOn: LightOnCommand = new LightOnCommand(light);
        let lightOff: LightOffCommand= new LightOffCommand(light);

        remote.setCommand(0, lightOn, lightOff);
        expect(remote.buttonWasPressed(0)).toEqual('Living Room light is on');
        expect(remote.offButtonWasPressed(0)).toEqual('Living Room light is off');
    });

    it('should set multiple commands', () => {
        let remote: RemoteControl = new RemoteControl();
        let light: Light = new Light("Living Room");
        let lightOn: LightOnCommand = new LightOnCommand(light);
        let lightOff: LightOffCommand= new LightOffCommand(light);
        let garageDoor: GarageDoor = new GarageDoor();
        let openGarageDoor: GarageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
        let closeGarageDoor: GarageDoorCloseCommand = new GarageDoorCloseCommand(garageDoor);

        remote.setCommand(0, lightOn, lightOff);
        remote.setCommand(1, openGarageDoor, closeGarageDoor);
        expect(remote.buttonWasPressed(0)).toEqual('Living Room light is on');
        expect(remote.offButtonWasPressed(0)).toEqual('Living Room light is off');
        expect(remote.buttonWasPressed(1)).toEqual('Garage door is open');
        expect(remote.offButtonWasPressed(1)).toEqual('Garage door is close');
    });

    it('should be able to press a button with no command', () => {
        let remote: RemoteControl = new RemoteControl();
        expect(remote.buttonWasPressed(0)).toEqual("Please set a command");
    });

    it('should undo turning a light on', () => {
        let remote: RemoteControl = new RemoteControl();
        let light: Light = new Light("Living Room");
        let lightOn: LightOnCommand = new LightOnCommand(light);
        let lightOff: LightOffCommand= new LightOffCommand(light);
        remote.setCommand(0, lightOn, lightOff);
        remote.buttonWasPressed(0);
        expect(remote.undoButtonWasPushed()).toEqual("Living Room light is off");
    });

    it('should undo ceiling fan commands', () => {
        let remote: RemoteControl = new RemoteControl();
        let ceilingFan: CeilingFan = new CeilingFan("Bed Room");
        let ceilingFanHighCommand: CeilingFanHighCommand = new CeilingFanHighCommand(ceilingFan);
        let ceilingFanMediumCommand: CeilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan);
        let ceilingFanOffCommand: CeilingFanOffCommand= new CeilingFanOffCommand(ceilingFan);

        remote.setCommand(0, ceilingFanHighCommand, ceilingFanOffCommand);
        remote.setCommand(1, ceilingFanMediumCommand, ceilingFanOffCommand);
        remote.buttonWasPressed(0);
        remote.buttonWasPressed(1);
        expect(remote.undoButtonWasPushed()).toEqual("Ceiling fan speed is set to 3");
    });

    it('should set macro commands', () => {
        let remote: RemoteControl = new RemoteControl();
        let light: Light = new Light("Living Room");
        let lightOn: LightOnCommand = new LightOnCommand(light);
        let lightOff: LightOffCommand= new LightOffCommand(light);
        let stereo: Stereo = new Stereo("Kitchen");
        let stereoOn: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo);
        let stereoOff: StereoOffCommand = new StereoOffCommand(stereo);
        let partyOn: Command[] = [lightOn, stereoOn];
        let partyOff: Command[] = [lightOff, stereoOff];
        let partyOnMacro: MacroCommand = new MacroCommand(partyOn);
        let partyOffMacro: MacroCommand = new MacroCommand(partyOff);
        remote.setCommand(0, partyOnMacro, partyOffMacro);
        expect(remote.buttonWasPressed(0)).toEqual("Living Room light is on\n" +
            "Kitchen stereo is on\n" +
            "Kitchen stereo is set for CD input\n" +
            "Kitchen stereo volume set to 11\n");
    });
});