import Sumatoria from './components/Sumatoria.js';

const sumatoria = new Sumatoria();

let numero;

do {
  numero = parseInt(prompt('Ingrese un número:'));
  if (numero !== 0) {
    sumatoria.agregarNumero(numero);
  }
} while (numero !== 0);

const sumatoriaTotal = sumatoria.calcularSumatoria();
const promedio = sumatoria.calcularPromedio();
const cantidadNumeros = sumatoria.contarNumeros();
const mayor = sumatoria.encontrarMayor();
const menor = sumatoria.encontrarMenor();

console.log(`La sumatoria de los valores es: ${sumatoriaTotal}`);
console.log(`El promedio de los valores es: ${isNaN(promedio) ? 0 : promedio}`);
console.log(`Se ingresaron ${cantidadNumeros} valores.`);
console.log(`El mayor valor ingresado es: ${isNaN(mayor) ? 'N/A' : mayor}`);
console.log(`El menor valor ingresado es: ${isNaN(menor) ? 'N/A' : menor}`);

