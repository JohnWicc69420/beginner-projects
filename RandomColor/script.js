const containerEl = document.querySelector('.container');
const containerColorEl = document.querySelector('.container-color')
for (let index = 0; index < 100; index++) {
    const divs = document.createElement('div');
    divs.classList.add('container-color');
    containerEl.appendChild(divs);
}
const containerColorEls = document.querySelectorAll('.container-color')
const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

containerColorEls.forEach((containerColorEl) => {
    colorCode = "";
    for (let index = 0; index < 6; index++) {
        colorCode += arr[Math.floor(Math.random() * 15)];
    }
    containerColorEl.style.backgroundColor = '#' + colorCode;
    containerColorEl.innerHTML = '#' + colorCode;
});