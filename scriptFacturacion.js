// Funcionalidad del formulario de facturación
document.getElementById('facturaForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtiene los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const producto = document.getElementById('producto').value;
  const cantidad = document.getElementById('cantidad').value;

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
  // Selecciona todos los campos de texto y botones
  const camposTexto = document.querySelectorAll('#facturaForm input, #facturaForm select, #facturaForm button');
  
  // Deshabilita los campos
  camposTexto.forEach(campo => campo.disabled = true);

  // Opcional: Agrega un mensaje de "Tiempo Expirado"
  mensajeExpirado = document.createElement('p');
  mensajeExpirado.textContent = "El tiempo ha expirado. Ya no puedes hacer cambios.";
  mensajeExpirado.style.color = "red";
  document.getElementById('facturaForm').appendChild(mensajeExpirado);
}

// Función para habilitar los campos de texto
function habilitarCampos() {
  // Selecciona todos los campos de texto y botones
  const camposTexto = document.querySelectorAll('#facturaForm input, #facturaForm select, #facturaForm button');
  
  // Habilita los campos
  camposTexto.forEach(campo => campo.disabled = false);

  // Elimina el mensaje de "Tiempo Expirado" si existe
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
