let Bank = {
    1000: 50,
    500: 500,
    200: 1000,
    100: 150,
    50: 50,
    20: 50,
    10: 50,
    5: 50,
    2: 0,
    1: 2
};
function isSumPossible(bank, targetSum) {
    let remainingSum = targetSum;
    const denominations = Object.keys(bank).sort((a, b) => b - a);
    for (let denomination of denominations) {
        const count = Math.min(Math.floor(remainingSum / denomination), bank[denomination]);
        remainingSum -= count * denomination;
    }
    return remainingSum === 0;
}

let sum = +prompt('Введите сумму: ');

function CalcuteBank(sum,bank){
    let sortedKeys = Object.keys(Bank).sort((a, b) => b - a);

    if(isSumPossible(bank,sum)){
        let replies=[]
        let bills=0
        for (let key of sortedKeys) {
            let count = Math.floor(sum / key);
            if (count >= 1) {
                if(count<=bank[key]){
                    sum-= (key*count)
                    bills+=count
                    replies.push({[count]: key})
                }
            }
        }
        if(bills<=40){
            return replies
        }else {
            return 1
        }
    } else {
        return 2
    }
}
let replies= CalcuteBank(sum,Bank)

if(replies===1){
    console.log('За раз банкомат не может выдать больше 40 купюр')
} else if (replies===2){
    console.log('У банкомата нету нужных купюр чтобы выполнить заказ')
}else {
    replies.forEach((item)=>{
        console.log(`Колво купюр: '${Object.keys(item)}' номинал '${item[Object.keys(item)]}'`)
    })
}