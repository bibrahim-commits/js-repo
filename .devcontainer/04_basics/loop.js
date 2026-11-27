// for
for (let i = 0; i < 10; i++)
{
    const element = i;
    if (element == 5){
        console.log("I am winner");
    }
    console.log(element);
}
for (let i = 0; i < 10; i++)
{
    const element = i;
    if (element == 5){
        console.log("5 detected");
        //continue
        break
    }
    console.log(element);
}
////////////////do while loop////////////////
let index = 0
while(index <= 10){
  console.log(`value of index is ${index}`);
  index = index + 2
}
 let myArray = ['Saba', 'Sabairia', 'Sareena', 'Zahra', 'Tayyaba']
 let arr = 0
 while(arr < myArray.length){
     console.log(`Value is ${myArray[arr]}`);
     arr = arr + 1
 }
 let score = 11
 do {
   console.log(`Score is ${score}`);
   score++
 } while (score <= 10);