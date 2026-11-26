let roles = ["ADMIN", "CREADOR", "ESPECTADOR"];
let pagoAlDia = true;
switch (roles[2]) {
    case "ADMIN":
        alert("Acceso total a configuración del sistema")
        break;
    case "CREADOR":
        if(pagoAlDia){
            alert("Acciones de edición habilitadas");
        }else{
            alert("Cuenta suspendida. Por favor, renueve su suscripción para editar");
        }
        break;
    case "ESPECTADOR":
        alert("Modo solo lectura activo");
        break;
    default:
        break;
}