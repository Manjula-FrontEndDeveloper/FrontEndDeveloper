// while loop syntex

// while (condition) {
    
// }
let index=0
while (index<=10) {
    console.log(`Value of index is ${index}`);
    index = index + 2    
}

//---using while in Array -------------------------

const myArray = ["krishna", "buddha", "rama"];
let hero = 0;
while (hero < myArray.length) {
  console.log(`My heros ${myArray[hero]}`);
  hero++;
}

//-----do while------------
let score=0
do {
    console.log(`Score value is ${score}`);
    score++
    
} while (score<=10);
//-----------------------in do while loop condition is checked after one loop completed-----------------------
let score1=11
do {
    console.log(`Score value is ${score1}`);
    score1++
    
} while (score1<=10);