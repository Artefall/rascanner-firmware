class Processor{
    constructor(){
        this.lastRecord = '';
    }

    processMacAddressChunk (chunk){
        
        const DEFAULT_MAC_LENGTH_IN_SYMBOLS = 17;
        const NEW_LINE = '\n';

        let processableChunk = this.lastRecord + chunk;
        const processedMacAddress = processableChunk.split(NEW_LINE);
        let indexOfLastProcessedMac = processedMacAddress.length - 1;
        let lastProcessedMacIncomplete = processedMacAddress[indexOfLastProcessedMac].length != DEFAULT_MAC_LENGTH_IN_SYMBOLS;

        if (lastProcessedMacIncomplete) this.lastRecord = processedMacAddress.pop();
        
        console.log(processedMacAddress);

        return processedMacAddress;
    };
}

module.exports = Processor;