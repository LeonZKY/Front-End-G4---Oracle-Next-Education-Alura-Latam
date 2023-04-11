export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
  
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo nombre no puede estar vacio",
    },
    email: {
        valueMissing: "Este campo email no puede estar vacio.",
        typeMismatch: "El correo no es valido.",
    },
    password: {
        valueMissing: "Este campo password no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, maximo 12, debe contener una letra minuscula, una mayuscula, un numero, y no puede contener caracteres especiales",
    },
    nacimiento: {
        valueMissing: "Este campo nacimiento no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad.",
    },
    numero: {
        valueMissing: "Este campo numero no puede estar vacio",
        patternMismatch: "El formato requerido es xxxxxxxxx 10 numeros.",
    },
    direccion: {
        valueMissing: "Este campo numero no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 a 40 caracteres.",
    },
    ciudad: {
        valueMissing: "Este campo numero no puede estar vacio",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres.",
    },
    estado: {
        valueMissing: "Este campo numero no puede estar vacio",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
    },
};

const validadores = {
    nacimiento: (input) => validarNacimiento(input)
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = " ";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje
};


function validarNacimiento(input) {
    const fechaIngresada = new Date(input.value);
    let mensaje = " ";
    if(!mayorDeEdad(fechaIngresada)) {
        mensaje = "Debes tener al menos 18 años de edad.";
    };

    input.setCustomValidity(mensaje);
};

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
};

