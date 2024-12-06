// Funcionalidad del formulario de facturación
document.getElementById('facturaForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtiene los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const productoSeleccionado = document.getElementById('producto').value;
  const nuevoProducto = document.getElementById('nuevoProducto').value.trim();
  const cantidad = document.getElementById('cantidad').value;

  // Usa el nuevo producto si se escribió uno
  const producto = productoSeleccionado === 'otro' && nuevoProducto ? nuevoProducto : productoSeleccionado;

  // Crea una nueva fila en la tabla
  const tabla = document.getElementById('facturaTable').getElementsByTagName('tbody')[0];
  const nuevaFila = tabla.insertRow();

  // Crea las celdas y las agrega a la fila
  const celdaNombre = nuevaFila.insertCell(0);
  const celdaProducto = nuevaFila.insertCell(1);
  const celdaCantidad = nuevaFila.insertCell(2);

  celdaNombre.textContent = nombre;
  celdaProducto.textContent = producto;
  celdaCantidad.textContent = cantidad;

  // Limpia el formulario
  this.reset();
  document.getElementById('nuevoProducto').style.display = 'none'; // Oculta el campo "nuevoProducto" si estaba visible
});

// Manejar la selección de "Otro" en el campo producto
document.getElementById('producto').addEventListener('change', function () {
  const nuevoProductoInput = document.getElementById('nuevoProducto');
  if (this.value === 'otro') {
    nuevoProductoInput.style.display = 'inline'; // Muestra el campo de texto
    nuevoProductoInput.required = true; // Hace obligatorio el campo si se selecciona "Otro"
  } else {
    nuevoProductoInput.style.display = 'none'; // Oculta el campo de texto
    nuevoProductoInput.required = false; // Lo hace opcional de nuevo
    nuevoProductoInput.value = ''; // Limpia el campo si no está en uso
  }
});

// Funcionalidad del cronómetro
let tiempoRestante = 60; // 1 minuto para el cronómetro
let cronometroIntervalo;
let mensajeExpirado;

function iniciarCronometro() {
  // Actualiza el cronómetro cada segundo
  cronometroIntervalo = setInterval(function() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    // Actualiza el cronómetro en la página
    document.getElementById('cronometro').textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    // Decrementa el tiempo restante
    if (tiempoRestante > 0) {
      tiempoRestante--;
    } else {
      clearInterval(cronometroIntervalo); // Detiene el cronómetro cuando llega a 0
      deshabilitarCampos(); // Llama a la función para deshabilitar los campos
    }
  }, 1000);
}

function pausarCronometro() {
  clearInterval(cronometroIntervalo); // Pausa el cronómetro
}

function reiniciarCronometro() {
  tiempoRestante = 60; // Reinicia el tiempo a 1 minuto
  document.getElementById('cronometro').textContent = "1:00";
  habilitarCampos(); // Habilita los campos nuevamente
  iniciarCronometro(); // Vuelve a iniciar el cronómetro
}

// Función para deshabilitar los campos de texto
function deshabilitarCampos() {
  const camposTexto = document.querySelectorAll('#facturaForm input, #facturaForm select, #facturaForm button');
  camposTexto.forEach(campo => campo.disabled = true);

  // Agrega un mensaje de "Tiempo Expirado"
  mensajeExpirado = document.createElement('p');
  mensajeExpirado.textContent = "El tiempo ha expirado. Ya no puedes hacer cambios.";
  mensajeExpirado.style.color = "red";
  document.getElementById('facturaForm').appendChild(mensajeExpirado);
}

// Función para habilitar los campos de texto
function habilitarCampos() {
  const camposTexto = document.querySelectorAll('#facturaForm input, #facturaForm select, #facturaForm button');
  camposTexto.forEach(campo => campo.disabled = false);

  if (mensajeExpirado) {
    mensajeExpirado.remove();
  }
}

// Inicia el cronómetro automáticamente cuando la página se carga
iniciarCronometro();

// Eventos para controlar el cronómetro
document.getElementById('boton-inicio-pausa').addEventListener('click', iniciarCronometro);
document.getElementById('boton-pausar').addEventListener('click', pausarCronometro);
document.getElementById('boton-reiniciar').addEventListener('click', reiniciarCronometro);

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdown.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
    if (dropdownContent.classList.contains('show')) {
      window.scrollTo({
        top: dropdownContent.offsetTop,
        behavior: 'smooth'
      });
    }
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      dropdownContent.classList.remove('show');
    }
  });
});