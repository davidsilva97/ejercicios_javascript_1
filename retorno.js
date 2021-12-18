function cuadrado(a){ //parametro "a"
    return a*a; //Retorno de una funcion
}
function nombre(){
    return("David"); //Se puede retornar un STRING sin declarar un atributo
}

//Funcion con parametros y concatenacion
function nombre_completo(nombre,apellido){
    return ("Bienvenido "+nombre+" "+apellido)
}

//Funcion que retorna nombre, apellido, edad, cuadrado de la edad.

function ejercicio(nombre,apellido,edad,cuadrado){
    cuadrado = edad*edad;
    return ("Hola "+nombre+" "+apellido+" tu edad es de: "+edad+" el cuadrado de tu edad es: "+cuadrado);
}

//Funcion con parametros asignados
function ejercicio2(nombre = "David",apellido = "Silva",edad = 24){
    return("Hola "+nombre+" "+apellido+" tu edad es: "+edad+" "+(edad*edad));
}

//Funcion invocada inmediatamente --IIFEs OSEA que se llama automaticamente, siempre se ejecuta.
(function(){
    console.log("David Silva");
})();

//Funcion invocada inmediatamente --IIFEs Con parametros
(function(apellido){
    console.log("David Silva"+apellido);
})(" Alvarez");

console.log(ejercicio2());
console.log(ejercicio("David","Silva",24));
console.log(nombre_completo("David","Silva"))
console.log(nombre());
console.log(cuadrado(2));
console.log(cuadrado(3));
console.log(cuadrado(4));