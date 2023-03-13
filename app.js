import { Estudiante } from './components/Estudiante.js';

const estudiantes = [];

function agregarEstudiante() {
  const nombre = prompt("Ingrese el nombre del estudiante:");
  const sexo = prompt("Ingrese el sexo del estudiante (Hombre/Mujer):");
  const notaDefinitiva = parseFloat(prompt("Ingrese la nota definitiva del estudiante:"));

  const nuevoEstudiante = new Estudiante(nombre, sexo, notaDefinitiva);
  estudiantes.push(nuevoEstudiante);
}

function mostrarResultados() {
  const estudianteMayorNota = Estudiante.encontrarMayorNota(estudiantes);
  const estudianteMenorNota = Estudiante.encontrarMenorNota(estudiantes);
  const { hombres, mujeres } = Estudiante.contarHombresMujeres(estudiantes);

  console.log("Estudiante con la mayor nota:", estudianteMayorNota.nombre);
  console.log("Estudiante con la menor nota:", estudianteMenorNota.nombre);
  console.log(`El número de estudiantes hombres es: ${hombres.length}`);
  console.log(`El número de estudiantes mujeres es: ${mujeres.length}`);
}

let opcion;
do {
  opcion = parseInt(prompt("1. Agregar estudiante\n2. Mostrar resultados\n3. Salir"));

  switch (opcion) {
    case 1:
      agregarEstudiante();
      break;
    case 2:
      mostrarResultados();
      break;
    case 3:
      console.log("Adiós!");
      break;
    default:
      console.log("Opción inválida. Por favor, seleccione una opción válida.");
      break;
  }
} while (opcion !== 3);
