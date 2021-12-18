//Función que tendrá como parámetros dos valores, sumarlos, restarlos, dividirlos, multiplicarlos y elevar al cuadrado el resto, para luego dichos parámetros aumentarles 1 y restarles 1 a ambos.
/*//Declaración de valores
var numero1 = 10;
var numero2 = 3;

//Operadores aritméticos básicos
valor1 = numero1 + numero2;
valor2 = numero1 * numero2;
valor3 = numero1 - numero2;
valor4 = numero1 / numero2;
valor5 = numero1 % numero2;
numero1++;
numero2--;

console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(valor4);
console.log(valor5);
console.log(numero1);
console.log(numero2);
*/
// function calculadora(num_1,num_2){
//     suma = num_1+ num_2;
//     resta = num_1 - num_2;
//     multiplicar = num_1 * num_2;
//     dividir = num_1/num_2;
//     resto = num_1 % num_2;
//     resto_cuadrado = resto*resto;
//     aumentara =num_1;
//     aumentara++;
//     decrementoa =num_1;
//     decrementoa--;
//     aumentarb = num_2;
//     aumentarb++;
//     decrementarb = num_2;
//     decrementarb--;
//     return ("Resultados:\nNumero 1 ="+num_1+
//             "\nNumero 2 = "+num_2+ 
//             "\n\nSuma: "+suma+
//             "\nResta: "+resta+
//             "\nMultiplicacion: "+multiplicar+
//             "\nDivision: "+dividir+
//             "\nResto: "+resto+
//             "\nCuadrado resto: "+resto_cuadrado+
//             "\nAumento Numero 1: "+aumentara+
//             "\nDecremento Numero 2: "+decrementoa+
//             "\nAumento Numero 2: "+aumentarb+
//             "\nDecremento Numero 2: "+decrementarb);
// }
// console.log(calculadora(10,7));

//Otro forma de hacerlo
function mathematicOperations(a,b) {
    console.log("\Numero 1: "+x+"\nNumero 2: "+y);
    suma =(a)+(b);
    console.log("La suma es: "+suma);
    resta = a-b;
    console.log("La resta es: "+resta);
    multiplicacion = a*b;
    console.log("La multiplicacion es: "+multiplicacion);
    division = a/b;
    console.log("La division es: "+division);
    residuo = a&b;
    console.log("El residuo es: "+residuo);
  
  }
  x = parseInt(prompt("Ingresa un numero: "));
  y = parseInt(prompt("Ingresa otro numero: "));
  mathematicOperations(x,y);
