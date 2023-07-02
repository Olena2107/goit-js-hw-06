const inputElements = document.querySelector("#validation-input");
inputElements.addEventListener('blur', validateInput);
const inputLength = Number(inputElements.dataset.length);
// console.log(inputLength)
function validateInput() {
   if(inputElements.value.length === inputLength){
    inputElements.classList.add('valid');
    inputElements.classList.remove('invalid');
  } else {
    inputElements.classList.add('invalid');
     inputElements.classList.remove('valid');
     return alert ("Введіть 6 символів");
  }
};