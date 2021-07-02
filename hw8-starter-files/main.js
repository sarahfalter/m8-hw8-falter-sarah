// It is always helpful to use comments in your code!


var nav_links = document.getElementsByClassName('main-menu-labels');
var dropdowns = document.getElementsByClassName('sub-menu');

function toggleDropdown(){
    this.children[1].classList.toggle('hidden')
}

for(i=0; i<nav_links.length; i++){
    nav_links[i].addEventListener('mouseenter', toggleDropdown);
    nav_links[i].addEventListener('mouseleave', toggleDropdown);
}