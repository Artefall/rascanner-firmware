const { argv } = require('process');

const Scanner = require('./classes/Scanner');


const interfaceToListen = argv[2];
const interfaceNotSet = !interfaceToListen || interfaceToListen === '';

if (interfaceNotSet) throw new Error(`Interface wasn’t set`);

console.log('NodeJS is running…');

new Scanner(interfaceToListen);