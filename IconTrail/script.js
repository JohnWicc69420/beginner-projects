const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (e) => {
    const imgs = document.createElement('span');
    bodyEl.appendChild(imgs);
    
    const hearts = document.querySelectorAll('span');
    hearts.forEach((heart) => {
        const rN = Math.floor(Math.random() * 100);
        heart.style.setProperty('--height', rN + 'px');
        heart.style.setProperty('--width', rN + 'px');
    });

    const xPos = e.offsetX;
    const yPos = e.offsetY;

    imgs.style.left = xPos + 'px';
    imgs.style.top = yPos + 'px';

    setTimeout(() => {
        imgs.remove();
    }, 3000)
});