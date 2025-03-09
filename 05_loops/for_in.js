// for_in for Objects
// for_in syntax

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject={
    JS:'JavaScript',
    HTML: 'Hyper Text Markup Language',
    CSS:'Cascading Style Sheet'
}

for (const lgKey in myObject) {
    console.log(`Object key is ${lgKey} whose value is ${myObject[lgKey]}`);
    
}

//-----------------------------------------------------

const someArray=['aa', 'bb', 'cc', 'dd']
for (const someKey in someArray) {
   console.log(`keys: ${someKey}, values: ${someArray[someKey]}`);
   
}