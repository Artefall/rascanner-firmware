const {exec} = require('child_process');
const Processor = require('./Processor');
const NetCard = require('./NetCard');

class Scanner{    
    constructor(interfaceToListen){
        this.netCard = new NetCard(interfaceToListen);
        this.processor = new Processor();
    }

    run (){
        this.netCard.sniffPackages(this.processor.processMacAddressChunk);
    }    
};

module.exports = Scanner;