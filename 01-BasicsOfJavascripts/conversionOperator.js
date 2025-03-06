let score=33
let scores='33'
let scorestring='33abc'
let scoreN=null
let scoreBoolean=true
console.log(typeof score);
console.log(typeof scores);

let changeToNumber=Number(scores)
let stringToNumber=Number(scorestring);
let nullToNumber=Number(scoreN)
let booleanToNumber=Number(scoreBoolean)
console.log(typeof changeToNumber);
console.log(typeof stringToNumber)
console.log(stringToNumber) // not a number NAN
console.log(nullToNumber);
console.log(booleanToNumber);

//"33"=>33
//"33abc"=>NAN
//true=>1,false=> 0

let isLoggedInUser=1
let booleanLoggedInUser=Boolean(isLoggedInUser)
console.log(booleanLoggedInUser);

//1=>true, 0=>false
//""=>false, "anystring"=>true

let someNumber=33
let changeToString=String(someNumber)
console.log(typeof changeToString)

/*******************Operations**********************/

let someValue=5
let negValue=-someValue
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*3);
console.log(2**3);
console.log(2/2);
console.log(2%3);

let str1='Manjula'
let str2=' V'
let str3= str1 + str2
console.log(str3);

console.log(1+'2');
console.log('1'+2);
console.log(1+2+'2');
console.log('1'+2+2);
console.log(1+2*3/8%7);

console.log(+true);
console.log(+'');

let num1, num2, num3
console.log(num1=num2=num3=2+2);

let counter1=100
++counter1
console.log(counter1);

 



















