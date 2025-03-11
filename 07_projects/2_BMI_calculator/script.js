const myForm = document.querySelector('form');
// this use case will give you empty value
//const myHeight= parseInt(document.querySelector('#height').value)

myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const myHeight = parseInt(document.querySelector('#height').value);
  const myWeight = parseInt(document.querySelector('#weight').value);
  const myResults = document.querySelector('#results');

  if (myHeight === '' || myHeight < 0 || isNaN(myHeight)) {
         myResults.innerHTML = `Please give a valid height ${myHeight}`;
     } else if (myWeight === '' || myWeight < 0 || isNaN(myWeight)) {
        myResults.innerHTML = `Please give a valid weight ${myWeight}`;
     } else
  {
    const myBMI = (myWeight / ((myHeight * myHeight) / 10000)).toFixed(2);
   //show results
   myResults.innerHTML=`<span>${myBMI}</span>`
  }
});






