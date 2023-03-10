// El commonJS sirve para el Node.js es por eso que pondré en práctica esta manera de exportar e importar
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      if (edad < 0) {
        throw new Error("La edad no puede ser negativa");
      }
      this.edad = edad;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get edad() {
      return this._edad;
    }
  
    set edad(nuevaEdad) {
      this._edad = nuevaEdad;
    }
  }
  
  module.exports = Persona;  