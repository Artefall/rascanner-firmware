const Scanner = require('./classes/Scanner');
const { argv } = require('process');
const interfaceToListen = argv[2];

console.log("NodeJS is running");

const scanner = new Scanner(interfaceToListen);

scanner.run();
