const numb=[1,2, 3, 4, 5]

const addNumb= numb.map( (a)=>{
    return a+10;
} )
console.log(addNumb);

//-------------------------

const myNum=[3, 6, 8, 9]
const myNewnum=myNum.forEach((no)=>{
   
   if (no<=8) {
    console.log(no+10);
    
   }else{console.log(no+16);}   
} )

console.log(myNum);

//----------------chaining-----------------------

const marks=[1,2,3,4,5,6,7,8,9,10]
const newMarks=marks
.map((aa)=>aa*10 )
.map( (aa)=>aa+1).filter((aa)=>aa>=55)

console.log(newMarks);

