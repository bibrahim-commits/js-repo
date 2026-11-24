const course = {
    coursename: "Javascript",
    price: "14560",
    courseInstructor: "Munawar"
}
//course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);
/////API
/*{
    name: "Munawar",
    coursename: "Javascript",
    price: "None"
}
[
    {},
    {},
    {}
]*/
function SayMyName(){
     console.log("G");
     console.log("H");
     console.log("A");
     console.log("Z");
     console.log("I");
     console.log("A");
}
 SayMyName()
 function addnum(num1, num2)
 {
    console.log( num1 + num2);
 }
 addnum(9, 7)
 function addnum(num1, num2)
 {
    let result = num1 + num2;
    return result
 }
 const result= addnum(9, 7)
 console.log("Result: ", result);
 function loginuser(username){
    if(username == undefined){
        console.log("Please enter user name");

    }
    return `${username} just logged in`
 }
 console.log( loginuser())
 
