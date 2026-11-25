const user = {
    username: "Bushra",
    price: 2000,
    welcome: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}
user.welcome()
user.username= "Sabairia"
user.welcome()

/*const coffee = ()=>{
    let username = "Zahra"
    console.log(this.username);
}
coffee()*/
//const coffee = (sugar, milk) => {
//    return sugar + milk
//}
//console.log(coffee(1, 5 ))

const coffee = (sugar, milk) => sugar + milk
console.log(coffee(400, 300));
/*( function chai(){
    console.log("DB connected");
})();*/
( (name) =>{
    console.log(`Good Morning ${name}`);
}) ('Ghazia');