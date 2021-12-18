// Exercise #1
// Open up a blank repl.it set to Javascript. Copy the code below into your workspace:

// var arr = ["This", "is", "a", "sentence."];
// function printOutString() {
//   // your code here
// }

// printOutString();
// Complete the function to print out the string This is a sentence.
//FORMA 1
// var arr = ["This", "is", "a", "sentence."];
// function printOutString(arr) {
//     console.log(arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]+" ");
// }
// printOutString(arr);

//FORMA 2
// var arr = ["This", "is", "a", "sentence."];
// function printOutString(arr) {
//     i = 0;
//     while(i<arr.length){
//         console.log(arr[i]+" ");
//         i++;
//     }
// }
// printOutString(arr);
////////////////////////////////////////////////////////////////////
// Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.

// var arreglo = [1,2,3,4,5];
// function retornar_valor(arreglo){
//     valor_mayor = 0;
//     for(var i = 0;i<arreglo.length; i++){
//         if(valor_mayor < arreglo[i]){
//             valor_mayor = arreglo[i];
//         } else{
//             valor_mayor = valor_mayor;
//         } 
//     } return console.log("El valor mayor fue: "+valor_mayor);
// }
// retornar_valor(arreglo);


// Exercise #2
// Write a program to sort a list of numbers in descending order (from highest to lowest).

// valores = [56,57,98,2,34,65];

// function descendente(){
//     valor = valores.sort(function(x,y){
//         return y-x;
//     });
//     console.log(valor);
// }

// descendente(valores);


// Step 1

// Write a program that takes in two lists and returns the greatest number out of the two lists. Hint: call the function from Class Exercise #1 (Exercise #1 should return a single number - the greatest number in the list).

// var arreglo_1 = [1,2,3,4,5];
// var arreglo_2 = [45,76,23,8,90];

// function retornar_valor(arreglo_1,arreglo_2){
//     valor_mayor = 0;
//     for(var i = 0;i<arreglo_1.length; i++){
//         if(valor_mayor < arreglo_1[i]){
//             valor_mayor = arreglo_1[i];
//         } 
//         if(valor_mayor < arreglo_2[i]){
//             valor_mayor = arreglo_2[i];
//         }
//         else{
//             valor_mayor = valor_mayor;
//         } 
//     } return console.log("El valor mayor fue: "+valor_mayor);
// }
// retornar_valor(arreglo_1,arreglo_2);


// Exercise #2
// Write a function that:

// Takes in an array of numbers.
// Doubles the value of each number in the array.
// Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

// arreglo_uno = [1, 2, 4, 5,87,35];

// function multiplicar_arrays(arreglo_uno){
//     var arreglo_nuevo = [];
//     for(i = 0; i<arreglo_uno.length; i++){

//         arreglo_nuevo [i]= arreglo_uno[i]*2;
//     } 
//     return console.log(arreglo_nuevo);
// }
// multiplicar_arrays(arreglo_uno);

// Exercise #3
// Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.

// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

// var arreglo = [2,4,6,8,10];

// function devolver(arreglo){
//     suma_arreglo = 0;
//     producto_arreglo = 1;

//     for( var i = 0; i < arreglo.length; i++){
//         suma_arreglo = suma_arreglo + arreglo[i];
//         producto_arreglo = producto_arreglo * arreglo[i];
//     }
//     return console.log("La suma del arreglo es: "+suma_arreglo),console.log("El producto del arreglo es: "+producto_arreglo);
// }

// devolver(arreglo);

// Exercise #4
// var student1Courses = ['Math', 'English', 'Programming'];
// var student2Courses = ['Geography', 'Spanish', 'Programming'];
// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

// var student1Courses = ['david','Math', 'English', 'Programming','Spanish'];
// var student2Courses = ['Geography', 'Spanish', 'Programming','david','silva'];

// function elementos(arreglo1,arreglo2){
// var arreglo = [];
//     for(var i = 0; i<arreglo1.length; i++){
//         for(var y = 0; y < arreglo2.length; y++){
//             if(arreglo1[i] === arreglo2[y]){
//                 arreglo.push(arreglo1[i]);
//             }
//         }
//     } 
//     return console.log(arreglo);
// }

// elementos(student1Courses,student2Courses);


// Exercise #5
// For each of the exercises below, assume you are starting with the following people array.

// var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Write a command that prints out all of the people in the list.
// Write the command to remove "Dani" from the array.
// Write the command to remove "Juan" from the array.
// Write the command to add "Luis" to the front of the array.
// Write the command to add your name to the end of the array.
// Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
// Write the command that gives the indexOf where "Maria" is located.
// At the end of the exercise, there should be 4 people in the array.

// var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// console.log(people);
// people.splice(1,1);
// console.log(people);

// people.splice(2,1); //SPLICE(elemento_a_eliminar,cuantos elementos)
// console.log(people); 

// people.unshift("Luis");
// console.log(people);

// people.splice(2,1); //SPLICE(elemento_a_eliminar,cuantos elementos)
// console.log(people); 

// people.push("David");
// console.log(people);

// for(var i = 0; i < people.length; i++){
//     console.log(people[i]);
//     if (people[i] === 'Maria'){
//         i = 100;
//     }
// }

// valor = people.indexOf("Maria");
// console.log("\nMaria esta en el indice: "+valor);

// console.log(people);

// Exercise #1
// Write a program to sort a list of names alphabetically.

// var people = ["Zapata","Maria", "Dani", "Luis", "Juan", "Camila"];
// valor = people.sort();
// console.log(valor);

// Create a function that compares the 3 arrays and finds any common elements. Print out the common elements.

// var values1= ['Apple', 1, false];
// var values2 = ['Fries', 2 ,true];
// var values3 = ['Mars', 9, 'Apple','apple'];

// function comparar(valor1,valor2,valor3){
//     var arreglo = [];

//     for(i = 0; i < valor1.length; i++){

//         for(y = 0; y < valor2.length; y++){

//             if(valor1[i] === valor2[y]){
//                 arreglo.push(valor1[i]);
//             }

//             for(z = 0; z < valor3.lenght; z++){

//                 if(valor1[i] === valor3[z]){
//                     arreglo.push(valor1[i]);
//                 }
//                 if(valor2[y] ===  valor3[z]){
//                     arreglo.push(valor2[y]);
//                 }
//             }
//         }
//     }
//     return console.log("Los valores repetidos fueron: "+arreglo);
// }
// comparar(values1,values2,values3);