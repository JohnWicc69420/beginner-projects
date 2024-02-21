const button = document.querySelector(".clickMe");
const spanEl = document.querySelector(".color");
const container = document.querySelector(".container");
button.addEventListener('click', () => {
    changeColor();

})

const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
function changeColor() {
    let color = '';
    for (let i = 0; i < 6; i += 1) {
        color += arr[Math.floor(Math.random() * 15)];
    }
    container.style.background = '#' + color;
    spanEl.innerHTML = ' #' + color;
}