const coding=['html', 'css', 'js', 'reactjs', 'bootstrap']

coding.forEach( function (name){
    console.log(name);
    
})

//------------------------------------

const useArrow=['variable', 'function', 'object']

useArrow.forEach( (item)=>{
    console.log(item);
    
} )
//-----------------------------------

const onlyFn=['aa','bb','cc']
function printMe(item){
//console.log(`item ${item}`);

}
onlyFn.forEach(printMe)

onlyFn.forEach((item, index, array)=>{
console.log(item, index, array);

})

//----------------------------------

const myCoding=[
    {myLang:'HTML',
        myPrice:200
    },
    {myLang:'CSS',
        myPrice:300
    },
    {myLang:'JS',
        myPrice:800
    },
]

myCoding.forEach( (item, arrayno)=>{
console.log(`my language ${item.myLang}, whose price is ${item.myPrice}, ${arrayno}`);
//console.log(myCoding);

} )
