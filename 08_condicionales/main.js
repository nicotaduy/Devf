// alert("hola")
// // Estructura Básica

// if(condition)
// Bloque de codigo si la condicion se cumple

// {else}
// Bloque de codigo si no se cumple la condicion
// //

// let pregunta = Number(prompt("ingrese su numero"))

// if(pregunta % 2=== 0 ) {
//     console.log(pregunta+" "+"es par")
// }
//     else if( pregunta % 2 === 1){console.log(pregunta+" "+ "es impar")
// }else{
//     alert("datos incorrectos")

let edad = Number(prompt("Ingresa tu edad"))

if(edad >= 18 && edad <=80){
    console.log("puedes conducir")
}
else if (edad >= 16 || edad < 18 ){
    console.log("puedes tramitar tu permiso")
}
else if (edad > 0  || edad < 16 || edad > 80 ){
    console.log("no puedes conducir")}
else {
    console.error("datos incorrectos")
}

