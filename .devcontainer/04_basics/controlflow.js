//if
const score=200
if(score < 100){
    console.log("less than 100");  
} else if (score <150)
{
  console.log("less than 150");
} else if (score < 190)
{
  console.log("less than 190");
}
else{
    console.log("less than 300");
}
/////////// online shopping/////////////
const userloggedIn = true
const debitcard = true
if(userloggedIn && debitcard){
     console.log("Allow to buy course");
}
///////switch//////
const month = 3
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case");
        break;
}
// ternary operator
const price = 200
price <= 80 ? console.log("less than 80") : console.log("more than 80")