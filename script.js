document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
    this.classList.toggle('change');
});
