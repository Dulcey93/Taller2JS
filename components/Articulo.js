export default class Articulo {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  // utilizamos el this. para indicar que se accede a los datos que guarda el objeto cuando se instancia
    calcularTotal(cantidad) {
      return cantidad * this.precio;
    }
  }
  