const MenuModule = (() => {
    function initMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.querySelector('.menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
    }
    const cambiarOpcion = (elementId, selector, callback) => {
        document.getElementById(elementId).onclick = function () {
            document.querySelectorAll(selector).forEach(e => e.classList.remove("seleccionada"));
            callback();
            this.classList.add('seleccionada');
        };
    };

    return {
        initMenu,
        cambiarOpcion
    };
})();