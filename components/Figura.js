export default class Figura {
    constructor(lado, base, altura) {
        this.lado = lado;
        this.base = base;
        this.altura = altura;
    }

    calcularPerimetro() {
        return 4 * this.lado;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}
