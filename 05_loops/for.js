//for loop syntx

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//ctrl+d to select all 'i'
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i===5) {
        console.log(`5 is best number`);
        
    }
    console.log(element);
    
}

//-----------------------------------------------------------------
// tables from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(`My outer loop is ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`My inner loop ${j}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// for loop for Arrays
const myArray=['Kishna','Buddha', 'Rama']
console.log(`Array length is ${myArray.length}`);

for (let myNew = 0; myNew < myArray.length; myNew++) {
    const element = myArray[myNew];
    console.log(element);
    
}

//------------important key words in loop is "break" and "continue"------------

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5 ${index}`);
        break
    }

  console.log(`Value of index is ${index}`);
}

//------continue--------

for (let newIndex = 1; newIndex <= 20; newIndex++) {
    if (newIndex === 5) {
        console.log(`Detected 5 ${newIndex}`);
        continue
    }

  console.log(`Value of newIndex is ${newIndex}`);
}