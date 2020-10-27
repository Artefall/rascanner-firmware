module.exports = {
    processMacAddress: (chunk, lastRecord) => {
        
        const DEFAULT_MAC_LENGTH_IN_SYMBOLS = 17;
        const NEW_LINE = '\n';

        let processableChunk = lastRecord + chunk;
        const processedMacAddress = processableChunk.split(NEW_LINE);
        let indexOfLastProcessedMac = processedMacAddress.length - 1;
        let lastProcessedMacIncomplete = processedMacAddress[indexOfLastProcessedMac].length != DEFAULT_MAC_LENGTH_IN_SYMBOLS;

        if (lastProcessedMacIncomplete) lastRecord = processedMacAddress.pop();

        return processedMacAddress;
    }
}
