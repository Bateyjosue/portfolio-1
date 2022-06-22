function aVeryBigSum(ar) {
    // Write your code here
    // let sum = ar.reduce((x1, x2) => x1 + x2);
    // return sum;
    let sum = 0;
    // for(let i = 0; i < ar.length; i++) 
    // {
    //     sum += ar[i];
    // }
    ar.forEach((el) =>{
        sum += el;
    })
    return sum;
}
let arr = [1000000001,1000000002,1000000003,1000000004,1000000005];
// console.log(aVeryBigSum(arr));

function plusMinus(arr) {
    // Write your code here
    let plus = 0;
    let minus = 0;
    let zero = 0;
    arr.forEach((el)=> {
        if(el > 0) plus++;
        else if(el < 0) minus++;
        else zero++;
    })
    console.log((plus/arr.length).toPrecision(6))
    console.log((minus/arr.length).toPrecision(6))
    console.log((zero/arr.length).toPrecision(6))

}
// plusMinus([-4, 3, -9, 0, 4, 1])

function staircase(n) {
    // Write your code here
    for(let i=0, j = n; i<=n, j >=0; i++, j--)
    {
        if(j!=n)
            console.log(' '.repeat(j)+'#'.repeat(i))
    }
}
// staircase(4)

function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles)
    let count = candles.filter((el) => el== max)
    console.log(count.length)
    console.log(`Max is : ${max}`)
    return count.length
}
// birthdayCakeCandles([3,2,1,3])

function breakingRecords(scores) {
    // Write your code here
    let lowest = scores[0];
    let highest = scores[0];
    let countL = 0, countH = 0;
    
    scores.forEach((el) => {
        console.log(highest, lowest);
        if(el < lowest){
            countL++;
            lowest = el;
        } 
        else if(el > highest){
            countH++;
            highest = el;
        }
    })
    console.log("Result")
    console.log(countH, countL);
}
// breakingRecords([10 ,5 ,20 ,20, 4, 5, 2, 25, 1])

function bonAppetit(bill, k, b) {
    // Write your code here
    let sum = 0;
    for(let i = 0; i < bill.length; i++){
        if(i != k)
            sum += bill[i];
    }
    let half = sum /2;
    if(half == b) console.log('Bon Appetit')
    else
        console.log(b - half);
}
// bonAppetit([3, 10, 2 ,9], 1, 7)
console.log(bonAppetit([3, 10, 2 ,9], 1, 12))
