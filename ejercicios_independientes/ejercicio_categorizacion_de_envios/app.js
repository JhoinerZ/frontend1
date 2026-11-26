/*Instrucciones: La célula de Logística requiere clasificar las cajas por peso para asignar el vehículo correcto. Menos de 5kg: "Moto". Entre 5kg y 20kg: "Camioneta". Más de 20kg: "Camión". Si el peso es 0 o negativo, imprimir "Peso inválido".*/
const PESOPAQUETE = 12;
let vehiculos_disponibles = ["Moto", "Camioneta", "Camión"];
if(PESOPAQUETE >= 1 && PESOPAQUETE <= 5){
    alert(`El vehiculo asignado es ${vehiculos_disponibles[0]}`)

}else if(PESOPAQUETE >= 5 && PESOPAQUETE <= 20){
    alert(`El vehiculo asignado es ${vehiculos_disponibles[1]}`)
}else if(PESOPAQUETE > 20){
    alert(`El vehiculo asignado es ${vehiculos_disponibles[2]}`)
}else if(PESOPAQUETE<=0){
    alert("Peso invalido")
}