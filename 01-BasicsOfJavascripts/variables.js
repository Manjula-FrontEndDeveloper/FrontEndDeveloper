const accountNum=846345
var emailId='man@gmail.com'
let passWord='123'
myCity='bangalore'
let accountState
let accountCity=null

emailId='manjula@ymail.com'
passWord='2356'
myCity='yavatmal'
/*
avoid using var, because of the issues in block scope and functional scope
*/

// accountNum=2--> not allowed
console.log(accountNum);
console.table([accountNum,emailId,passWord,myCity, accountState, accountCity])

