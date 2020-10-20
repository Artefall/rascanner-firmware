const {exec} = require('child_process');
const {processMacAddress} = require('./utils');
const { argv } = require('process');
const INTERFACE = argv[2];
const COMMAND = `sudo tcpdump -i ${INTERFACE} -e | grep -o -E '([[:xdigit:]]{2}:){5}([[:xdigit:]]{2})'`;
const child = exec(COMMAND);

console.log("NodeJS is running");

let lastRecord = "";

child.stdout.on('data', chunk => {
    console.log(chunk);
    let processedMacs = processMacAddress(chunk, lastRecord);
    
    console.log(processedMacs);
});

