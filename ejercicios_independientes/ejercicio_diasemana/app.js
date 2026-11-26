/* El módulo de agenda necesita recibir un número del 1 al 7 y devolver el nombre del día correspondiente usando un switch. Si el número no está en ese rango, devolver "Día inexistente". */

const dia_semana = parseInt(prompt("Ingresa el numero del dia"));
switch (dia_semana) {
    case 1:
        alert("LUNES");
        break;
    case 2:
        alert("MARTES");
        break;
    case 3: 
        alert("MIERCOLES");
        break;
    case 4: 
        alert("JUEVES");
        break;
    case 5: 
        alert("VIERNES");
        break;
    case 6: 
        alert("SABADO");
        break;
    case 7: 
        alert("DOMINGO");
        break;

    default:
        alert("Este dia no existe")
        break;
};
