const { exec } = require('child_process');

const Streamed = require('streamed');


class NetCard {
	constructor (iface) {
		this.iface = iface;

		const ALLOWED_AMMOUNT_OF_CHUNKS_IN_STREAM = 1;

		this.pipe = new Streamed(ALLOWED_AMMOUNT_OF_CHUNKS_IN_STREAM);

		this.sniffPackages();
	}

	changeChannelsConstantly () {
		const FIRST_CHANNEL = 1;
		const LAST_CHANNEL = 13;

		const ALWAYS_CHANGE_CHANNEL = true;

		while (ALWAYS_CHANGE_CHANNEL) {
			for (let channelNumber = FIRST_CHANNEL; channelNumber <= LAST_CHANNEL; channelNumber++) {
				const switchChannelCommand = `sudo iwconfig ${this.iface} channel ${channelNumber} && sleep 0.05s`;

				exec(switchChannelCommand);
			}
		}
	}

	sniffPackages () {
		const GREP_EXP_FIND_MAC = '([[:xdigit:]]{2}:){5}([[:xdigit:]]{2})';
		const sniffCommand = `sudo tcpdump -i ${this.iface} -e | grep -o -E '${GREP_EXP_FIND_MAC}'`;

		let child = exec(sniffCommand);

		child.stdout.on('data', chunk => {
			this.pipe.push(chunk);
		});
	}
}

module.exports = NetCard;

// child.stdout.on('close', data => {
// 	console.log(`close : ${data}`);
// });

// child.stdout.on('disconnect', data => {
// 	console.log(`disconnect : ${data}`);
// });

// child.stdout.on('error', data => {
// 	console.log(`error : ${data}`);
// });

// child.stdout.on('exit', data => {
// 	console.log(`exit : ${data}`);
// });

// child.stdout.on('message', data => {
// 	console.log(`message : ${data}`);
// });

// child.stdout.on('spawn', data => {
// 	console.log(`spawn : ${data}`);
// });

// sudo tcpdump -i wlp4s0 -e | grep -o -E ’([[:xdigit:]]{2}:){5}([[:xdigit:]]{2})’

// switchCardToManagedMode () {
// 	const changeToManagedModeCommand = `sudo ip link set ${this.iface} down && sudo iw ${this.iface} set type managed && sudo ip link set ${this.iface} up`;

// 	exec(changeToManagedModeCommand);
// }

// switchCardToMonitorMode () {
// 	const changeToMonitorModeCommand = `sudo ip link set ${this.iface} down && sudo iw ${this.iface} set monitor control && sudo rfkill unblock all && sudo ip link set ${this.iface} up`;

// 	exec(changeToMonitorModeCommand);
// }

// monitorModeSwitchAndChangeChannels () {
// 	console.log('Switch netcard to monitor mode');
// 	this.switchCardToMonitorMode();
// 	console.log('Done');
// 	console.log('Start to change channels');
// 	this.changeChannelsConstantly();
// }