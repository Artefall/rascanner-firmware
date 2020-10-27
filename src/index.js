const Scanner = require('./classes/Scanner');
const { argv } = require('process');
const {exec} = require('child_process');
const START_SCRIPT_PATH = './../scripts/start.sh';
const interfaceToListen = argv[2];

if (!interfaceToListen || interfaceToListen == "") throw Error(`Interface wasn't set`);

console.log("Run bash scripts...");

exec(`${START_SCRIPT_PATH} ${interfaceToListen}`);

console.log("NodeJS is running...");


const scanner = new Scanner(interfaceToListen);
scanner.run();
