const openSection = document.querySelector('.open-nav');
const closeSection = document.querySelector('.close-nav');
const bluR = document.querySelector('.downBlur');
const naV = document.getElementById('nav');

openSection.addEventListener('click', () => {
    bluR.style.display = 'flex';
    setTimeout(() => bluR.style.opacity = '100%', 200);
    setTimeout(() => {
        naV.style.left = '50%';
        openSection.style.display = 'none';
        closeSection.style.display = 'block';
    }, 200);
    
});

closeSection.addEventListener('click', () => {
    setTimeout(() => {
        naV.style.left = '150%';
        openSection.style.display = 'block';
        closeSection.style.display = 'none';
    }, 200);
    setTimeout(() => bluR.style.opacity = '0', 200);
    setTimeout(() => { bluR.style.display = 'none'; }, 400);

});