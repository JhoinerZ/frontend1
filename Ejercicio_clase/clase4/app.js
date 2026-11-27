/* Crear una funcion, que reciba un parametro he imprima la tabla de multiplicar de ese numero */
let numero_ingresado = parseInt(prompt("Ingrese el numero el cual quieres obtener la tabla de multiplicar"))
tablaMultiplicar(numero_ingresado)
function tablaMultiplicar(numero){
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${i * numero}`);
    }
}