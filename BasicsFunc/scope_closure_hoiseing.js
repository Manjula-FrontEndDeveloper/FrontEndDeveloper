let a=10
const b=20
var c=30

console.log(a);
console.log(b);
console.log(c);


// block scope 
//{} this is called scope, if this comes with any functions or if else condition that time it is called scope of that function
//const g={} --> this are called objects



if(true){
    let letValue=400
    const constValue=500
    var varValue=800
}
//console.log(letValue);-->let value cannot be excuted out of the scope, will throw error, which is correct way
//console.log(constValue);-->const value cannot be excuted out of the scope, will throw error, which is correct way
console.log(varValue);//-->but var value will excuted out of the scope, which is not correct way

// inside {} is called block scope
// outside {} is called global scope

const myGlobalScope=300
if(true){
    let myInnerS=200
    const myGlobalScope=400
    console.log(`my block scope value is ${myGlobalScope}, even let value is ${myInnerS}`);   

}
console.log(`my global scope value is ${myGlobalScope}`);

// on node environment global scope is different and on browser level global scope is different


//**************************************NESTED SCOPE****************************************************** */

function one(){
    const functionOne='Manjula'
    console.log(functionOne);
    function two(){
        const functiontwo='website'
        console.log(functionOne);
        console.log(functiontwo);       

    }
    two()
   // console.log(functiontwo);// this cannot be execute because it is outsite the child scope
    
}
one()

// A closure in JavaScript is a function that remembers the variables from its outer scope even after the outer function has finished executing.

// A closure in javascript is the a child function can access parent variable from its outer scope even after the parent function has finished executing


//----------------------------------------------------------------------------------------------

if (true) {
  const userOne = "Manjula";
  if (userOne === "Manjula") {
    const wesiteName = " youtube";
    console.log(userOne + wesiteName);
  }
 // console.log(websiteName);// here it will throw error because it is outsite the scope{}
}
//console.log(userOne);// here it will throw error because it is outsite the scope{}


//************************interesting***************************** */
console.log(multOne(3));
function multOne(num1){
return num1*2
}

//hoising is javascript behaviour were function or variable is moved to the top of the scope{} before the declaration at the time of excution

//-----------------------------------
const multTwo=function(num2){
return num2*2
}
console.log(multTwo(5))

// here we cannot move the function or variable to the top because the function is hold inside the expression "const multTwo=", if we do that it will throw error
