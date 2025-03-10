const coding=['java', 'python','css', 'reactjs', 'html']

const newValue=coding.forEach( (item)=>{
    //console.log(item);
    return item// forEach will not return any thing
})
console.log(newValue);

//-----------------------------------------------------------

const myNum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum=myNum.filter( (n)=> n>4 )
console.log(newNum);


//-------------------------------------------------------

const number=[11, 22, 33, 55, 66, 77, 88, 99]

const newNumber=[]

number.forEach( (num)=>{
if (num<44) {
   newNumber.push(num) 
}
})
console.log(newNumber);

//----------------------------------------------------------------
const courses = [
    { title: "html", version: 5, chapter: "headers" },
    { title: "html", version: 5, chapter: "section" },
    { title: "css", version: 1, chapter: "classes" },
    { title: "bootstrap", version: 4, chapter: "columns" },
    { title: "css", version: 3, chapter: "z-index" },
    { title: "bootstrap", version: 5, chapter: "margins" },
  ];
  const myCourses = courses.filter((myC) => {
    return myC.title === "html" && myC.chapter === "section" && myC.version <= 5;
  });
console.log(myCourses);


//--------------------------------

const numb=[1,2, 3, 4, 5]

const addNumb= numb.filter( (a)=>{
    return a>2;
} )
console.log(addNumb);
