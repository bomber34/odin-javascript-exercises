const FAHRENHEIT_TO_CELSIUS_OFFSET = 32
const FAHRENHEIT_TO_CELSIUS_CONVERSION_FACTOR = 5 / 9;

function oneDecimalRepresentation(temperature) {
  return Math.round(temperature * 10) / 10;
}

const convertToCelsius = function(degreeInFahrenheit) {
  let offset = degreeInFahrenheit - FAHRENHEIT_TO_CELSIUS_OFFSET
  let degreeInCelsius = offset * FAHRENHEIT_TO_CELSIUS_CONVERSION_FACTOR;
  return oneDecimalRepresentation(degreeInCelsius);
};

const convertToFahrenheit = function(degreeInCelsius) {
  let degreeInFahrenheit = degreeInCelsius / FAHRENHEIT_TO_CELSIUS_CONVERSION_FACTOR;
  degreeInFahrenheit += FAHRENHEIT_TO_CELSIUS_OFFSET;
  return oneDecimalRepresentation(degreeInFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
