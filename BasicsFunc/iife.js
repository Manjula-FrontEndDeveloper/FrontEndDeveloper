//Immediatly Invoked Function Expressions(IIFE)

function chai(){
    //this is named IIFE
    console.log('DB CONNECTED');    
}
chai();
//other way
(function chai1(){
    //this is named IIFE
    console.log(`DB CONNECTED ONE`);    
})();
//--other way
(()=>{
    //this is simple IIFE
    console.log(`DB CONNECTED TWO`);    
})();
//--other way
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);    
})('Manjula');


// some time due to the Global scope pollution, so to prevent it from global scope variable pollution we use IIFE