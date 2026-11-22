const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);
// Array methods
// slice, splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
const myn2 = myArr.splice(1, 3)
console.log(myn2);
// push, concat
const fruit= ["Apple", "Orange", "Pear"]
const veg = ["Pea", "Potato", "Tomato"]
fruit.push(veg)
console.log(fruit)
const allfruits = fruit.concat(veg)
console.log(allfruits);
// arrays with in arrays
const otherarray = [1, 2, 3, [4, 5 ,6], 7,8]
const use_otherarray = otherarray.flat()
console.log(use_otherarray);
console.log(Array.from("Bushra"));