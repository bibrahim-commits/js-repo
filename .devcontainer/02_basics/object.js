// singleton
// object literals

const user = {
     name: "Bushra Ibrahim",
     age:21,
     location: "Lahore",
     email:"Bibrahim@gmail.com"
}
 console.log(user.email)
 user.email="Bibrahim@gmail.com"
 //Object.freeze(user)
 user.email="ue@gmail.com"
 console.log(user);
  
 user.greeting = function()
 {
    console.log("Hey World");
 }
 user.greetingTwo = function()
 {
    console.log(`Hey user, ${this.name}`);
 }
 console.log(user.greeting());
console.log(user.greetingTwo());
/////////////////// singleton obj
const tinderuser= new Object()
tinderuser.id = "123abs"
tinderuser.name = "Smart"
tinderuser.isLoggedIn = false

console.log(tinderuser)

const regularuser = {
   email: "Bibrahim@gmail.com",
   fullname:
   {
       userfullname: {
         firstname: "Bushra",
         lastname: "Ibrahim"
       }
   }
}
console.log(regularuser.fullname);
 con