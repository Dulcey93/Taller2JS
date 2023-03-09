export default {
    example() {
        // Definimos un array con las tres notas
        const notas = [];

        // Pedir al usuario que ingrese las tres notas, con el método push agregamos los datos uno después del otro
        for (let i = 0; i < 3; i++) {
            notas.push(parseFloat(prompt(`Ingrese la nota ${i + 1}:`)));
        }

        // Calcular el promedio utilizando el método reduce
        // Con el método reduce declaramos una variable "a" que contenga el acumulativo y "b" como el valor actual del array
        // el metodo inicia con a=0 y b=notas[0]
        const promedio = notas.reduce((a, b) => a + b) / notas.length;

        // Mostrar el mensaje apropiado utilizando el operador ternario: es promedio menos o igual a 3.9? true: "Estudie" | False: "Becado"
        const mensaje = promedio <= 3.9 ? "Estudie" : "Becado";
        console.log(mensaje);
    }
}

