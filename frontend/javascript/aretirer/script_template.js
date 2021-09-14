// pour le template
//variables
let area = [];
//*1) la page sur laquelle on est:
let page = '';
let areaPage = '';

const whereWeAre = () => {
    console.log('whereWeAre');
    if (getId('allProducts')) {
        page = 'allProducts';
        areaPage = getId('allProducts');
        const areaClass = ['.cardLink', '.cardImage', '.cardId', '.cardModelName', '.cardPrice', '.cardDetails', '.cardOption']
        area = areaClass;

    }
    else {/*paramétrer en fonction des autres pages*/ }
    selectTemplate(param_infoProduits);
}

//*2 récupérer le template
let template;
const selectTemplate = (param_infoProduits) => {
    if (page == 'allProducts') {
        console.log('selectTemplate');
        template = select('#card');
        //console.log('template: '+template);
        //console.log(getId('card'));
    }
    else {/*à paramétrer en fonction des autres pages*/ }
    clone(template, param_infoProduits);
}

//*3 creation du clone
let copy;
const clone = (param_what,param_info) => {
    //console.log('what: '+param_what);
    copy = node(param_what);
    //console.log('clone: '+copy);
    cloneArea(copy,param_info);
    areaPage.appendChild(copy);
};

//* définition des zones du clone
const cloneSelect = (param_where, param_what) => {
    //console.log(param_where);
    return param_where.querySelectorAll(param_what); //ne pas oublier les returns pour renvoyer des valeurs si pas de variables globales...
}

const cloneArea = (param_where,param_info) => {
    let link = cloneSelect(param_where, area[0])
    let image = cloneSelect(param_where, area[1]);
    let id = cloneSelect(param_where, area[2]);
    let name = cloneSelect(param_where, area[3]);
    let price = cloneSelect(param_where, area[4]);
    let detail = cloneSelect(param_where, area[5]);
    let option = cloneSelect(param_where, area[6]);

    return id.textContent=param_info._id;
        


};

// réalisation 
//whereWeAre();


