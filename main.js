let currentColor = document.querySelector('.current_color');
const bodyElem = document.querySelector('body');
const generateBtn = document.querySelector('.generate-btn');

bodyElem.style.backgroundColor = currentColor.innerText;

generateBtn.addEventListener('click', () => {
  let randomColor = '';
  const characters = '0123456789abcdef';

  for(let i = 0; i < 6 ; i++){
    randomColor = randomColor + characters[Math.floor(Math.random() * 16)];
    console.log(randomColor);
  }

  currentColor.innerText = '#' + randomColor;
  bodyElem.style.backgroundColor = "#" + randomColor;
})