# Project related to DOM

## project Links
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 2

``` JavaScript
const myForm = document.querySelector('form');
// this use case will give you empty value
//const myHeight= parseInt(document.querySelector(#height).value)

myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const myHeight = parseInt(document.querySelector('#height').value);
  const myWeight = parseInt(document.querySelector('#weight').value);
  const myResults = document.querySelector('#results');

  if (myHeight === '' || myHeight < 0 || isNAN(myHeight)) {
    myResults.innerHTML = `Please enter valid height ${myHeight}`;
  } else if (myWeight === '' || myWeight < 0 || isNAN(myWeight)) {
    myResults.innerHTML = `Please enter valid weight ${myWeight}`;
  }else
  {
   const myBMI= myWeight/((myHeight*myHeight)/10000).toFixed(2);
   //show results
   myResults.innerHTML=`<span>${myBMI}</span>`
  }
});

//Assignment: to compare the result with under weight, normal and overweight
```