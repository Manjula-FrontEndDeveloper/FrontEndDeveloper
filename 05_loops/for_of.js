// for of

// ['', '', '']
// [{},{},{}]

//syntex for "for of"

// for (const element of object) {
    
// }
const numArray=[1, 2, 3, 4, 5, 6]
for (const myArrNum of numArray) {
    console.log(myArrNum);
    
}
//------------------------

const greeting = "Hello World";
for (const greet of greeting) {
    if (greet==='r') {
        console.log(`Letter num: ${greet}`);
        
    } 
    else {
        console.log(`Letter num new: ${greet}`);
        
    }
  
}

// map is the object in javasript which holds key value pair, map have unique value
// Map() cannot be iterable

const myMap=new Map()
myMap.set('IN', 'India')
myMap.set('USA', 'United States of America')
myMap.set('Fr', 'France')
//console.log(myMap);
for (const [myKey, myValue] of myMap) {
    console.log(`${myKey}:-${myValue}`);
    
}
//for-of will not work for Objects

