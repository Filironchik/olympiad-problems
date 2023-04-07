import * as readline from 'readline';

type numbersType = { symbol: string; position: number;}

const numeral: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let dataString: string = "";
let dataArr: string[] = [];  
let numbers: numbersType[] = [];

let rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Введите текст: ', (answer) => {
    dataString = answer.toLowerCase();

    for (let i: number = 0; i < dataString.length; i++) { dataArr.push(dataString[i]) }

    for (let i:number = 0; i < dataArr.length; i++) {
        for(let a:number = 0; a < numeral.length; a++){
            if (dataArr[i] == numeral[a]) { numbers.push({ symbol: dataArr[i], position: i}); }
        }
    }

    let a: number = 0;
    
    for (let i:number = numbers.length - 1; i >= 0; i--){
        console.log(dataArr[numbers[a].position], numbers[i].symbol);
        dataArr[numbers[a].position] = numbers[i].symbol;
        a++;
    }
    
    dataString = "";

    for (let i: number = 0; i < dataArr.length; i++){ dataString = dataString + dataArr[i] }
    
    console.log(dataString);

    rl.close();
});




