// Datatypes are of two types i.e 1. Primitives, 2. Non-Primitive
// call by value, call by referance

// how the data is stored in memory and how can you access it, on this basis the datatypes are divided in two types i.e 1. Primitives, 2. Non-Primitive
//1. Primitives datatypes are of 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const number=200
const newNumber=2.300
const IsloggedIn=true
const outsideTemp=null
let email
const bigNumber=543890907767668787878787n

const id=Symbol(300)
const anotherID=Symbol(300)
console.log(id===anotherID);




// Non-Primitive(Referance) are of three types: Array, Object, Functions--> this datatypes have a refence in the memory
//Array example

const myHeros=['Krishna', 'Buddha', 'Rama','S N Goanka']

const myObjects={
name:'Manjula',
age:30
}

//Functions example

const myFunction = function(){
    console.log('Hello world');
    
}
console.log(typeof bigNumber);


//***************************Note on Menmory*******************************************/

// Stack(Primitive) --> whatever changes you do will be in copy of original value but not in original value
let myName='Manjula'

let otherName=myName
otherName='Venkatappa'

console.log(`myName:${myName}`);
console.log(`otherName:${otherName}`);

// Heap(Non-Primitive)--> whatever changes you will do will be in original value, not in a copy
let userOne={
    nameOne:'Sriram',
    email:'sriram@gmail.com'
}
let userTwo=userOne
userTwo.nameOne='Manjula'
console.log(userOne.nameOne);
console.log(userTwo.nameOne);

