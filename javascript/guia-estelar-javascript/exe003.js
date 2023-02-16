/*
  Celsius em Fahrenheit

  Crie uma função que receba uma string em celsius ou fahrenheit
  e faça a transformação de uma unidade para outra :
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

  [x] - Criar a funcao
  [x] - Verificar qual e o tipo de medida de temperatura
  [x] - Fazer a transformacao de acordo com o valor recebido
  [x] - Printar resposta na tela

*/

function temperatureGauge(value) {

  function celsiusToFahrenheit (value) {
    let removeCelsius = value.replace("Celsius", " ");
    let removeSpaces = removeCelsius.trim();
    let convertForNumber = parseInt(removeSpaces);
    let celsiusForFahrenheit = convertForNumber * 9/5 + 32;
    console.log(`A temperatura de ${convertForNumber} Celsius e equivalente a ${celsiusForFahrenheit.toFixed(2)} Fahrenheit`)
  }

  function fahrenheitToCelsius(value) {
    let removeFahrenheit = value.replace("Fahrenheit", " ");
    let removeSpaces = removeFahrenheit.trim();
    let convertForNumber = parseInt(removeSpaces);
    let fahrenheitForCelsius = (convertForNumber - 32) * 5/9;
    console.log(`A temperatura de ${convertForNumber} Fahrenheit e equivalente a ${fahrenheitForCelsius.toFixed(2)} Celsius`)
  }

  if(value.toLowerCase().indexOf("celsius") != -1){
    celsiusToFahrenheit(value);
  } else if(value.toLowerCase().indexOf("fahrenheit") != -1) {
    fahrenheitToCelsius(value)
  } else {
    console.log('Conversão Invalida');
  }
}

temperatureGauge("80 Fahrenheit")