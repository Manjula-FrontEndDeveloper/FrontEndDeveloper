const myGame=new Object()// singleton object
const myGameTwo={
    age:40
}// non singleton object
myGameTwo.id= '123abc'
myGameTwo.name='manjula'
myGameTwo.isLoggedIn=false
console.log(myGame);
console.log(myGameTwo);

const newUser={
    email:'myemail@gmail.com',
    name:{
        fullname:{
            myName:'manjula',
            lastName:'venkatappa'
        }
    }

}

console.log(newUser.name);
console.log(newUser.name.fullname);
console.log(newUser.name.fullname.myName);

const obj1={1:'a', 2:'b'}
const obj2={3:'c', 4:'d'}
const obj5={5:'e', 6:'f'}

const obj3={obj1, obj2}
const obj4=Object.assign({}, obj1,obj2,obj5)
const objSpread={...obj1, ...obj2, ...obj5}
console.log(obj3);
console.log(obj4);
console.log(objSpread);

const newUsers=[
    {id:'347ue',
        email:'ee@gmail.com',
        isLogin:true,
        age:22
    },
    {id:'678fr',
        email:'yr@gmail.com',
        isLogin:false,
        age:40
    },
    {id:'237we',
        email:'we@gmail.com',
        isLogin:true,
        age:32
    },
]

console.log(newUsers[0].email);
console.log(Object.keys(myGameTwo));
console.log(Object.values(myGameTwo));
console.log(Object.entries(myGameTwo));

console.log(myGameTwo.hasOwnProperty('isLoggedIn'));


//****************Object-de-structure************************ */

const myCourses={
    courseName:'JavaScript',
    price:999,
    courseInst:'Hitesh'
}

// console.log(myCourses.courseInst);--> normal way

const {courseInst:ins}=myCourses// In this way we de-structure the object
//console.log(courseInst);
console.log(ins);


//----JSON Structure------
// {
//     'name1':'manjula',
//     'course1':'js',
//     'price':'999'
// }

[{},
{},
{}
]

