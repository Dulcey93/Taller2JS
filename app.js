import Circuit from './components/Circuit.js';

try {
  const resistance = Number(prompt("Ingrese el valor de la resistencia:"));
  const current = Number(prompt("Ingrese el valor de la corriente:"));

  if (!resistance || !current) {
    throw new Error("Invalid input: resistance and current values must be numbers. Please enter valid numbers for the resistance and current inputs.");
  }

  const circuit = new Circuit(resistance, current);
  circuit.calcularVoltaje();

  if (circuit.voltage < 0) {
    throw new Error(`Error: calculated voltage is negative. Please double-check the resistance and current inputs to make sure they're correct.`);
  }

  console.log(`El voltaje del circuito es ${circuit.voltage}V.`);
} catch (error) {
  console.error(error.message);
}
