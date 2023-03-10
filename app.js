const Persona = require("./components/Persona.js");

const personas = [];

function crearPersona(index = 1) {
  const persona = new Persona();
  persona.nombre = prompt(`Ingresa el nombre de la persona ${index}:`);

  let edad;
  while (isNaN(edad)) {
    try {
      edad = Number(prompt(`Ingresa la edad de la persona ${index}:`));
      if (isNaN(edad)) {
        throw new Error("La edad debe ser un número");
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  persona.edad = edad;

  personas.push(persona);

  if (personas.length < 3) {
    crearPersona(personas.length + 1);
  }
}

crearPersona();
// ** ==> Find the older in the array of objects without .reduce() ** <==
// let mayor = personas[0];

// personas.forEach((persona) => {
//   mayor = persona.edad > mayor.edad ? persona : mayor;
// });

// console.log("La persona de mayor edad es:", mayor.nombre);

// ** ==> Find the older in the array of objects USING REDUCE() ** <==
console.log("Hola");
const mayor = personas.reduce((personaMayor, personaActual) =>
  personaActual.edad > personaMayor.edad ? personaActual : personaMayor
);

console.log("La persona de mayor edad es:", mayor.nombre);


