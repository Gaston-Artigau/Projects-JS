class Display {
    constructor(showValorAnterior, showValorActual) {
        this.showValorAnterior = showValorAnterior;
        this.showValorActual = showValorActual;
        this.calculador = new Calculadora()
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signs = {
            sum: '+',
            subtract: '-',
            multiply: 'X',
            divide: '/',
            percent: '%',
        }
    }

    delete() {
        this.valorActual = this.valorActual.toString().slice(0, -1)
        this.printValues()
    }

    deleteAll() {
        this.valorActual = ''
        this.valorAnterior = ''
        this.tipoOperacion = undefined
        this.printValues()
    }

    computar(tipo) {
        this.tipoOperacion !== 'equal' && this.calculate();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.printValues();
    }

    addNumber(number) {
        if (number === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + number.toString()
        this.printValues()
    }

    printValues() {
        this.showValorActual.textContent = this.valorActual;
        this.showValorAnterior.textContent = `${this.valorAnterior} ${this.signs[this.tipoOperacion] || ''}`
    }

    calculate() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}