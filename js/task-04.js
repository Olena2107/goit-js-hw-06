const counter = document.getElementById('counter');
const valueElement = counter.querySelector('#value');
const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');
let counterValue = 0;
function updateCounter() {
    valueElement.textContent = counterValue;
}
decrementButton.addEventListener('click', function() {
    counterValue--;
    updateCounter();
});
incrementButton.addEventListener('click', function() {
    counterValue++;
    updateCounter();
});
updateCounter();