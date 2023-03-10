import Calculadora from "./components/Calculadora.js";

const num1 = parseFloat(prompt('Ingrese el primer número:'));
const num2 = parseFloat(prompt('Ingrese el segundo número:'));

console.log("hola1");

console.log("hola2");

// Método principal para ejecutar el algoritmo
function ejecutar(num1, num2) {
  const calculadora = new Calculadora(num1, num2);
  if (num1>=num2) {
    console.log(`${num1} es mayor que ${num2}`);
    calculadora.sumarYRestar(num1, num2);
  } else {
    console.log(`${num2} es mayor que ${num1}`);
    calculadora.multiplicarYDividir(num1, num2);
  }
}
ejecutar(num1, num2);

console.log("hola3");


