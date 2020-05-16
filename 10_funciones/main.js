function saludo (){
console.log("hola")
}
saludo ()

function suma (a, b){
    console.log(a + b)
}

console.log(suma(5, 9))


// arrow function

let despedida = "Bye"
console.log(despedida)
despedida = 10

console.log(despedida)


// var constante
const numero1 = 15
console.log(numero1)

function suma (a, b){
    return(a + b)


}

const multiplicacion = (x , y ) => {
    return x * y
}
multiplicacion(10 , 5)
console.log(multiplicacion(10, 5))

// cuadrado
const cuadrado = (x, y) => {
    return x * y
}
cuadrado (5, 5)
console.log(cuadrado(5, 5))

const rectangle = (b, h) => {
    return b * h
}
rectangle (6, 8)
console.log(cuadrado(6, 8))

const triangle = (w, u) => {
    return (w * u)/2
}
triangle(5, 3)
console.log(triangle(5, 3))


