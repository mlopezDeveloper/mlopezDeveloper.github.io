let baslik = document.title;
window.onblur = () => (document.title = "Te sigo viendo...");
window.onfocus = () => (document.title = "Portafolio");

/*const nav = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            nav.classList.add('barra-color');
        } else {
            nav.classList.remove('barra-color');
        }
    });*/

// Obtenemos la imagen y el botón

const typed = new Typed(".typed", {
  strings: [
    '<i class="rama_dev">de bases de datos.</i>',
    '<i class="rama_dev">Frontend.</i>',
  ],
  stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "|", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
}); //nueva instancia de Typed(); //clase typed
