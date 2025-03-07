const myName='Manjula'
const myFiles=40
console.log(myName +  myFiles +' myLogo'); // this is outdate way of concatinating the values, don't use it.

console.log(`${myName} ${myFiles}`); // this the correct way

//how to declare the string, here string is an object

const gameName= new String('Angry-Bird-Best-Game')
console.log(gameName[3], gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

const newString=gameName.substring(2,5)
console.log(newString);

const anotherString=gameName.slice(2,5)
console.log(anotherString);
const sliceNegValue=gameName.slice(-7, 7)
console.log(sliceNegValue);

const newStringOne='      Manjula      '
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const myUrl='https://manjula/manjula%20venkatappa'
console.log(myUrl);
console.log(myUrl.replace('%20', '-'));
console.log(myUrl.includes('manjula'));
console.log(myUrl.includes('surekha'));
console.log(gameName.split('-'));
















