let titulo = document.getElementById("titulo")
console.log(titulo)

let parrafo = document.getElementById("parrafo")
console.log(parrafo)

const cambio = () => {

titulo.innerHTML = "titulo cambiado"
parrafo.innerHTML = "parrafo cambiado"

}

boton.addEventListener("click", cambio)