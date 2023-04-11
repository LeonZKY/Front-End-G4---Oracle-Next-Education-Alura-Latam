const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
// Verificamos si el pasajero cumple con las condiciones:
if (edadPasajero >= 18 || estaAcompanado)  {
// Evaluamos si la ciudad esta disponible para viajar
	if (ciudadesDisponibles.indexOf(ciudadDestino)  > -1)  {
		console.log(`Pasaje disponible para venta.`);
	} else {
		console.log("Ciudad no disponible para viajar");
	}
} else {
		console.log("Pasajero no cumple con las reglas");
}