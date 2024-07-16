
//Import Modulo Menu.js Funcional 13/07/2024
document.addEventListener('DOMContentLoaded', () => {
    MenuModule.initMenu();
    GeneralModule.initNiceScroll();
    GeneralModule.initSoundLoadingHandler();
});


// Inicializar niceScroll en el contenido de las composiciones
//$("#composiciones .contenido").niceScroll({ cursorcolor: "#00F", autohidemode: 'hover' });

// Manejador para cargar el sonido del acordeón
document.body.addEventListener('cargando-sonidos', ({ detail }) => {
    const appContainer = document.getElementById("app-container");
    if (detail) {
        appContainer.classList.add("cargando");
    } else {
        appContainer.classList.remove("cargando");
    }
}, true);

let composiciones = [];
const defaultCompositions = canciones;

// Función para cargar las composiciones
function cargarComposiciones() {
    const contenido = $("#composiciones .contenido").empty();

    // Fusionar composiciones predeterminadas con las de almacenamiento local
    composiciones = [
        ...defaultCompositions,
        ...Object.keys(localStorage).filter(key => key.includes("acordeon")).map(key => ({
            nombre: key.split('-')[1],
            cancion: JSON.parse(localStorage.getItem(key))
        }))
    ];

    // Generar los elementos de la interfaz para las composiciones
    composiciones.forEach((composicion, index) => {
        contenido.append(`
            <div class="composicion">
                <span class="nombre" title="${composicion.nombre}">${composicion.nombre}</span>
                <div class="acciones">
                    <button class="practicar" data-index="${index}">Iniciar</button>
                </div>
                <div class="progreso">
                    <div class="porcentaje"></div>
                </div>
            </div>
        `);
    });
}

// Función para liberar las teclas después de la reproducción
function liberarTeclas(cancion) {
    cancion.forEach(nota => {
        const eventoTecla = new KeyboardEvent('keyup', { 'key': nota.tecla });
        document.dispatchEvent(eventoTecla);
    });
}

// Función para manejar la reproducción de examen
$("body").on("click", ".acciones .reproducir", function () {
    const ele = this;
    const composicion = composiciones[ele.dataset.index];
    const duracion = composicion.cancion.sort((a, b) => a.inicio - b.inicio);
    const duracionTotal = duracion[duracion.length - 1].inicio + duracion[duracion.length - 1].duracion;
    const porcentaje = $(ele).closest(".composicion").find(".progreso .porcentaje");

    porcentaje.css({ 'animation-duration': duracionTotal + 'ms' }).addClass("animar-porcentaje");

    // Liberar teclas al finalizar la reproducción
    setTimeout(() => liberarTeclas(composicion.cancion), duracionTotal);

    Acordeon.reproducir(composicion.cancion);
});



//-------------------- Proceso de la evaluación -----------------------
// Inicializar intentos restantes


// Click iniciar examen
$("body").on("click", ".acciones .practicar", function() {
    let ele = this;
    let isTerminar = $(ele).text() === "Terminar"; // Verificar si el botón está en estado "Terminar"

    if (isTerminar) {
        // Acciones para finalizar la evaluación
        terminarExamen(ele);
    } else {
        // Acciones para iniciar el examen
        iniciarExamen(ele);
    }
});


