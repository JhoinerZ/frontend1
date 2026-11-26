/* Valida el ingreso de un usuario verificando primero su contraseña y luego un código SMS. Si la contraseña falla, indica "Credenciales incorrectas". Si la contraseña es correcta pero el código SMS no coincide, indica "Fallo en validación 2FA". Solo aprueba si ambos coinciden. */

const CONTRASEÑA_USUARIO_REGISTRADO = "front1";
const CODIGO_SMS_ENVIADO = 586932;
let nombre_usuario = prompt("Ingrese el nombre de usuario");
let contraseña_ingresada = prompt("Ingrese la contraseña para ingresar al sistema");

if(contraseña_ingresada === CONTRASEÑA_USUARIO_REGISTRADO){
    let codigo_sms_ingresado = parseInt(prompt("Le hemos enviado un SMS a su dispositivo ingrese el numero de 6 digitos que allí aparece"));

    if(codigo_sms_ingresado === CODIGO_SMS_ENVIADO){
        alert(`Bienvenido al sistema ${nombre_usuario}`)
    }else{
        alert("Fallo en validación 2FA, intentelo de nuevo")
    }
}else{
    alert("Credenciales incorrectas")
}
