/*const myNums = [1, 2, 3, 4, 5, 6]
const newNums = myNums.filter((num) => num > 4)
console.log(newNums);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum= myNumbers.map((num1)=> num1 + 10)
console.log(newNum); */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum= myNumbers.map((num1)=> num1 * 10)
                       .map((num1)=> num1 + 1 )
                        .filter((num1)=> num1>= 40)
                    
console.log(newNum);
////// reduce//
const score = [1, 2, 3]
const total = score.reduce(function ( acc, curval) {
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, 0 )
console.log(total);