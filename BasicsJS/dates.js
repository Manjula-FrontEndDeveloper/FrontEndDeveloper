//Date

const myDate= new Date()
const dateToString=myDate.toString()
const dateToDateStr=myDate.toDateString()
const dateToLocalStr=myDate.toLocaleString()

console.log(myDate);
console.log(dateToString);
console.log(dateToDateStr);
console.log(dateToLocalStr);
console.log(typeof myDate);

const myCreateDate=new Date(2023, 0, 23)
const myLocalDate=new Date(2025, 0,22,5,8)
const myDateFormat1=new Date('2024-01-20')
const myDateFormat2=new Date('01-20-2024')

console.log(myCreateDate.toDateString());
console.log(myLocalDate.toLocaleString());
console.log(myDateFormat1.toLocaleString());
console.log(myDateFormat2.toLocaleString());
console.log(myDateFormat1);

//---Time Stamp-----

const myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.round(Date.now()/1000));

const newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

//`${newDate.getDay()}`


const dateNew=myCreateDate.toLocaleString('default', {
    weekday:'long',
    day:'numeric',
    day:'2-digit'
})

console.log(dateNew);
console.log(`Day:${dateNew}`);











