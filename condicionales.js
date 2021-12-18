//Sintaxis EJEMPLO IF
/* var edad = 18;

 if(edad >= 18){
     console.log("Puedes ingresar :D");
 } else{
     console.log("Acceso denegado");
 }*/

 /*Write a program where a user enters the number of tasks they have completed. The program returns one of the following labels to the console:
**Failed**
**Insufficient**
**Good**
**Excellent**
**Error**
based on the conditions:

Failed if they scored 6 or less
Insufficient if they scored > 6 but less than 9 (9 included)
Good if they scored > 9 but less than 14 (14 included)
Excellent if they scored 15
Error if participants enter a negative number or a number outside the range supported (outside 0 - 15)*/

/*tareas = parseInt(prompt("Ingresa el numero de tareas realizadas: "));
if(tareas <= 6 && tareas >= 0){
    alert("Failed");
}
else if(tareas >6 && tareas <= 9){
    alert("Insufficient");
}
else if(tareas>9 && tareas <=14){
    alert("Good");
}
else if(tareas == 15){
    alert("Excellent");
}
else if(tareas <0 || tareas >15){
    alert("Error");
}*/

// Open a repl.it Javascript page and call it Algorithms Introduction Exercise 2.
// Write an algorithm to find the largest among 5 different numbers entered by the user.
// Print out the largest number to the console.


// function mayor(){
//     numeros = [];
//     numero_mayor = 0;
//     for(contador = 0;contador<5;contador++){
//         numeros.push(parseInt(prompt((contador+1)+".Ingresa un numero: ")));

//         if(numeros[contador]>numero_mayor){
//             numero_mayor = numeros[contador];
//         }
//     }
//     return ("El numero mayor es: "+numero_mayor);
// }
// mayor();

// Part 3
// Open a repl.it Javascript page and call it Algorithms Introduction Exercise 3.
// We have 3 items and we know the price for each. However, we can only buy the two least expensive items.
// Write an algorithm that takes in three user inputs and outputs the two smallest prices to the console.
function partThree(){ 

let num = []; 
    
let menor1=0,menor2=0; 
    
     
    
for(let i=0 ; i<3 ; i++){ 
    num.push(parseInt(prompt("What is the price of the " + (i+1) + " item ?"))); 
    console.log(num[i]); 
    comp=num[i];  
    
    if(i==0){ 
     menor1=num[i]; 
    }else if(i==1){ 
    menor2=num[i]; 
    }else{ 
    if(comp < menor1 && comp > menor2){ 
     menor1=comp; 
    } 
    else if (comp > menor1 && comp < menor2){ 
     menor2=comp; 
    } 
    else if(comp < menor1 && comp < menor2){ 
     if(menor1<menor2){ 
    menor2=comp; 
    } 
    else{ 
     menor1=comp;  
    }  
    }  
    }   
    }   
    console.log("The  2 lowest priced items were $" + menor1 + " and $" + menor2);   
    }  
    partThree(); 