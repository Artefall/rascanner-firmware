const Cli = require('./Cli');

class NetCard {

    constructor(interface){
        this.interface = interface;
        this.cli = new Cli();
    }

    sniffPackages(handler){
        this.cli.sniffPackages(this.interface, handler);
    }

    monitorModeSwitchAndChangeChannels(){
        console.log("Switch netcard to monitor mode");
        this.cli.switchCardToMonitorMode();
        console.log("Done");

        console.log("Start to change channels");
        this.cli.changeChannel();

    }

    managedModeSwitch(){
        console.log("Switch netcard to managed mode");
        this.cli.switchCardToManagedMode();
        console.log("Done");
    }

}

module.exports = NetCard;