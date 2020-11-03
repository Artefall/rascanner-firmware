class Processor{
    constructor(){
        this.lastRecord = '';
    }

    processMacAddressChunk (chunk){
        
        const DEFAULT_MAC_LENGTH_IN_SYMBOLS = 17;
        const NEW_LINE = '\n';

        let processableChunk = this.lastRecord + chunk;
        const processedMacAddress = processableChunk.split(NEW_LINE);
        let indexOfLastProcessedMac = processedMacAddress.length - 1;
        let lastProcessedMacIncomplete = processedMacAddress[indexOfLastProcessedMac].length != DEFAULT_MAC_LENGTH_IN_SYMBOLS;

        if (lastProcessedMacIncomplete) this.lastRecord = processedMacAddress.pop();
        
        console.log(processedMacAddress);

        return processedMacAddress;
    };
}

module.exports = Processor;
// id    mac   fio


// mac   date
// mac   date
// mac   date 
// mac   date 
// mac   date

//admins 

//id    nickname     full_name     passwordHash    role_id


//roles

//id    role_name    permissions


//find out what is foreign key

//find out what does license means 


//mysql explorer, sql drawing

// Инициализация БД, визуализация, получение всех данных из терминала, 

// HOW TO MAKE AP FROM NETCARD

//Check all devices in local network

//Add inteface name in db
