# Project related to DOM

## project Links
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

``` JavaScript
console.log('Manjula')

const myButton = document.querySelectorAll('.button');
const myBody = document.querySelector('body');

myButton.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      myBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      myBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      myBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      myBody.style.backgroundColor = e.target.id;
    }
  });
});


```