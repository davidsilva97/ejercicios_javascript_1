//Formas de declarar un arreglo
//Forma 1

const numeros = [1,2,3,4,5];
console.log(numeros);

//Forma numero 2
const misNumeros = new Array(16,17,18,19);
console.log(misNumeros);

//Forma numero 3
const colores = ["rojo","Verde","azul","Amarillo"];
console.log(colores);

//Arreglos combinados
const combinado = ["Hola",23,true,null,undefined,
{nombre: "Guillermo",Apellido: "Silva"}, new Date]; //{Objetos}

console.log(combinado);

//Variables con arreglos
let valor;
valor = numeros.length;
console.log(valor);

//¿Como saber si e sun arreglo o no?
valor = Array.isArray(misNumeros);
console.log(valor);

//Obtener valor del arreglo
valor = colores[2];
console.log(valor);

//Insertar valores a un arreglo
colores[2] = "Morado";
console.log(colores);

//Conocer la posicion de un elemento del arreglo
valor = colores.indexOf("Morado");
console.log(valor);

//Añadir y eliminar valores de un arreglo

//AL FINAL
colores.push("Magenta");
console.log(colores);

//Al inicio
colores.unshift("Cerulio");
console.log(colores);

//Eliminar el ultimo elemento 
colores.pop();
console.log(colores);

//Eliminar el primer elemento
colores.shift();
console.log(colores);

//Extraer un conjunto de valores
numeros.splice(1,3); //splice --> Quitar un conjunto de valores entre el indice 1-3, 1 = 2 2 = 3, 3 = 4
console.log(numeros);

///////////////////
//Concatenar arreglos
valores = misNumeros.concat(numeros); //Unir dos arreglos
console.log(valores); 

//ordenar arreglo
valor = colores.sort();
console.log(valor);

valor = valores.sort();
console.log(valor);

//ORDEN PERSONBALIZADO
//Descendente
valor = valores.sort(function(x,y){
    return x-y;
});
console.log(valor);

//Ascendente
valor = valores.sort(function(x,y){
    return y-x;
});
console.log(valor);