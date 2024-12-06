// Array de citas
const quotes = [
    "La vida es lo que sucede mientras estás ocupado haciendo otros planes. – John Lennon",
    "El único modo de hacer un gran trabajo es amar lo que haces. – Steve Jobs",
    "La felicidad no es algo hecho. Viene de tus propias acciones. – Dalai Lama",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. – Albert Schweitzer",
    "No cuentes los días, haz que los días cuenten. – Muhammad Ali",
    "La mejor manera de predecir el futuro es inventarlo. – Alan Kay",
    "Sé tú el cambio que deseas ver en el mundo. – Mahatma Gandhi",
    "La única limitación es la que te impones a ti mismo.",
    "No esperes. El tiempo nunca será justo. – Napoleon Hill",
    "El fracaso es la oportunidad de comenzar de nuevo de manera más inteligente. – Henry Ford"
  ];
  
  // Función para obtener una cita aleatoria
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Función para mostrar una cita en el HTML
  function displayQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getRandomQuote();
  }
  
  // Evento para el botón
  document.getElementById('new-quote').addEventListener('click', displayQuote);
  
  // Mostrar una cita al cargar la página
  window.onload = displayQuote;
  