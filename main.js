let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contraseña = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);


    if (isNaN(numeroDigitado) || numeroDigitado < 8 || numeroDigitado > 32) {
        alert("La cantidad de caracteres debe estar entre 8 y 32.");
        return;
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contraseña.value = password;
    validarContraseña(password);
}


function limpiar() {
    contraseña.value = '';
    mensaje.textContent = '';
}


function validarContraseña(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password);

    if (tieneMayuscula && tieneNumero && tieneEspecial) {
        mensaje.textContent = 'Contraseña fuerte';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Contraseña débil: debe incluir al menos una mayúscula, un número y un carácter especial.';
        mensaje.style.color = 'red';
    }
}
