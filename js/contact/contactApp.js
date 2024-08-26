const counter = document.getElementById('counter');
const textArea = document.getElementById('desc');


textArea.addEventListener('keyup', () => {
    const numberOFCharacters = textArea.value.split('');
    counter.innerText = numberOFCharacters.length;
});



