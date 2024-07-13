import { Acordeon } from './acordeon';
export function initGeneral() {
    // Inicializar niceScroll en el contenido de las composiciones
    $("#composiciones .contenido").niceScroll({ cursorcolor: "#00F", autohidemode: 'hover' });

    // Manejador para cargar el sonido del acordeón
    document.body.addEventListener('cargando-sonidos', ({ detail }) => {
        const appContainer = document.getElementById("app-container");
        if (detail) {
            appContainer.classList.add("cargando");
        } else {
            appContainer.classList.remove("cargando");
        }
    }, true);
}

export function cambiarOpcion(elementId, selector, callback) {
    document.getElementById(elementId).onclick = function () {
        document.querySelectorAll(selector).forEach(e => e.classList.remove("seleccionada"));
        callback();
        this.classList.add('seleccionada');
    };
}
