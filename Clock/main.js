function time() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`);
}

time();
let count = setInterval(time, 1000);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    clearInterval(count);
})