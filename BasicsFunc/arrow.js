// this key word referce to current context

const myFun = {
  name: "Manjula",
  age: 40,

  welcomeMessage: function () {
    console.log(`${this.name} you are welcome`);
    console.log(this);
    
  },
};
// myFun.welcomeMessage();
// myFun.name='Sam'
// myFun.welcomeMessage();
console.log(this);

function chai(){
    console.log(this);    
}
chai()

function code(){
   let username='Manjula'
    console.log(this.username);    
}
code()
// this key word will not work inside the function

// using arrow function ()=>{}

const myArrow=()=>{
  let user='Manjula V'
    console.log(this);    
}
myArrow()

//---------------------------------------------

const addTwo=(num1, num2)=>{
return num1+num2;
}
console.log(addTwo(3, 8));

// using implest return

const addNum=(no1,no2)=>(no1+no2)// if wrapped in () return keyword is not required
console.log(addNum(3, 8));

const addNum2=(no1,no2)=>({name:'Hitesh'})
console.log(addNum2(3, 8));



