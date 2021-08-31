//fonctions et constantes
const getId= ($value) =>{
   return document.getElementById($value);
}

const toggle= ($cible,$class)=>{
    $cible.classList.toggle($class);
}


//variables
let navbar = getId('navbarContent')



navbar.addEventListener('click',function(){
    toggle(navbar, 'navbar-collapse');
})

fetch("http://localhost:3000/api/teddies");


