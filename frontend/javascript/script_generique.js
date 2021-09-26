/*
    ici les :
    - constantes qui sont appelés un peu partout
    - les fonctions fléchées génériques
    - les variables globales
*/

//constantes
const productType=['teddies','cameras','furniture'];
const imageAlt=['un ou des ourson','un appareil photo','un meuble']
const selectedProduct=0;
const type=productType[selectedProduct];                              //utilisé dans le template pour le chois de l'afichage des options 
const apiLink = 'http://localhost:3000/api/'+type;                    //lien pour l'api et accéder aux produits  
const option=['colors','lenses','varnishes']

    //pour messages d'erreurs
const erreurs = ['NetworkError when attempting to fetch resource.'];
const messageAafficher = ['Oups! le serveur est inaccessible. Veuillez nous en excusez.'];



//applications fléchées
    //fonctions simplificatrices
const storage = (param_nom, param_value) => { return localStorage.setItem(param_nom, JSON.stringify(param_value)) };
const getItem   = (param_nom)               => { return localStorage.getItem(param_nom) };
const getType   = (param_type)              => { return document.getElementsByTagName(param_type) };
const getClass  = (param_class)             => { return document.getElementsByClassName(param_class) };
const getId     = (param_id)                => { return document.getElementById(param_id) };
const clone     = (param_where, param_what) => { return param_where.importNode(param_what.content, true); }
const select    = (param_where, param_what) => { return param_where.querySelectorAll(param_what);}
const h1content = (param_content)           => { return getType('h1')[0].textContent = param_content;}
const getAttribute=(param_nom,param_attribute) => { return param_nom.getAttribute(param_attribute);}
//const node      = (param_value)             => { return document.importNode(param_value.content, true) };


// fonction de contrôle
const testingFunction = (param_toCheck) => {
    let exist = 0;
    for (let option of param_toCheck) {
        exist++;
        console.log(option.id);
    }
    if (exist == 0) {
        console.log("Résultat testingFunction : l’élement n’existe pas")
    }
    if (!param_toCheck){
        console.log('toto');
    }
}

//le bouton panier
const compteProduitsDuPanier = (param_fetchdata) => {
    let count = 0;
    for (let produit of param_fetchdata) {
        if (getItem(produit._id)) {
            count++;
        }
    }
    afficherLePanier(count);
}

    //afficher le panier
const afficherLePanier = (param_totalPanier) => {
    if (param_totalPanier <= 0) {
        textLook.textContent = 'Panier vide';
        look.title = 'panier vide, bouton de panier neutralisé';
        look.addEventListener('click', function (e) {
            e.preventDefault();
        })
    }
    else {
        let span = document.createElement('span');
        look.title = 'afficher le panier';
        span.textContent = `Le panier contient :${param_totalPanier} produits`
        textLook.appendChild(span);
    }
}

    //afficher le message d'erreur
const mistake = (param_error) => {
    let i=0;
    for(let risque of erreurs){
        if (param_error.message = risque) {
            infos.textContent = messageAafficher[i];
        }
        else {
            console.log(param_error.message + ' erreur du fetch ');
            i++
        }
    }
    
}


//pour récupérer une valeur dans l'URL
const getInUrl  = (param_searched)          => {
    let place = window.location.search;             //on récupére ce qu'il y a après l'url standard. à partir du ?
    const urlParams = new URLSearchParams(place);   //on crée une recherche dans le paramètre
    let value = urlParams.get(param_searched);      //on récupère la valeur du parametre
    return value;  
}

//variables globales
//  le bouton panier
    let look = getId('look'); //bouton pour afficher le panier
    let textLook = getId('textLook'); //zone de texte de look
//autres   
    let entreprise='Orinoco';
    let infos = getId('infos');
    let toCaddie = getId('toCaddie');


//script lancés qu'une fois
h1content(entreprise);
