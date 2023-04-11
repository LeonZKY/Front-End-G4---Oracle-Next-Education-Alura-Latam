const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);

// Verificamos si el pasajero cumple con las condiciones:

if (ciudadesDisponibles.indexOf(ciudadDestino)  > -1 && edadPasajero >= 18 && tienePasaporte)  {
	console.log(`Pasaje disponible para venta.`);
} else {
	console.log("Ciudad no disponible para viajar o pasajero no cumple con las reglas");
}
