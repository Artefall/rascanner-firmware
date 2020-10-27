const {exec} = require('child_process');
const {processMacAddress} = require('./utils');
const { argv } = require('process');
const interface = argv[2];
const grepExpFindMac = '([[:xdigit:]]{2}:){5}([[:xdigit:]]{2})';
const command = `sudo tcpdump -i ${interface} -e | grep -o -E '${grepExpFindMac}'`;
const child = exec(command);

console.log("NodeJS is running");

let lastRecord = "";

child.stdout.on('data', chunk => {
    console.log(chunk);
    let processedMacs = processMacAddress(chunk, lastRecord);
    
    console.log(processedMacs);
});

