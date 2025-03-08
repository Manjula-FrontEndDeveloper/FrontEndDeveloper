//singletone
//Object.create--> this is created using constructor

//object literals
const mySym=Symbol('key1')

const myObject={
    name:'Manjula',//key: value,
    'fullName':'V',
    [mySym]:'key2',
    age:40,
    email:'man@gmail.com',
    location:'bangalore',
    isLoggedin: true,
    lastLogin:['wednesday', 'friday']
}
myObject.name='surekha'
//const newObject=Object.freeze(myObject)// freezes that object and cannot change its value after this
myObject.email='manjula@gmail.com'

console.log(myObject.name);
console.log(myObject['name']);
console.log(myObject['fullName']);
console.log(myObject[mySym]);

console.log(typeof mySym);
console.log(myObject);
//console.log(newObject);

myObject.greeting=function(){
    console.log('Hello Users');    
}
myObject.greetingTwo=function(){
    console.log(`Hello User ${this.name}`);
    
}
console.log(myObject.greeting());
console.log(myObject.greetingTwo());








