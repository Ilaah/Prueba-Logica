/*
Ejercicio 2
A well-known software development company has been commissioned by the Archaeological Society. One of the modules has to help the archaeologists to process data about the ruins of buildings they have found during their excavations of ancient cities. Development of this module has been assigned to Vasya.
Vasya, being a seasoned programmer, at once noticed that the module would need a database to contain the descriptions of the ruins and the estimated construction times of the buildings. It would be all fine, but suddenly the manager got the genial idea that since the database describes Roman ruins, the years of construction should be stored in the Roman number system. Now Vasya is wondering how many symbols he needs to set aside for each year number field in the database. According to the functional specification, the software module must be able to handle years from A to B (inclusive). Help Vasya determine the minimal number of characters sufficient for storing any year number in the range from A to B.
Especificación de entrada
The only input line contains the descriptions of the years A and B, separated by the "-" sign. A description of a year consists of one to four decimal digits (the number of the year), followed by either "AD" (Anno Domini, the current era) or "BC" (Before Christ, before the current era). In both directions the years are numbered starting from 1. It is known that (753BC) <= A <= B <= (2012AD).
Especificación de salida
The output should consist of a single integer, the minimal number of characters that have to be reserved in the database for the year number.
Ejemplo de entrada
1BC-1AD
Ejemplo de salida
7
Hint(s)
For input:
753BC-747BC
Output must be:
3
For input:
2000AD-2012AD
Output must be:
10
*/

function convertRomanRangeToNumbers(romanRange) { //Función para convertir el rango a dos números
  const [startYear, endYear] = romanRange.split('-');
  const startNum = startYear.match(/[0-9]+|BC|AD/g);
  const endNum = endYear.match(/[0-9]+|BC|AD/g);

  const start = parseInt(startNum);
  const end = parseInt(endNum);

  return [start, end];
}

function convertNumberToRoman(num) { //Función para convertir los dos números en romanos
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];
  let result = '';
  romanNumerals.forEach(numeral => {
    while (num >= numeral.value) {
      result += numeral.symbol;
      num -= numeral.value;
    }
  });
  return result;
}

function getRomanCharCount(range) { //Función para realizar un conteo del número de caracteres de los números romanos para obtener el mínimo
  const [start, end] = convertRomanRangeToNumbers(range); //Llamada a la función convertRomanRangeToNumbers para transformar los números en formato de rango, a dos números enteros y asignar este valor a sus respectivas variables
  const startRoman = convertNumberToRoman(start); //Llamada a la función convertNumberToRoman para transformar el primer número a romano
  const endRoman = convertNumberToRoman(end); //Llamada a la función convertNumberToRoman para transformar el segundo número a romano
  return startRoman.length + endRoman.length; //Suma del total de caracteres por cada número romano para sacar un conteo mínimo de caracteres necesarios
}

//Pruebas
console.log(convertRomanRangeToNumbers("753BC-747AB")); //Resultado esperado: [ 753, 747 ]
console.log(convertNumberToRoman(747)); //Resultado esperado: DCCXLVII
console.log(getRomanCharCount("753BC-747BC")); //Resultado esperado: 15