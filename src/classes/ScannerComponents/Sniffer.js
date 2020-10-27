const {exec} = require('child_process');
const VALUES = require('../../constants');

class Sniffer{    
    constructor(interfaceToListen){
        this.command = `sudo tcpdump -i ${interfaceToListen} -e | grep -o -E '${VALUES.GREP_EXP_FIND_MAC}'`;
    }
      
}