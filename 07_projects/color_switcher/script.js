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
      if (e.target.id === 'purple') {
        myBody.style.backgroundColor = e.target.id;
      }
  });
});
