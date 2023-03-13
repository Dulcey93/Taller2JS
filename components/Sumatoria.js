export default class Sumatoria {
    constructor() {
      this.numeros = [];
    }
  
    agregarNumero(numero) {
      this.numeros.push(numero);
    }
  
    calcularSumatoria() {
      return this.numeros.reduce((total, numero) => total + numero, 0);
    }
  
    calcularPromedio() {
      return this.calcularSumatoria() / this.numeros.length;
    }
  
    contarNumeros() {
      return this.numeros.length;
    }
  
    encontrarMayor() {
      return Math.max(...this.numeros);
    }
  
    encontrarMenor() {
      return Math.min(...this.numeros);
    }
  }  