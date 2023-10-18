//Paquete importado
require ('colors');

// referencia el modulo math a traves de la constante math  
const math = require('./modules/math.js')

console.clear();


const main = async() => {
    
var lineas = '*******************************************'.green
var linea1 = '*'.green
var linea2 = '*                                           *'.green
 
function getRandomInt(max) {
    return Math.floor(Math.random() * 11);
  }
  
var numero1 = getRandomInt()
var numero2 = getRandomInt()

    const suma = await math.add(numero1, numero2);
    const resta = await math.substract(numero1, numero2);
    const multiplicacion = await math.multiply(numero1, numero2);
    const division = await math.divide(numero1, numero2);



console.log('******************************************' .blue);
console.log('*  '.cyan, 'FUNCIONES MATEMATICAS'.cyan,
            '               *'.blue);
console.log('******************************************\n'.blue);

console.log('******************************************'.blue);
  console.log('*  '.blue + 'Numeros aleatorios'.bgRed + '    '+  numero1 +','+ numero2 + '          *'.blue);
  console.log('******************************************\n\n'.blue);
  console.log('*'.blue + '  Suma: '.yellow + `${[numero1]}`.red  + ' + ' +  `${[numero2]}`.red 
  + ' = ' + `${suma}`.red + '                       *'.blue);
  console.log('*'.blue + '  Resta:'.yellow + `${[numero1]}`.red  + ' - ' +  `${[numero2]}`.red 
  + ' = ' +  `${resta}`.red + '                       *'.blue);
  console.log('*'.blue + '  Multiplica: '.yellow + `${[numero1]}`.red  + ' * ' +  `${[numero2]}`.red 
  + ' = ' + `${multiplicacion}`.red +  '                 *'.blue);
  console.log('*'.blue + '  Divide: '.yellow + `${[numero1]}`.red  + ' / ' +  `${[numero2]}`.red 
  + ' = ' +  `${division.toFixed(1)}`.red + '                    *'.blue);
  
  console.log('******************************************\n\n'.blue);



}

main();