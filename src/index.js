// const Scanner = require('./classes/NetCard');
const NetCard = require('./classes/NetCard');

const iface = process.argv[2];
const interfaceNotSet = !iface || iface === '';

if (interfaceNotSet) throw new Error(`Interface wasn’t set`);

console.log('NodeJS is running…');

new NetCard(iface).pipe.forEach(console.log);