// Función para iniciar el examen
function iniciarExamen(ele) {
    const composicion = composiciones[ele.dataset.index];
    const duracion = composicion.cancion.sort((a, b) => a.inicio - b.inicio);
    const duracionTotal = duracion[duracion.length - 1].inicio + duracion[duracion.length - 1].duracion;
    const porcentaje = $(ele).closest(".composicion").find(".progreso .porcentaje");

    let intentosRestantes = parseInt(localStorage.getItem('intentosRestantes')) || 4;

     // Decrementar intentos restantes
    intentosRestantes--;
    localStorage.setItem('intentosRestantes', intentosRestantes);

    function mostrarMensajeIntento() {
       if (intentosRestantes > 0) {
            const intentoActual = 4 - intentosRestantes;
            const mensajeIntento = intentosRestantes > 1 ? `Te quedan ${intentosRestantes - 1} intentos` : 'Este es tu último intento';
            Swal.fire({
            title: `Intento ${intentoActual}`,
            text: mensajeIntento,
            icon: "info",
            showConfirmButton: true,
            confirmButtonText: 'Comenzar',
            allowOutsideClick: false,
            showClass: { popup: 'animated fadeInDown faster' },
            hideClass: { popup: 'animated fadeOutUp faster' }
            }).then((result) => {
            if (result.isConfirmed) {
                Acordeon.grabar();
                porcentaje.css({ 'animation-duration': duracionTotal + 'ms' }).addClass("animar-porcentaje");
                $(ele).text("Terminar");
                iniciarTemporizador(ele, duracionTotal);
            }
            });
        } else {
            Swal.fire({
            title: '¡Sin intentos disponibles!',
            text: 'Debes esperar 5 minutos antes de intentarlo de nuevo.',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false
            });
            mostrarMensajeNoMasIntentos();
        }
        
    }

    mostrarMensajeIntento();
}

