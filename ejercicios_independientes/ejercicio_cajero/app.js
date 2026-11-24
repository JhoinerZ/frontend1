const PIN = 1234;
let saldoCuenta = 1350000
let pinIngresado = parseInt(prompt("Ingrese el pin para poder ingresar"));
if(pinIngresado === PIN){
    alert("Bienvenido al sistema");
    let montoARetirar = parseFloat(prompt("Ingrese el monto a retirar"));
    saldoCuenta =  saldoCuenta - montoARetirar ;
    alert(`El monto a sido retirado correctamente: ${montoARetirar} \nEl saldo restante es: ${saldoCuenta}`)
}else{
    alert("El pin es incorrecto")
}