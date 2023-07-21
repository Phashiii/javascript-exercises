const convertToCelsius = function(temp) {
  converted = (temp -32) * (5/9);
  if(Number.isInteger(converted))
  {
    return converted;
  }else{
    return Math.round(converted * 10) / 10;
  }
  return Math.round(converted, 2);
};

const convertToFahrenheit = function(temp) {
  converted = temp * (9/5) + 32;
  if(Number.isInteger(converted))
  {
    return converted;
  }else{
    return Math.round(converted * 10) / 10;
  }
  return Math.round(converted, 2);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
