//fonctions et constantes
function getId($value){
   return document.getElementById($value);
}

function toggle($cible,$class){
    $cible.classList.toggle($class);
}


//variables
let toggler=getId('toggler');
let navbar = getId('navbarContent');
let logo=getId('logo');


toggler.addEventListener('click',function(){
    toggle(navbar, 'collapse');
    console.log('ok');
});

logo.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('logo ok');
    
});


//fetch("http://localhost:3000/api/teddies");


