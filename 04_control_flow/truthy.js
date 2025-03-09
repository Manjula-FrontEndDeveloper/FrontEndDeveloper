const userEmail = "user@gmail.com";
if (userEmail) {
  console.log(`Got user email`);
} else {
  console.log(`Don't have user email`);
}

//falsy values--> false, 0, -0, BigInt 0n, "", null, undefined, NAN
//truthy value--> '0', 'false', " ", [], {}, function(){}

const userName=''
if (userName.length===0){
    console.log('this string is empty');    
}

//------------------------------------------------

const myObject={}

if(Object.keys(myObject).length===0){
    console.log('my empty object');
    
}

//***********nullish coalescing operator (??): this depends on null and undefined*********** */

let value1

//value1=5??10
//value1=null??10
//value1=undefined??15
value1=null ?? 10?? 15

console.log(value1);

// -----------------------ternary operator--------------------------------

//condition ? true : false
const iceCreamPrice=100
iceCreamPrice<=80?console.log('less than 80'):console.log('more than 80');



