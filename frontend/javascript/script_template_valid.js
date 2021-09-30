/******************************** page index ******************************************************/
const index = (param_fetchdata) => {
    //on sélectionne le template par son ID
    let template = document.querySelector('#card');
    //on sélectionne là où on on créera les cartes.
    let body = select(document, '#allProducts')[0];
    //on explore les produits
    for (let produit of param_fetchdata) {
        let copy = clone(document, template);
        productData(copy, produit, body);
    }

    //bouton panier
    compteProduitsDuPanier(param_fetchdata)
}

const productData = (param_copy, param_produit, param_body) => {
    let url = select(param_copy, '.cardLink')[0];
    let name = select(param_copy, '.cardModelName')[0];
    let option = select(param_copy, '.cardOption')[0];
    let price = select(param_copy, '.cardPrice')[0];
    let detail = select(param_copy, '.cardDetails')[0];
    let id = select(param_copy, '.cardId')[0];
    let image = document.createElement('img');

    image.setAttribute('alt', param_produit.alt);
    image.setAttribute('src', param_produit.imageUrl);
    url.href = `product.html?id=${param_produit._id}`;
    name.textContent = 'modèle: ' + param_produit.name;
    price.textContent = 'prix: ' + (param_produit.price) / 100 + '€';
    detail.textContent = 'description: ' + param_produit.description;
    id.textContent = param_produit._id;

    if (type == 'teddies') {
        option.textContent = 'couleurs: ' + param_produit.colors;
    }
    else if (type == 'cameras') {
        option.textContent = 'objectifs: ' + param_produit.lenses;
    }
    else if (type == 'furniture') {
        option.textContent = 'vernis: ' + param_produit.varnish;
    }
    // création des cartesproduits dans le document
    url.appendChild(image); //on crée l'image dans le l'url
    param_body.appendChild(param_copy); //on crée la carte produit
}


/********************* page panier ************************/
//suppression d'éléments du panier
const supprimerUnProduitDuPanier = () => {
    let suppressClass = getClass('productSuppr');
    for (let prod of suppressClass) {
        prod.addEventListener('click', () => {
            let id = getAttribute(prod, 'keyId');
            console.log('prod pressed');
            for (cardlisted of getClass('card')) {
                if (getAttribute(cardlisted, 'keyId') == id) {
                    cardlisted.parentNode.removeChild(cardlisted);
                    storageRemove(id);
                }
            }
        })
    }
}

const videPanier = (param_fetchdata) => {
    getId('cancelPanier').addEventListener('click', () => {
        for (let produit of param_fetchdata) {
            storageRemove(produit._id);
            let cardClass = getClass('card');
            for (let member of cardClass) {
                if (getAttribute(member, 'keyId') == produit._id) {
                    member.parentNode.removeChild(member);
                }
            }
        }
    })
}

// fonction pour aficher les options du produit dans le panier
const panierProductOption = (param_produit, param_where) => {
    for (let poss of getItem(param_produit._id)) {
        let template = getId('optionPanier');
        let copy = clone(document, template);
        let optionTitlePanier = select(copy, '.optionTitlePanier')[0];
        let optionQuantityPanier = select(copy, '.optionQuantityPanier')[0];
        let optionCostPanier = select(copy, '.optionCostPanier')[0];

        let theOption = [];
        if (type == 'teddies') {
            theOption = param_produit.colors;
        }
        else if (type == 'cameras') {
            theOption = param_produit.lenses;
        }
        else if (type == 'furniture') {
            theOption = param_produit.varnish;
        }
        let optionInputName = param_produit.name + '_' + theOption[poss.key];
        let optionAmount = poss.value * param_produit.price
        optionTitlePanier.textContent = theOption[poss.key]; //label
        optionTitlePanier.setAttribute('for', optionInputName)
        optionQuantityPanier.value = poss.value;
        optionQuantityPanier.id = optionInputName;
        optionQuantityPanier.name = optionInputName;
        optionCostPanier.value = (optionAmount) / 100;

        //ajout de KeyId pour associer l'option au produit dans la suite
        optionTitlePanier.setAttribute('keyId', param_produit._id);
        optionQuantityPanier.setAttribute('keyId', param_produit._id);
        optionCostPanier.setAttribute('keyId', param_produit._id);

        //ajout de keyOption pour lier les différents éléments de l'option
        optionTitlePanier.setAttribute('keyOption', poss.key);
        optionQuantityPanier.setAttribute('keyOption', poss.key);
        optionCostPanier.setAttribute('keyOption', poss.key);

        param_where.appendChild(copy);
    }
}


const panierRemoveOption=(param_cible,param_id,param_option)=>{
    param_cible.remove();
    let labels = getType('label');
    let optionCostPanier = getClass('optionCostPanier');
    console.log('labels: ' + labels);
    // On va parcourir tous les labels 
    for (let lab of labels) {
        if (getAttribute(lab, 'keyId') == param_id && getAttribute(lab, 'keyOption') == param_option) {
            lab.remove();
            console.log('remove lab');
        }
    }
    // On va parcourir tous les totaux d'option
    for (let opt of optionCostPanier) {
        if (getAttribute(opt, 'keyId') == param_id && getAttribute(opt, 'keyOption') == param_option) {
            opt.remove();
            console.log('remove cost');
        }
    }
}