const IncEl = document.querySelector(".increase");
const ResetEl = document.querySelector(".reset");
const DecEl = document.querySelector(".decrease");
const CountEl = document.querySelector('#count');
let number = 0;
IncEl.addEventListener('click', () => {
    number += 1;
    CountEl.innerHTML = number;
    check();
})
ResetEl.addEventListener('click', () => {
    number = 0;
    CountEl.innerHTML = number;
    check();
})
DecEl.addEventListener('click', () => {
    number -= 1;
    CountEl.innerHTML = number;
    check();
})
check = () => {
    if (CountEl.innerHTML > 0) {
        CountEl.style.color = 'green';
    }
    else if (CountEl.innerHTML < 0) {
        CountEl.style.color = 'red';
    }
    else {
        CountEl.style.color = 'black';
    }
}