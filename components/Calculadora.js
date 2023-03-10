// Definición de la clase Calculadora
class Calculadora {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  // Método para realizar la suma y diferencia de los números
  sumarYRestar(num1, num2) {
    const suma = num1 + num2;
    const diferencia = num1 - num2;
    console.log(`La suma de ${num1} y ${num2} es ${suma}`);
    console.log(`La diferencia de ${num1} y ${num2} es ${diferencia}`);
  }

  // Método para realizar el producto y la división de los números
  multiplicarYDividir(num1, num2) {
    const producto = num1 * num2;
    console.log(`El producto de ${num1} y ${num2} es ${producto}`);
    try {
      if (num2 === 0) {
        throw new Error("La división entre 0 no está determinada");
      }
    } catch (error) {
      console.error(error.message);
    }
    const division = num1 / num2;
    console.log(`La división de ${num1} y ${num2} es ${division}`);
  }

}

export default Calculadora;