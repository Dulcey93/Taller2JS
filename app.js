import Articulo from './components/Articulo.js';

const nombreArticulo = prompt("Ingrese el nombre del artículo:");
const precioArticulo = parseFloat(prompt("Ingrese el precio del artículo:"));
const cantidadComprada = parseInt(prompt("Ingrese la cantidad comprada:"));

const articulo = new Articulo(nombreArticulo, precioArticulo);

const totalAPagar = articulo.calcularTotal(cantidadComprada);
// Tofixed() sirve para redondear un número y especificar el número de decimales que se deben mostrar después del punto decimal.
console.log(`
  Factura de compra:
  Artículo: ${articulo.nombre}
  Precio unitario: $${articulo.precio.toFixed(2)}
  Cantidad comprada: ${cantidadComprada}
  Total a pagar: $${totalAPagar.toFixed(2)}
`);
