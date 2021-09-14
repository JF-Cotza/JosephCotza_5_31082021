/*
    ici les :
    - constantes qui sont appelés un peu partour
    - les fonctions fléchées génériques
    - les variables globales
*/

//constantes
const apiLink = 'http://localhost:3000/api/teddies';

//applications fléchées
const storage = (param_nom, param_value) => { return localStorage.setItem(param_nom, param_value) };
const getItem = (param_nom) => { return localStorage.getItem(param_nom) };
const getType = (param_type) => { return document.getElementsByTagName(param_type) };
const getClass = (param_class) => { return document.getElementsByClassName(param_class) };
const getId = (param_id) => { return document.getElementById(param_id) };
const select = (param_value) => { return document.querySelector(param_value) };
const node = (param_value) => { return document.importNode(param_value.content, true) };

//variables globales
let allProducts;


//console.log('generique');