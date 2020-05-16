// Array o arreglo
//              0       1       2           3 
var colores = ["azul", "rojo", "amarillo", "verde"]
console.log(colores)
console.log(colores[0])



colores[4] = "Morado"
console.log(colores)

colores.push("rosa")
console.log(colores)

// pop ----------> Borra el ultimo elemento

colores.pop()
// splice---------> borra un elemento especifico
colores.splice(2,1)
console.log(colores)
// posicion, elementoa borrar, sustituir
colores.splice(2, 1, "cafe")
// objetos
var persona = {
    nombre : "Ricardo",
    ed : "18",
    telefono : "9992348850",
    direccion : "CDMX",
    musica : ["rock", "reggaeton", "salsa"],
    peliculas : {
        accion : ["M1", "Ronning"],
        drama : ["Titanic", "Match point"],
        terror : {
            gore : ["Destino Final"],
            slasher : ["Halloween"],
        }
    }
}
console.log(persona.telefono)
console.log(persona.peliculas.terror.slasher [0])

    