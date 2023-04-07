
import * as readline from 'readline';

const numeral:string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// const inputBtn = document.getElementById("btn");
// inputBtn?.addEventListener("click", function(){Convert()}, false)

// const inputText = document.getElementById("text") as HTMLInputElement | null;

let dataString: string = "";
let dataArr:string[] = [];  


type numbersType = {
    symbol: string;
    position: number;
}

let numbers: numbersType[] = [];


let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите текст: ', (answer) => {
    dataString = answer.toLowerCase();

    for (let i: number = 0; i < dataString.length; i++){ 
        dataArr.push(dataString[i]);
    }

    for (let i:number = 0; i < dataArr.length; i++) {
        for(let a:number = 0; a < numeral.length; a++){
            if (dataArr[i] == numeral[a]) numbers.push({symbol: dataArr[i], position: i})
        }
    }
    
    //console.log(dataArr);
    
    for (let i:number = numbers.length; i >= 0; i--){
        dataArr[numbers[i].position] = numbers[i].symbol;
    }
    
    dataString = "";
    
    for (let i: number = 0; i < dataArr.length; i++){ dataString = dataString + dataArr[i] }
    
    console.log(dataString);

    rl.close();
});




