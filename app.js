import Atleta from './components/Atleta.js';

const atletas = [];

do {
  console.log('Ingrese el nombre del atleta finalista:');
  const nombre = prompt('Nombre:');

  console.log(`Ingrese la marca de ${nombre} en metros:`);
  const marca = parseFloat(prompt('Marca:'));

  const atleta = new Atleta(nombre, marca);
  atletas.push(atleta);

  const campeona = atletas.reduce((campeona, atleta) => {
    return atleta.getMarca() > campeona.getMarca() ? atleta : campeona;
  });

  console.log(`La atleta campeona es ${campeona.getNombre()} con una marca de ${campeona.getMarca()} metros.`);

  const rompioRecord = campeona.getMarca() > 15.5;
  console.log(`El récord fue ${rompioRecord ? 'roto' : 'no roto'}.`);

  if (rompioRecord) {
    console.log('La atleta campeona recibirá un pago de 500 millones.');
  }

  const continuar = prompt('¿Desea ingresar los datos de otra atleta? (S/N)').toUpperCase() === 'S';
  if (!continuar) {
    console.log('¡Hasta luego!');
  }
} while (continuar);
