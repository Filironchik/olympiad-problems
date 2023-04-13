import * as readline from 'readline';

let rl = readline.createInterface({ input: process.stdin, output: process.stdout });




rl.question("Введите последоватеьность чисел через пробел: ", (answer) => {
    let numbers:number[] = [];

    answer = answer + " "
    
    let num: string = "";
    let productNumbers: number[] = [];

    for(let i = 0; i <= answer.length; i++){
        if(answer[i] !== " "){
            num = num + answer[i];
        } else {
            numbers.push(Number(num))
            num = "";
        }
    }

    for(let i: number = 0; i <= numbers.length; i++){
        for (let a: number = i + 1; a <= numbers.length - 1; a++){
            productNumbers.push(numbers[i] * numbers[a])
        }
    }

    const sortNumbers: number[] = productNumbers.sort((n1,n2) => n2 - n1);
    
    console.log('максимальное произведение среди всех пар этих чисел равно ', sortNumbers[0]);

    rl.close();
});