const MenuModule = (() => {
    function initMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.querySelector('.menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
    }

    return {
        initMenu,
    };
})();