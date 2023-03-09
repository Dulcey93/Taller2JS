import Circuit from './Circuit.js';

const circuit = new Circuit(100, 0.5);
circuit.calcularVoltaje();
console.log(`El voltaje del circuito es ${circuit.voltage}V.`);
