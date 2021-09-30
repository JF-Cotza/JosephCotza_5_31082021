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


/******************************** page product *************************************************/
//affichage de la page produit sélectionné
const product = (param_fetchdata, param_idproduct) => {
    //on sélectionne le template par son ID
    let template = document.querySelector('#productTemplate');

    //on sélectionne là où on on créera les cartes.
    let body = select(document, '#productCommand')[0];
    let count = 0;
    //on explore les produits
    for (let produit of param_fetchdata) {

        let length = param_fetchdata.length;
        let copy = clone(document, template);

        if (produit._id == param_idproduct) {
            productShowing(copy, produit, body);   //affiche le produit sélectionné     


            //click sur le bouton annuler
            cancellation();

        }
        else {//si l'id est erronné
            if (count < (length - 1)) {
                count++;
            }
            else {
                infos.textContent = "Désolé, le produit n'est plus disponible";
            }
        }
    }
    //bouton panier
    compteProduitsDuPanier(param_fetchdata);
}

//envoi du produit vers le stockage local
const storeToLocal = (param_produit) => {
    let selectedProduct = [];
    let selectedOptions = getType('input');

    for (let option of selectedOptions) {
        let toPush = { 'key': '', 'value': '' };
        if (getAttribute(option, 'key')) {
            let key = getAttribute(option, 'key');
            let howMany = option.value;
            toPush.key = key;
            toPush.value = howMany;
            selectedProduct.push(toPush);
        }
    }


    //on trie les options par clés
    selectedProduct.sort(function compare(a, b) {
        if (a.key < b.key)
            return -1;
        if (a.key > b.key)
            return 1;
        return 0;
    });
    //on stock en local
    storage(param_produit._id, selectedProduct);
}

//surveille si l'on sélectionne une option
const productOptionListener = (param_produit, param_option) => {
    param_option.addEventListener('change', function () {
        let qty = getClass('qty');
        let allready = 0;
        if (qty) {
            for (let member of qty) {
                if (getAttribute(member, 'key') == param_option.value) {
                    allready++
                }
            }
            if (allready != 0) {
                infos.textContent = 'Option déjà sélectionnée';
            }
            else {
                optionMaker(param_produit, param_option);
                infos.textContent = '';
            }
        }
        if (qty) {
            for (let member of qty) {
                member.addEventListener('change', (e) => {
                    if (e.target.value == 0) {
                        let toSuppress = e.target.getAttribute('key');
                        e.target.remove();
                        let labels = document.getElementsByTagName('label');
                        for (let lab of labels) {
                            if (getAttribute(lab, 'key') == toSuppress) {
                                lab.remove();
                            }
                        }
                    }
                })
            }
        }
    })
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
    // On va parcourir tous les labels 
    for (let lab of labels) {
        if (getAttribute(lab, 'keyId') == param_id && getAttribute(lab, 'keyOption') == param_option) {
            lab.remove();
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

const panierSupprimeCard=()=>{
    let cardClass = getClass('card');
    let optionCostPanier = getClass('optionCostPanier');
    for (let card of cardClass) {
        let keyId = getAttribute(card, 'keyId');
        let counting = 0;
        for (let opt of optionCostPanier) {
            if (getAttribute(opt, 'keyId') == keyId) {
                counting++
            }
        }
        if (counting == 0) {
            card.parentNode.removeChild(card);
            storageRemove(keyId);
        }
    }

}