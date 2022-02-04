const api_URL = 'https://api-dolar-argentina.herokuapp.com'

const container_dolar = document.getElementById('container__dolar');
const dolar_oficial = document.getElementById('dolar-oficial');
const dolar_blue = document.getElementById('dolar-blue');
const dolar_ccl = document.getElementById('dolar-ccl');
const dolar_turista = document.getElementById('dolar-turista');
const dolar_bolsa = document.getElementById('dolar-bolsa');
const euro = document.getElementById('euro');
const real = document.getElementById('real');

const ev_dolar_oficial = document.getElementById('ev-dolar_oficial');
const ev_dolar_blue = document.getElementById('ev-dolar_blue');
const ev_real = document.getElementById('ev-real');
const ev_euro = document.getElementById('ev-euro');

const riesgo_pais = document.getElementById('riesgo-pais');
const reservas = document.getElementById('reservas');
const circulacion = document.getElementById('circulacion');

//Dolar oficial

fetch(`${api_URL}/api/dolaroficial`)
    .then((response) => response.json())
    .then((quotes) => {
        // const tpl = `<p>Ultima actualización: ${quotes.fecha}<br>Compra: ${quotes.compra}<br> Venta: ${quotes.venta}</p>`
        const tpl = `<thead> <tr> <th>Ultima actualización</th> <th>Compra</th> <th>Venta</th> </tr> </thead> <tbody> <tr> <td>${quotes.fecha}</td> <td>$${quotes.compra}</td> <td>$${quotes.venta}</td> </tr> </tbody>`
        dolar_oficial.innerHTML = tpl
    })

//Dolar Blue

fetch(`${api_URL}/api/dolarblue`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = `<thead> <tr> <th>Ultima actualización</th> <th>Compra</th> <th>Venta</th> </tr> </thead> <tbody> <tr> <td>${quotes.fecha}</td> <td>$${quotes.compra}</td> <td>$${quotes.venta}</td> </tr> </tbody>`
        dolar_blue.innerHTML = tpl
    })

//Dolar CCL

fetch(`${api_URL}/api/contadoliqui`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = `<thead> <tr> <th>Ultima actualización</th> <th>Compra</th> <th>Venta</th> </tr> </thead> <tbody> <tr> <td>${quotes.fecha}</td> <td>$${quotes.compra}</td> <td>$${quotes.venta}</td> </tr> </tbody>`
        dolar_ccl.innerHTML = tpl
    })

//Dolar Turista

fetch(`${api_URL}/api/dolarturista`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = `<thead> <tr> <th>Ultima actualización</th> <th>Compra</th> <th>Venta</th> </tr> </thead> <tbody> <tr> <td>${quotes.fecha}</td> <td>${quotes.compra}</td> <td>$${quotes.venta}</td> </tr> </tbody>`
        dolar_turista.innerHTML = tpl
    })

//Dolar Bolsa

fetch(`${api_URL}/api/dolarbolsa`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = `<thead> <tr> <th>Ultima actualización</th> <th>Compra</th> <th>Venta</th> </tr> </thead> <tbody> <tr> <td>${quotes.fecha}</td> <td>$${quotes.compra}</td> <td>$${quotes.venta}</td> </tr> </tbody>`
        dolar_bolsa.innerHTML = tpl
    })

//Euro

fetch(`${api_URL}/api/euro/nacion`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = `<thead> <tr> <th>Ultima actualización</th> <th>Compra</th> <th>Venta</th> </tr> </thead> <tbody> <tr> <td>${quotes.fecha}</td> <td>$${quotes.compra}</td> <td>$${quotes.venta}</td> </tr> </tbody>`
        euro.innerHTML = tpl
    })

//Real

fetch(`${api_URL}/api/real/nacion`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = `<thead> <tr> <th>Ultima actualización</th> <th>Compra</th> <th>Venta</th> </tr> </thead> <tbody> <tr> <td>${quotes.fecha}</td> <td>$${quotes.compra}</td> <td>$${quotes.venta}</td> </tr> </tbody>`
        real.innerHTML = tpl
    })

//Evolucion

//Evolucion dolar oficial

