const myArray=[1,7,4,8,9,2,3,10]
const myHero=['My krishna', 'The Buddha', 'Sri Rama', 'Lord Vishnu']

const myArraytwo=new Array(1,2,3, 4, 5, 6, 7, 8, 9, 10)
console.log(myArray[4]);

myArray.push(11)
myArray.push(12)// push will add the value in last in a array
myArray.pop()// pop will delete the last value in a array
myArray.unshift(3)// adds that value in the beginning
myArray.shift()

const newArray=myArray.join()

console.log(myArray);
console.log(myArray.includes(2));
console.log(myArray.indexOf(5));
console.log(myArray.indexOf(10));
console.log(newArray);
console.log(typeof myArray);
console.log(typeof newArray);

// slice, splice

const myArrOne=[5, 6, 7, 8, 9, 10, 11, 12, 13, 15]

const arrOne=myArrOne.slice(1, 4)// slice does not manuplates the original array

const arrTwo=myArrOne.splice(1, 4)// slipce manuplates the original array

console.log(`A= ${myArrOne}`);
console.log(`B= ${arrOne}`);
console.log(`C=${arrTwo}`);










