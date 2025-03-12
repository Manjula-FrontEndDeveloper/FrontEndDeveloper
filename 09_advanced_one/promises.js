const promiseOne= new Promise(function(resolve, reject){
//Do an async call
// Data Base calls, cryptography, network
setTimeout(function(){
    console.log('Async task is completed')
    resolve()
},1000)
})
promiseOne.then(function(){
    console.log('Promise Consumed');    
})

//-------------------------------------------------------------------------------

new Promise(function(resolve, reject){
console.log('Async task two');
resolve()
}, 1000).then(function(){
    console.log('Async two resolved');    
})

//-------------------------------------------------------------------------------

const promiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: 'manjula', email:'my@gmail.com'})
    }, 1000)

})
promiseThree.then(function(user){
console.log(user);

})

//-------------------------------------------------------------------------------

const promiseFour=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){resolve({userName:'Manjula', passWord:'123'})
        }else{reject('Error: something went wrong')}
    }
,1000)
})

//promiseFour.then().catct()

promiseFour.then((user)=>{
    console.log(user);
    return user.userName
}).then(function(userName){
console.log(userName);
}).catch(function(err){
    console.log(err);    
}).finally(function(){
    console.log('The promises is either resolved or rejected');
    
})


//---------------------------------------------------------------------
const promiseFive=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){resolve({userName:'My JavaScript', passWord:'1234'})
        }else{reject('Error: JS went wrong')}
    }
,1000)
})

async function consumePromiseFive() {
    try {
        const responseFive= await promiseFive
        console.log(responseFive); 
    } catch (error) {
        console.log(error);        
    }
      
}
consumePromiseFive()

//---------------------------------------------------------------

async function getAllUsers() {
    try {
        const newResponse=await fetch('https://jsonplaceholder.typicode.com/users')
        const myData=await newResponse.json()
        console.log(myData); 
        
    } catch (error) {
      console.log(`Error: ${error}`);        
    }    
}
getAllUsers()

//-------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users').then(function(responsetwo){
// console.log(responsetwo.json());
responsetwo.json()
}).then(function(againResponseTwo){
    console.log(againResponseTwo);    

}).catch(function(error){
    console.log(error);
    
})
