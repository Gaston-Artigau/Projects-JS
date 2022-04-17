const peso = document.getElementById('imc__input1')
const altura = document.getElementById('imc__input2')
const submit = document.getElementById('imc__submit')
const form = document.getElementById('form')
const show = document.getElementById('imc__show')

form.addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()
    const formulario = new FormData(this)
    const formPeso = formulario.get('peso')
    const formAltura = formulario.get('altura')

    const imc = formPeso / formAltura ** 2

    const fragment = document.createDocumentFragment()
    texto = document.createElement('P')
    texto.classList.add('text-show')

    if (imc < 18.5) {
        texto.textContent = `Peso Bajo: tu IMC es ${imc.toFixed(2)} y deberia ser de entre 18.5 y 24.9`
        texto.classList.add('text-show__bajo')
        fragment.appendChild(texto)
        show.appendChild(fragment)
    }
    if (imc >= 18.5 && imc <= 24.9) {
        texto.textContent = `Tu peso es el ideal: tu IMC es ${imc.toFixed(2)} y esta en los estanderes correctos`
        texto.classList.add('text-show__normal')
        fragment.appendChild(texto)
        show.appendChild(fragment)
    }
    if (imc >= 25 && imc <= 29.9) {
        texto.textContent = `Sobrepeso: tu IMC es ${imc.toFixed(2)} y deberia ser de entre 18.5 y 24.9`
        texto.classList.add('text-show__sobrepeso')
        fragment.appendChild(texto)
        show.appendChild(fragment)
    }
    if (imc >= 30 && imc <= 34.9) {
        texto.textContent = `Obesidad I: tu IMC es ${imc.toFixed(2)} y deberia ser de entre 18.5 y 24.9`
        texto.classList.add('text-show__ob1')
        fragment.appendChild(texto)
        show.appendChild(fragment)
    }
    if (imc >= 35 && imc <= 39.9) {
        texto.textContent = `Obesidad II: tu IMC es ${imc.toFixed(2)} y deberia ser de entre 18.5 y 24.9`
        texto.classList.add('text-show__ob2')
        fragment.appendChild(texto)
        show.appendChild(fragment)
    }
    if (imc >= 40) {
        texto.textContent = `Obesidad severa: tu IMC es ${imc.toFixed(2)} y deberia ser de entre 18.5 y 24.9`
        texto.classList.add('text-show__ob3')
        fragment.appendChild(texto)
        show.appendChild(fragment)
    }

    e.target.reset()
}