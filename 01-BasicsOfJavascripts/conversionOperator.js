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




