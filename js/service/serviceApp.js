const observer = new IntersectionObserver((entries) => {
    entries.forEach((Entry) => {
        if (Entry.isIntersecting) {
            Entry.target.classList.add('show');
        }
        else {
            Entry.target.classList.remove('show');
        }
    });
});

const hiddenElemnts = document.querySelectorAll('.hidden');
const transElemntsL = document.querySelectorAll('.translate-left');
hiddenElemnts.forEach((el) => observer.observe(el));
transElemntsL.forEach((el) => observer.observe(el));