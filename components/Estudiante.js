export class Estudiante {
    constructor(nombre, sexo, notaDefinitiva) {
      this.nombre = nombre;
      this.sexo = sexo;
      this.notaDefinitiva = notaDefinitiva;
    }
  
    static encontrarMayorNota(estudiantes) {
      return estudiantes.reduce((estudianteMayorNota, estudiante) => {
        return estudiante.notaDefinitiva > estudianteMayorNota.notaDefinitiva ? estudiante : estudianteMayorNota;
      }, estudiantes[0]);
    }
  
    static encontrarMenorNota(estudiantes) {
      return estudiantes.reduce((estudianteMenorNota, estudiante) => {
        return estudiante.notaDefinitiva < estudianteMenorNota.notaDefinitiva ? estudiante : estudianteMenorNota;
      }, estudiantes[0]);
    }
  
    static contarHombresMujeres(estudiantes) {
      const hombres = estudiantes.filter(estudiante => estudiante.sexo === "Hombre");
      const mujeres = estudiantes.filter(estudiante => estudiante.sexo === "Mujer");
      return { hombres, mujeres };
    }
  }
  