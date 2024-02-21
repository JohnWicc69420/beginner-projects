// to determine the origin of btn::before

let btnEl = document.querySelector('.btn')

btnEl.addEventListener('mouseover', (e) => {
    let x = e.pageX - btnEl.offsetLeft; // to assign horizontal pos to var --left
    let y = e.pageY - btnEl.offsetTop;  // to assign vertical pos to var --top
    btnEl.style.setProperty('--left', x + 'px');
    btnEl.style.setProperty('--top', y + 'px');
});