// JavaScript Execution Context
// javascript is single threaded language

//{}-->1. Global Execution Context-->this
// Global execution context are kept in this
// when this is run in Browser there its excution will be Windows object

// 2. Functional Execution Context

//How the Javascript code is executed
//executed in two phases
//{}--> 1. Memory Creation Phase(Creation Phase), 2. Execution Phase
//----------------------------------------------------------------------------

let val1=10
let val2=5
function newVal(new1, new2){
    let total=new1+new2
return total
}
let result1=newVal(val1, val2)
let result2=newVal(4, 5)

// steps to excute the code
//1. Global excution-->this, 
//2. Memory Phase--> val1=undefined, val2=undefined, addVal=defination, result1=undefined, result2=undefined,
//3. Execution Phase--> val1<--4, val2<--5, newVal--> (new variable environment + excution thread=delete)--> new execution context--> again creates the Memory phase
//Memory phase-->val1=undefined, val2=undefined,Total=undefined 
//excution context-->new1-4,new2-5, total-9

// --------------------Call Stack---------------------------

//callstack is first in last out 