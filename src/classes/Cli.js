const {exec} = require('child_process');

class Cli{

    executeCommand(command){
        let child = exec(command);
        return child;
    }

    sniffPackages(interface, handler){
        const GREP_EXP_FIND_MAC = '([[:xdigit:]]{2}:){5}([[:xdigit:]]{2})';
        const sniffPackagesCommand = `sudo tcpdump -i ${interface} -e | grep -o -E '${GREP_EXP_FIND_MAC}' | uniq`;

        this.executeCommand(sniffPackagesCommand).stdout.on(handler);
    }

    switchCardToManagedMode(interface){
        const changeToManagedModeCommand = `sudo ip link set ${interface} down && sudo iw ${interface} set type managed && sudo ip link set ${interface} up`;

        this.executeCommand(changeToManagedModeCommand);
    }

    switchCardToMonitorMode(interface){
        const changeToMonitorModeCommand = `sudo ip link set ${interface} down && sudo iw ${interface} set monitor control && sudo rfkill unblock all && sudo ip link set ${interface} up`;
        
        this.executeCommand(changeToMonitorModeCommand);    
    }

    changeChannel(){

        const FIRST_CHANNEL = 1;
        const LAST_CHANNEL = 13;

        for(channelNumber = FIRST_CHANNEL; channelNumber <= LAST_CHANNEL; channelNumber++) {
            const switchChannelCommand = `sudo iwconfig ${interface} channel ${channelNumber} && sleep 0.05s`;
            this.executeCommand(switchChannelCommand);
        }
    }

}

module.exports = Cli;