const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
textInput.addEventListener('input', function () {
    if (textInput.value === '') {
        textOutput.textContent = 'Anonymous';
    }
    textOutput.textContent = textInput.value === '' ? 'Anonymous' :  textInput.value
});