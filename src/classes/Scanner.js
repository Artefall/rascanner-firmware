const Analizer = require('./ScannerComponents/Analizer');
const Processor = require('./ScannerComponents/Processor');
const Sniffer = require('./ScannerComponents/Sniffer');

class Scanner{
    constructor(interface){
        this.analizer = new Analizer();
        this.processor = new Processor();
        this.sniffer = new Sniffer();
    }
}