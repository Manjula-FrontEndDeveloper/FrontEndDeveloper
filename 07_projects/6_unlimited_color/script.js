// generat a random color

const randomColor = function () {
    const hexValue = '0123456789ABCDEF';
  
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let startCh;
  
  const startColorCh = function () {
    if(!startCh){startCh = setInterval(bgColorCh, 1000);}
    
    function bgColorCh() {
      document.body.style.backgroundColor = randomColor();
    }
    
  };
  const stopColorCh = function () {
    
    clearInterval(startCh);
    startCh=null;
  };
  
  document.querySelector('#start').addEventListener('click', startColorCh);
  
  document.querySelector('#stop').addEventListener('click', stopColorCh);