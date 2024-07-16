const ComposicionesModule = (() => {
    let composiciones = [];
    const defaultCompositions = canciones;

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

    function liberarTeclas(cancion) {
        cancion.forEach(nota => {
            const eventoTecla = new KeyboardEvent('keyup', { 'key': nota.tecla });
            document.dispatchEvent(eventoTecla);
        });
    }

    function manejarReproduccion() {
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
    }

    return {
        cargarComposiciones,
        liberarTeclas,
        manejarReproduccion
    };
})();
