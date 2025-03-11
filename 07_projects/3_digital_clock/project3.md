# Project related to DOM

## project Links
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 3

``` javascript
const myClock=document.getElementById('clock')
//or
//const myClock=document.querySelector('#clock')

//setInterval(function(){}, 1000)//very important write in this way only

setInterval(function(){
    let myDate=new Date()
   // console.log(myDate.toLocaleTimeString());
   myClock.innerHTML=myDate.toLocaleTimeString()

}, 1000);
```