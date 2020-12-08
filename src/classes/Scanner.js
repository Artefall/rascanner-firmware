const Processor = require('../handlers/Processor');
const NetCard = require('./NetCard');

class Scanner {
	constructor (iface) {
		this.netCard = new NetCard(iface);
		this.processor = new Processor();
	}
}

module.exports = Scanner;