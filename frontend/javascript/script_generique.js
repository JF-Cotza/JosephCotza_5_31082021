// fonction fléchées

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
    //constante à mettre à jour pour les messages d'erreurs
    const erreurs = ['NetworkError when attempting to fetch resource.'];
    const messageAafficher = ['Oups! le serveur est inaccessible. Veuillez nous en excusez.'];
    // 
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
