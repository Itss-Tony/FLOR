// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Un largo tiempo escondido", time: 12 },
  { text: "Tráenos de vuelta", time: 19 },
  { text: "Donde quiera que estés", time: 24 },
  { text: "El final siempre eres tú", time: 30 },
  { text: "'Cause I'm falling slowly love with you", time: 37 },
  { text: "Tan esperado,Tú eres primavera ", time: 43 },
  { text: "'Cause I'm falling slowly love with you", time: 50 },
  { text: "Incluso si se borra de nuevo", time: 56 },
  { text: "Toda mi vida eres tú", time: 60 },
  { text: "En la historia te llamé", time: 80 },
  { text: "Estoy soñando otra vez", time: 87 },
  { text: "No importa el momento que llegue", time: 93 },
  { text: "Iré a buscarte", time: 99 },
  { text: "'Cause I'm falling slowly love with you", time: 105 },
  { text: "Tan esperado, Eres primavera", time: 112 },
  { text: "'Cause I'm falling slowly love with you", time: 118 },
  { text: "Incluso si se borra de nuevo", time: 124 },
  { text: "Toda mi vida eres tú", time: 126 },
  { text: "En el camino blanco donde volaban ", time: 135 },
  { text: "los pétalos de las flores", time: 136 },
  { text: "Tú y yo éramos felices", time: 139 },
  { text: "Si pudiéramos encontrarnos de nuevo", time: 145 },
  { text: "'Cause I'm falling slowly love with you", time: 154 },
  { text: "Tan esperado, Eres primavera", time: 161 },
  { text: "'Cause I'm falling slowly love with you", time: 167 },
  { text: "Incluso si se borra de nuevo", time: 174 },
  { text: "Toda mi vida eres tú", time: 177 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);