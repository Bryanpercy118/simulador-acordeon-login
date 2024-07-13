
// ui/evaluation.js

import { Acordeon } from './acordeon';

export function iniciarExamen(ele) {
    const composicion = composiciones[ele.dataset.index];
    const duracion = composicion.cancion.sort((a, b) => a.inicio - b.inicio);
    const duracionTotal = duracion[duracion.length - 1].inicio + duracion[duracion.length - 1].duracion;
    const porcentaje = $(ele).closest(".composicion").find(".progreso .porcentaje");

    let intentosRestantes = parseInt(localStorage.getItem('intentosRestantes')) || 4;

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

export function iniciarTemporizador(ele, duracion) {
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

export function terminarExamen(ele) {
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

function mostrarMensajeNoMasIntentos() {
    Swal.fire({
      title: '¡Sin intentos disponibles!',
      text: 'Debes esperar 5 minutos antes de intentarlo de nuevo.',
      icon: 'warning',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then(() => {
      $(".acciones .practicar").prop("disabled", true).addClass("disabled");

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
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      }, 1000);

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
