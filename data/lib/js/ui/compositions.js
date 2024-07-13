// ui/compositions.js
import { Acordeon } from './acordeon';

let composiciones = [];
const defaultCompositions = canciones;

export function initCompositions() {
    cargarComposiciones();

    // Event listener for "Iniciar" button
    $("body").on("click", ".acciones .practicar", function() {
        let ele = this;
        let isTerminar = $(ele).text() === "Terminar";

        if (isTerminar) {
            terminarExamen(ele);
        } else {
            iniciarExamen(ele);
        }
    });

    // Event listener for "Reproducir" button
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

    // Event listener for "Borrar" button
    $("body").on("click", ".acciones .borrar", function () {
        const composicion = composiciones[this.dataset.index];
        localStorage.removeItem(`acordeon-${composicion.nombre}`);
        cargarComposiciones();
    });

    // Event listener for "Grabar" button
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
}

export function cargarComposiciones() {
    const contenido = $("#composiciones .contenido").empty();

    composiciones = [
        ...defaultCompositions,
        ...Object.keys(localStorage).filter(key => key.includes("acordeon")).map(key => ({
            nombre: key.split('-')[1],
            cancion: JSON.parse(localStorage.getItem(key))
        }))
    ];

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

function liberarTeclas(cancion) {
    cancion.forEach(nota => {
        const eventoTecla = new KeyboardEvent('keyup', { 'key': nota.tecla });
        document.dispatchEvent(eventoTecla);
    });
}
