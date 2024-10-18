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
