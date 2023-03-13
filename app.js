import Figura from './components/Figura.js';

const figuras = [];
let opcion; // Declarar la variable "opcion" antes del bucle

do {
  console.log('¿Qué figura deseas ingresar?');
  console.log('1. Cuadrado');
  console.log('2. Rectángulo');
  console.log('3. Salir');

  opcion = parseInt(prompt('Ingrese una opción:'));

  switch (opcion) {
    case 1:
      const ladoCuadrado = parseFloat(prompt('Ingrese el lado del cuadrado:'));
      const cuadrado = new Figura(ladoCuadrado, null, null);
      console.log(`El perímetro del cuadrado es ${cuadrado.calcularPerimetro()}`);
      figuras.push(cuadrado);
      break;

    case 2:
      const baseRectangulo = parseFloat(prompt('Ingrese la base del rectángulo:'));
      const alturaRectangulo = parseFloat(prompt('Ingrese la altura del rectángulo:'));
      const rectangulo = new Figura(null, baseRectangulo, alturaRectangulo);
      console.log(`El área del rectángulo es ${rectangulo.calcularArea()}`);
      figuras.push(rectangulo);
      break;

    case 3:
      console.log('¡Hasta luego!');
      break;

    default:
      console.log('Opción inválida.');
      break;
  }

} while (opcion !== 3);

const sumaAreas = figuras.reduce((total, figura) => total + figura.calcularArea(), 0);
console.log(`La suma de las áreas ingresadas es ${sumaAreas}.`);
