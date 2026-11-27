const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num);
}

const greetings = "Hy world"
for(const i of greetings){
    console.log(i);
}
/// Maps
const map = new Map()
map.set('PK', "Pakistan")
map.set('US', "united states")
map.set('T', "Turkey")
console.log(map);
///object
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}
for (const key in myObject){
  console.log(`${key} shortcut for ${myObject[key]}`);
}
const coding =['js', 'ruby', 'python']
coding.forEach( function (item) {
    console.log(item);
} )
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
const myCoding = [
    {
        languagename: "Python",
        filename: "p"
    },
    {
      languagename: "javascript",
        filename: "js"  
    }
]
myCoding.forEach((item)=> {
    console.log(item.languagename);
})