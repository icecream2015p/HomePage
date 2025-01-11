document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
    this.classList.toggle('change');
});
function newtabopen(url){
    window.open(url, '_blank');
}