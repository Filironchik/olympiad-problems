let arrNum: number[] = [];
let arrRevNum: number[] = [];




for(let i = 10; i <=1000; i++){
    const num = checkSimp(i);
    if (checkSimp(num) !== 0) arrNum.push(num);
}

for(let i: number = 0; i < arrNum.length; i++){ 
    const revNum:number =  reverseNumber(arrNum[i]);
    if (revNum !== arrNum[i]) {arrRevNum.push(revNum)};    
}

arrNum = [];

for (let i: number = 0; i < arrRevNum.length; i++){
    const num = checkSimp(arrRevNum[i]);
    if (checkSimp(num) !== 0) arrNum.push(reverseNumber(num));
}

function checkSimp(num:number){
    let sum: number = 0;
    let simplNum: boolean = true;

    for(let a: number = 0; a <= num; a++){
        if (sum > 2) {
            simplNum = false;
            break;
        }
        if(num % a == 0) sum++;
    }
    if (simplNum == true) return num;
    else return 0;
}

function reverseNumber(__num:number){
    let num: string = String(__num)
    let result:string = ""
    for(let i:number = num.length - 1; i >= 0; i--){
        result = result + num[i];
    }
    return Number(result);
}


console.log('Все превосходно простые числа от 10 до 1000: ', arrNum)