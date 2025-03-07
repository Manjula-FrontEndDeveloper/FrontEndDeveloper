const number=500
console.log(number);

const numberOnly=new Number(200)
console.log(numberOnly);
const numtoString=numberOnly.toString()

console.log(numtoString);
console.log(numberOnly.toFixed(2)); // this is applied only for number datatype

console.log(`to see lenght: ${numtoString.length}`);
console.log(`to see type of: ${typeof numtoString}`);
console.log(typeof numtoString);

const otherNumber= 234.8906
const numWithPrecesion=otherNumber.toPrecision(6)
console.log(numWithPrecesion);

const exSale=1200000
const toLocalStr=exSale.toLocaleString()
const toLocalIndian=exSale.toLocaleString('en-IN')
console.log(exSale);
console.log(toLocalStr);
console.log(toLocalIndian)

//******************************Maths*******************************/

console.log(Math);
console.log(Math.abs(6));
console.log(Math.round(4.1));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(4,7,6,5,3,9,8));
console.log(Math.max(4,7,6,5,3,9,8));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10+1);
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const minValue=12
const maxValue=80

console.log(Math.floor(Math.random()*(maxValue-minValue+1))+minValue);
















