alert ("Piedra, Papel o Tijera ")


let jugador1 = prompt("Jugador 1, Ingrese su Jugada").toLowerCase()

let jugador2 = prompt("Jugador 2, Ingrese su Jugada").toLowerCase()

let a = "piedra"
let c = "tijera"
let b = "papel"
// pasar a minúsculas



// pasar a Mayusculas

if(jugador1 === a  && jugador2 === a) {
    console.log("Es empate")
}

else if(jugador1 === b  && jugador2 === b) {
    console.log("Es empate")
}
else if(jugador1 === c  && jugador2 === c) {
    console.log("Es empate")
}

else if(jugador1 === a  && jugador2 === b) {
    console.log("gana jugador 2")
}

else if(jugador1 === b  && jugador2 === a) {
    console.log("gana jugador 1")
}

else if(jugador1 === a  && jugador2 === c) {
    console.log("gana jugador 1")
}
else if(jugador1 === c  && jugador2 === a) {
    console.log("gana jugador 2")
}
else if(jugador1 === b  && jugador2 === c) {
    console.log("gana jugador 2")
}

else if(jugador1 === c  && jugador2 === b) {
    console.log("gana jugador 1")
}




