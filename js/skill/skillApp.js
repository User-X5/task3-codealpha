let valueDisplay = document.querySelectorAll('.num');
let duration = 1.2;

valueDisplay.forEach((value) => {
    let start = 0;
    let end = parseInt(value.getAttribute('val'));
    
    let interval = Math.floor(duration / end);
    let counter = setInterval(() => {
        start += 1;

        value.textContent = start;
        if (start == end) {
            clearInterval(counter);
        }
    }, duration);
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entery) => {
        if (entery.isIntersecting) {
            entery.target.classList.add('show');
        }
        else {
            entery.target.classList.remove('show');
        }
    });
});

const hiddenElemnts = document.querySelectorAll('.hidden');
hiddenElemnts.forEach((el) => observer.observe(el) );
