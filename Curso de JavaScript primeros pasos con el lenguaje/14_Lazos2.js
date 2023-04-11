const datos = [
    {
        'ciudad':'Bogota',
        'precio': 500,
    },
    {
        'ciudad':'Lima',
        'precio': 400,
    },
    {
        'ciudad':'Santiago',
        'precio': 380,
    },
    {
        'ciudad':'Montevideo',
        'precio': 200,
    },
];

const presupuestoDisponible =400;

let i = 0;

/* 
while((i < datos.length) && datos[i].precio >= presupuestoDisponible) {
    i++;
}
*/
let ciudadSeleccionada = ' ';

do {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        /* 
        break; 
        //PARA SI CUMPLE CON LA CONDICION DIRECTAMENTE SALGA SIN EVALUAR SI HAY OTRAS OPCIONES VIABLES
        */
    }
    i++;
} while (i < datos.length && ciudadSeleccionada == ' ');


if (ciudadSeleccionada == ' ') {
    console.log("No tenemos pasajes disponibles ");
}else{
    console.log("Puedes comprar pasaje para: "+ciudadSeleccionada);
}