const GeneralModule = (() => {
    function initNiceScroll() {
        // Inicializar niceScroll en el contenido de las composiciones
        $("#composiciones .contenido").niceScroll({ cursorcolor: "#00F", autohidemode: 'hover' });
    }

    function initSoundLoadingHandler() {
        // Manejador para cargar el sonido del acordeón
        document.body.addEventListener('cargando-sonidos', function(event) {
            const appContainer = document.getElementById("app-container");
            if (event.detail) {
                appContainer.classList.add("cargando");
            } else {
                appContainer.classList.remove("cargando");
            }
        }, true);
    }

    return {
        initNiceScroll,
        initSoundLoadingHandler
    };
})();