fetch(`${api_URL}/api/evolucion/dolaroficial`)
    .then((response) => response.json())
    .then((quotes) => {
        // console.log(quotes.meses)
        // const tpl = quotes["meses"].map((quote) => `<p>Mes: ${quote.mes}<br>Año: ${quote.anio}<br> Valor: $${quote.valor}</p>`)
        const tpl = quotes["meses"].map((quote) =>
            `<table border="1">
            <thead>
            <tr>
                <th>Mes</th>
                <th>Año</th> 
                <th>Valor</th> 
            </tr> 
         </thead> 

         <tbody> 
            <tr> 
                <td>${quote.mes}</td> 
                <td>${quote.anio}</td> 
                <td>$${quote.valor}</td> 
            </tr> 
         </tbody>
         </table>`)
        ev_dolar_oficial.innerHTML = tpl.join('')
            // const tpl = `<p>Ultima actualización: ${quotes.fecha}<br>Compra: ${quotes.compra}<br> Venta: ${quotes.venta}</p>`
            // for (let i of quotes["meses"]) {
            //     console.log(i.anio)
            //     const tpl = `<p>Año: ${i.anio}<br>Mes: ${i.mes}<br> Valor: ${i.valor}</p>`
            //     ev_dolar_oficial.innerHTML = tpl
            // }
    })

//Evolucion dolar blue

fetch(`${api_URL}/api/evolucion/dolarblue`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = quotes["meses"].map((quote) =>
            `<table border="1">
            <thead>
            <tr>
                <th>Mes</th>
                <th>Año</th> 
                <th>Valor</th> 
            </tr> 
         </thead> 

         <tbody> 
            <tr> 
                <td>${quote.mes}</td> 
                <td>${quote.anio}</td> 
                <td>$${quote.valor}</td> 
            </tr> 
         </tbody>
         </table>`)
        ev_dolar_blue.innerHTML = tpl.join('')
    })

//Evolucion real

fetch(`${api_URL}/api/evolucion/realoficial`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = quotes["meses"].map((quote) =>
            `<table border="1">
            <thead>
            <tr>
                <th>Mes</th>
                <th>Año</th> 
                <th>Valor</th> 
            </tr> 
         </thead> 

         <tbody> 
            <tr> 
                <td>${quote.mes}</td> 
                <td>${quote.anio}</td> 
                <td>$${quote.valor}</td> 
            </tr> 
         </tbody>
         </table>`)
        ev_real.innerHTML = tpl.join('')
    })

//Evolucion euro

fetch(`${api_URL}/api/evolucion/eurooficial`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = quotes["meses"].map((quote) =>
            `<table border="1">
            <thead>
            <tr>
                <th>Mes</th>
                <th>Año</th> 
                <th>Valor</th> 
            </tr> 
         </thead> 

         <tbody> 
            <tr> 
                <td>${quote.mes}</td> 
                <td>${quote.anio}</td> 
                <td>$${quote.valor}</td> 
            </tr> 
         </tbody>
         </table>`)
        ev_euro.innerHTML = tpl.join('')
    })


//others

//Riesgo pais

fetch(`${api_URL}/api/riesgopais`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = `<thead> <tr> <th>Ultima actualización</th> <th>Valor</th> </tr> </thead> <tbody> <tr> <td>${quotes.fecha}</td> <td>${quotes.valor}</td> </tr> </tbody>`
        riesgo_pais.innerHTML = tpl
    })

//Reservas del BCRA en dolares

fetch(`${api_URL}/api/bcra/reservas`)
    .then((response) => response.json())
    .then((quotes) => {
        const tpl = `<thead> <tr> <th>Ultima actualización</th> <th>Valor</th> <th>Moneda</th> </tr> </thead> <tbody> <tr> <td>${quotes.fecha}</td> <td>${quotes.valor}</td> <td>${quotes.moneda}</td> </tr> </tbody>`
        reservas.innerHTML = tpl
    })

//Total pesos en circulacion

fetch(`${api_URL}/api/bcra/circulante`)
    .then((response) => response.json())
    .then((quotes) => {
        // console.log(quotes.fecha)
        // date = quotes.fecha
        // const regEx = /(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)/
        // const regEx2 = /\s(?:[01]\d|2[0-3])/
        // const hour = date.replace(regEx2, ` 04`)
        // console.log(hour)
        const tpl = `<thead> <tr> <th>Ultima actualización</th> <th>Valor</th> <th>Moneda</th> </tr> </thead> <tbody> <tr> <td>${quotes.fecha}</td> <td>$${quotes.valor}</td> <td>${quotes.moneda}</td> </tr> </tbody>`
        circulacion.innerHTML = tpl
    })