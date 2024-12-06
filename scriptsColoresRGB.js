const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//Actualizar el texto de los parrafos.
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Para actualizar Red (Rojo).
inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Green (Verde).
inputVerde.addEventListener('change', (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul).
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});

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