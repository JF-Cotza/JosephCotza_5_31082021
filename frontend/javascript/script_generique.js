/*
    ici les :
    - constantes qui sont appelés un peu partout
    - les fonctions fléchées génériques
    - les variables globales
*/

//constantes
const productType=['teddies','cameras','furniture'];
const type=productType[0];                              //utilisé dans le template pour le chois de l'afichage des options 
const apiLink = 'http://localhost:3000/api/'+type;
const option=['colors','lenses']

//applications fléchées
const storage   = (param_nom, param_value)  => { return localStorage.setItem(param_nom, param_value) };
const getItem   = (param_nom)               => { return localStorage.getItem(param_nom) };
const getType   = (param_type)              => { return document.getElementsByTagName(param_type) };
const getClass  = (param_class)             => { return document.getElementsByClassName(param_class) };
const getId     = (param_id)                => { return document.getElementById(param_id) };
const node      = (param_value)             => { return document.importNode(param_value.content, true) };
const select    = (param_where, param_what) => {return param_where.querySelectorAll(param_what);}
const clone     = (param_where, param_what) => {return param_where.importNode(param_what.content, true);}

//pour récupérer une valeur dans l'URL
const getInUrl  = (param_searched)          => {
    let place = window.location.search;             //on récupére ce qu'il y a après l'url standard. à partir du ?
    const urlParams = new URLSearchParams(place);   //on crée une recherche dans le paramètre
    let value = urlParams.get(param_searched);      //on récupère la valeur du parametre
    return value;  
}

//variables globales
