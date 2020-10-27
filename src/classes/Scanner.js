const {exec} = require('child_process');
const Processor = require('./Processor');

const GREP_EXP_FIND_MAC = '([[:xdigit:]]{2}:){5}([[:xdigit:]]{2})';

class Scanner{    
    constructor(interfaceToListen){
        this.command = `sudo tcpdump -i ${interfaceToListen} -e | grep -o -E '${GREP_EXP_FIND_MAC}'`;
        this.processor = new Processor();
    }

    run (){
        this.macAddressStream = exec(this.command).stdout;
        this.macAddressStream.on('data', this.processor.processMacAddressChunk);
    }
    
};

module.exports = Scanner;