const show = document.getElementById('section1__show')
const showValorAnterior = document.getElementById('valor-anterior')
const showValorActual = document.getElementById('valor-actual')
const numbersButtons = document.querySelectorAll('.numbers')
const operatorsButtons = document.querySelectorAll('.operators')


const display = new Display(showValorAnterior, showValorActual)

numbersButtons.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

operatorsButtons.forEach(button => {
    button.addEventListener('click', () => display.computar(button.value));
})