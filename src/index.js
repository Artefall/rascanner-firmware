const Scanner = require('./classes/Scanner');
const {argv} = require('process');
const interfaceToListen = argv[2];

const interfaceNotSet = !interfaceToListen || interfaceToListen == "";

if (interfaceNotSet) throw Error(`Interface wasn't set`);

console.log("NodeJS is running...");

const scanner = new Scanner(interfaceToListen);
scanner.run();