import * as readline from 'readline';

let rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Введите позицию числа: ', (answer) => {
    let number:number = Number(answer.toLowerCase());

    let dataString: string = "";

    for(let i:number = 0; i <= 100; i++){dataString = dataString + String(i*i)}

    console.log('В позиции ' + number + ' находится ' + dataString[number] + ' цифра')

    rl.close();
});