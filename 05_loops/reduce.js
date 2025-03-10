const myNum=[1,2,3,4]
const myTotal=myNum.reduce((accumulator, currentValue)=>{
    console.log(`accu:${accumulator} + curVal:${currentValue}`);
    return accumulator+currentValue   
    
},0)
console.log(myTotal);
