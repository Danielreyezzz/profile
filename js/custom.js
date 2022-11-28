//Mostrar skills
function mostrar() {
        let barras = document.getElementById('skillbars');
        let boton = document.getElementById('boton')
        if (boton.getAttribute('activated') == null) {
            barras.removeAttribute("hidden");
            boton.setAttribute('activated', 'true');
            boton.innerHTML = 'Cerrar Skills';
        }else{
            boton.removeAttribute('activated');
            barras.setAttribute('hidden', 'true')
            boton.innerHTML = 'Abrir Skills'
        }
       
    }

//Focus y blur
let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", () => inputs[i].classList.add("focus"));
    inputs[i].addEventListener("blur", () => inputs[i].classList.remove("focus"));
}



    



//Validaciones
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos")
let empresa = document.getElementById("empresa");
let direccion = document.getElementById("direccion")
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let motivo = document.getElementById("motivo");

nombre.addEventListener("input", function (event) {
  if (nombre.validity.tooLong || nombre.validity.tooShort) {
    nombre.setCustomValidity("¡Tamaño de nombre no valido! Por favor, vuelva a introducirlo");
  } else {
    nombre.setCustomValidity("");
  }
});

apellidos.addEventListener("input", function (event) {
    if (apellidos.validity.tooLong || apellidos.validity.tooShort) {
      nombre.setCustomValidity("¡Tamaño de apellidos no valido! Por favor, vuelva a introducirlo");
    } else {
      nombre.setCustomValidity("");
    }
  });

  empresa.addEventListener("input", function (event) {
    if (empresa.validity.tooLong || empresa.validity.tooShort) {
      empresa.setCustomValidity("¡Tamaño de nombre de empresa no valido! Por favor, vuelva a introducirlo");
    } else {
      empresa.setCustomValidity("");
    }
  });

  direccion.addEventListener("input", function (event) {
    if (direccion.validity.tooLong || direccion.validity.tooShort) {
      direccion.setCustomValidity("¡Tamaño de dirección no valido! Por favor, vuelva a introducirla");
    } else {
      direccion.setCustomValidity("");
    }
  });

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("¡Formato de email no válido! Por favor, vuelva a introducirlo");
    } else {
      email.setCustomValidity("");
    }
  });

  telefono.addEventListener("input", function (event) {
    if (telefono.validity.rangeOverflow || telefono.validity.rangeUnderflow) {
      telefono.setCustomValidity("¡El teléfono debe contar con 9 números! Por favor, vuelva a introducirlo");
    } else {
      telefono.setCustomValidity("");
    }
  });
  
  motivo.addEventListener("input", function (event) {
    if (motivo.validity.tooLong || motivo.validity.tooShort) {
      motivo.setCustomValidity("¡Tamaño de mensaje no valido! Por favor, vuelva a introducirla");
    } else {
      motivo.setCustomValidity("");
    }
  });





 