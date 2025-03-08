function sayMyName(){
    console.log('M');
    console.log('A');
    console.log('N');
    console.log('J');
    console.log('U');
    console.log('L');
    console.log('A');
}
//sayMyName()

//--------------------------

// function addTwoNum(numb1,numb2){
//     console.log(numb1+numb2)
// }
// addTwoNum(2,3)
//-------

function addTwoNum(numb1,numb2){
//    let result=numb1+numb2
//    return result

return numb1+numb2

}
const result=addTwoNum(2,3)
console.log(`Result ${result}`);

//--------------------------------------------

function loggedInUserMsg(username){
return `User logged in ${username}`
}
console.log(loggedInUserMsg('manjula'))

//---if else---
// function loggedInUserMsgtest(username2){
//     if(username2 === undefined){
//        console.log('Please enter the username') 
//         return 
//     }
//     return `User logged in ${username2}`
//     }
//     console.log(loggedInUserMsgtest())
//-------------------------------------------

    // function loggedInUserMsgtest(username2){
    //     if(!username2){
    //        console.log('Please enter the username') 
    //         return 
    //     }
    //     return `User logged in ${username2}`
    //     }
    //     console.log(loggedInUserMsgtest())

        //-------------------------------------------

    // function loggedInUserMsgtest(username2 = "kavita") {
    //   if (!username2) {
    //     console.log("Please enter the username");
    //     return;
    //   }
    //   return `User logged in ${username2}`;
    // }
    // console.log(loggedInUserMsgtest("manjula"));


 //************************REST OPERATOR*************************** */

 function calculateCartPrice(...price1){
    return price1
 }
 console.log(calculateCartPrice(200, 400,300));

 //----------------------------------------------------------
 function calculateCartPrice2(valu1, valu2, ...price2){
    return price2
 }
 console.log(calculateCartPrice2(200, 400,300, 500, 7000));


 // how to use objects inside the functions

 const newObject={
    myName:'Manjula',
    myId:8786
 }
 function addObject(anyObject){
    console.log(`username is ${anyObject.myName} and id is ${anyObject.myId}`);  
 }
//  addObject(newObject)
addObject({myName:'Manjula Venkatappa', myId:9807})

//**********************Array Object in function************************* */

 const myNewArray=[200, 789, 900, 440]
 function takeArray(getArray){
    return `my array inside function ${getArray[1]}`
 }
// console.log(takeArray(myNewArray))
console.log(takeArray([500, 600, 700,800]))
