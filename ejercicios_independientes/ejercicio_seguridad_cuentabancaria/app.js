/* Vamos a construir el módulo de bloqueo de seguridad para una cuenta bancaria (Branch: feature/seguridad-login). El usuario tiene exactamente 3 intentos para ingresar la contraseña correcta ("admin123"). Si acierta, ingresa. Si falla 3 veces, el sistema se bloquea. */

const CONTRASEÑA_GUARDADA = "admin123";
let intentos = 3;
do {
    let contraseña_ingresada = prompt("Ingrese la contraseña para el ingreso");
    if(contraseña_ingresada === CONTRASEÑA_GUARDADA){
        alert("Bienvenido al sistema")
        break
    }else{
        intentos--
        alert(`Contraseña incorrecta te quedan ${intentos} intentos.`)
    }
} while (intentos != 0);
if(intentos === 0){
    alert("Sitema bloqueado, comuniquese con soporte")
}