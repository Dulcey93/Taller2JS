class Circuit {
    constructor(resistance, current) {
      this._resistance = resistance;
      this._current = current;
      this._voltage = 0;
    }
  
    calcularVoltaje() {
      if (typeof this._resistance !== 'number' || typeof this._current !== 'number') {
        throw new Error('La resistencia y la corriente deben ser números.');
      }
      this._voltage = this._current * this._resistance;
    }
  
    get resistance() {
      return this._resistance;
    }
  
    set resistance(value) {
      if (typeof value !== 'number' || value <= 0) {
        throw new Error('El valor de la resistencia debe ser un número positivo.');
      }
      this._resistance = value;
    }
  
    get current() {
      return this._current;
    }
  
    set current(value) {
      if (typeof value !== 'number' || value <= 0) {
        throw new Error('El valor de la corriente debe ser un número positivo.');
      }
      this._current = value;
    }
  
    get voltage() {
      return this._voltage;
    }
  }
  
  export default Circuit;
  