// Función para mostrar mensaje de no más intentos
function mostrarMensajeNoMasIntentos() {
    Swal.fire({
      title: '¡Sin intentos disponibles!',
      text: 'Debes esperar 5 minutos antes de intentarlo de nuevo.',
      icon: 'warning',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then(() => {
      // Bloquear el botón
      $(".acciones .practicar").prop("disabled", true).addClass("disabled");
  
      // Iniciar el cronómetro de 5 minutos
      let tiempoRestante = 100; // 5 minutos en segundos
      const cronometroInterval = setInterval(() => {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;
        const cronometroElement = document.getElementById("cronometro");
        cronometroElement.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  
        tiempoRestante--;
  
        if (tiempoRestante < 0) {
          clearInterval(cronometroInterval);
          $(".acciones .practicar").prop("disabled", false).removeClass("disabled");
          cronometroElement.textContent = "00:00";
          // Actualizar la página
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      }, 1000);
  
      // Mostrar el cronómetro en la interfaz
      Swal.fire({
        html: `
          <div id="titulo">Esperando 5 minutos para volver a intentarlo...</div>
            <div class="cronometro-container">
              <div class="cronometro-box">
                <div id="cronometro">05:00</div>
              </div>
            </div>
          `,
        showConfirmButton: false,
        allowOutsideClick: false,
        customClass: {
          popup: 'custom-swal-message'
        }
      });
    });
}
  
  

// Función para iniciar el temporizador y mostrar el resultado del examen
function iniciarTemporizador(ele, duracion) {
    Swal.fire({
        html: '<div class="countdown">3</div>',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        allowOutsideClick: false,
        customClass: { popup: 'custom-swal-message' },
        willOpen: () => {
            const countdownDiv = document.querySelector('.countdown');
            const timerInterval = setInterval(() => {
                const currentValue = parseInt(countdownDiv.textContent);
                if (currentValue > 1) {
                    countdownDiv.textContent = currentValue - 1;
                } else {
                    clearInterval(timerInterval);
                }
            }, 1000);
        }
    }).then(() => {
        setTimeout(() => {
            const composicion = composiciones[ele.dataset.index];
            const cancion = Acordeon.detenerGrabacion();
            const score = Acordeon.evaluar(composicion.cancion, cancion);
            const porcentaje = $(ele).closest(".composicion").find(".progreso .porcentaje");

            porcentaje.removeClass("animar-porcentaje");
            $(ele).text("Iniciar");

            const mensaje = score >= 60 ? `¡Felicidades! Has pasado el examen con un puntaje del ${score}%.` : `¡Sigue practicando! Obtuviste un puntaje del ${score}%.`;

            Swal.fire({
                title: mensaje,
                icon: score >= 60 ? 'success' : 'warning',
                showConfirmButton: true,
                confirmButtonText: 'Aceptar',
                showClass: { popup: 'animated fadeInDown faster' },
                hideClass: { popup: 'animated fadeOutUp faster' }
            });
        }, duracion + 100);
    });
}

// Función para finalizar el examen
function terminarExamen(ele) {
    const cancion = Acordeon.detenerGrabacion();
    $(ele).text("Iniciar");

    setTimeout(() => {
        const composicion = composiciones[ele.dataset.index];
        const score = Acordeon.evaluar(composicion.cancion, cancion);
        const mensaje = score >= 60 ? `¡Felicidades! Has pasado el examen con un puntaje del ${score}%.` : `¡Sigue practicando! Obtuviste un puntaje del ${score}%.`;

        Swal.fire({
            title: mensaje,
            icon: score >= 60 ? 'success' : 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Aceptar',
            showClass: { popup: 'animated fadeInDown faster' },
            hideClass: { popup: 'animated fadeOutUp faster' }
        });
    }, 1000);
}

// Manejar el clic en el botón para reiniciar la página
$(".reiniciar-pagina").on("click", () => location.reload());

// Función para borrar una composición
$("body").on("click", ".acciones .borrar", function () {
    const composicion = composiciones[this.dataset.index];
    localStorage.removeItem(`acordeon-${composicion.nombre}`);
    cargarComposiciones();
});

// Función para iniciar y detener la grabación
document.getElementById("grabar").onclick = function () {
    if (this.classList.contains("grabar")) {
        Acordeon.grabar();
        this.classList.remove("grabar").add("grabando");
    } else {
        this.classList.remove("grabando").add("grabar");
        const cancion = Acordeon.detenerGrabacion();
        const nombre = prompt("Dale un nombre a tu canción");
        if (nombre) {
            localStorage.setItem(`acordeon-${nombre}`, JSON.stringify(cancion));
            cargarComposiciones();
        }
    }
};

// Función para cambiar las opciones seleccionadas del menú
function cambiarOpcion(elementId, selector, callback) {
    document.getElementById(elementId).onclick = function () {
        document.querySelectorAll(selector).forEach(e => e.classList.remove("seleccionada"));
        callback();
        this.classList.add('seleccionada');
    };
}

cambiarOpcion("tono-adg", "#cambiar-tono .opcion", () => Acordeon.cambiarTono('ADG'));
cambiarOpcion("tono-5l", "#cambiar-tono .opcion", () => Acordeon.cambiarTono('5L'));
cambiarOpcion("tono-gcf", "#cambiar-tono .opcion", () => Acordeon.cambiarTono('GCF'));
cambiarOpcion("dos-manos", "#cambiar-mano .opcion", () => Acordeon.tocarAmbas());
cambiarOpcion("mano-derecha", "#cambiar-mano .opcion", () => Acordeon.tocarConLaDerecha());
cambiarOpcion("mano-izquierda", "#cambiar-mano .opcion", () => Acordeon.tocarConLaIzquierda());
cambiarOpcion("modo-teclado", "#cambiar-modo .opcion", () => Acordeon.cambiarModo(1));
cambiarOpcion("modo-notas", "#cambiar-modo .opcion", () => Acordeon.cambiarModo(2));
cambiarOpcion("modo-numero", "#cambiar-modo .opcion", () => Acordeon.cambiarModo(0));

// Iniciar sonido del acordeón
Acordeon.iniciar();

// Cargar las canciones inicialmente
cargarComposiciones();

const socket = io('http://localhost:4000');
socket.on('tecla', ({tecla,estado}) => {
    console.log(tecla,estado)
if(estado==1){
Acordeon.presionar(tecla,0)
}else{
Acordeon.liberar(tecla,0)
}
})