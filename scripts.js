window.addEventListener('load', function () {
    const elem = document.querySelector('.container');
    const imageElem = document.querySelector('.container__image');
    
    elem.classList.add('container--isActive');
    imageElem.addEventListener('mousemove', function (event) {
        const xPosition= event.layerX;
        const yPosition= event.layerY;

        imageElem.style.transform = `rotateY(${xPosition/50}deg) rotateX(${-yPosition/50}deg)`;
    });
});