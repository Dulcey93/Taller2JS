export default {
    example() {
        const numero = 15;

        // Comprobar si el número es par/impar y si es mayor que 10
        const resultado = ["es impar", "es par"][numero % 2] + " y " + (numero > 10 ? "es mayor que 10" : "no es mayor que 10");

        console.log(`${numero} ${resultado}`);

    }
}

