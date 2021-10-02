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
    param_option.addEventListener('change', ()=> {
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

//crée l'input pour les options et les quantités
const optionMaker = (param_produit, param_option) => {
    let label = document.createElement('Label');
    let input = document.createElement('input');
    let commande = getClass('commande')[0];

    //définition du label
    label.setAttribute('for', param_produit.colors[param_option.value]);
    label.setAttribute('key', param_option.value);
    label.innerHTML = param_produit.colors[param_option.value];

    //définition de l'input
    input.id = param_produit.colors[param_option.value];
    input.name = param_produit.colors[param_option.value];
    input.setAttribute('key', param_option.value);  //servira de controle pour savoir la couleur a déjà été sélectionnée
    input.type = 'number';
    input.setAttribute('min', 0);
    input.value = 1;
    input.classList.add('qty');
    commande.appendChild(label);
    commande.appendChild(input);
}

//affiche le produit sélectionné
const productShowing = (param_copy, param_produit, param_body) => {
    let showingProduct = { 'id': '', 'name': '', 'price': '', 'option': [] };
    let name = select(param_copy, '.cardModelName')[0];
    let option = select(param_copy, '.cardOptionSelect')[0];
    let price = select(param_copy, '.cardPrice')[0];
    let detail = select(param_copy, '.cardDetails')[0];
    let id = select(param_copy, '.cardId')[0];
    let image = select(param_copy, '.cardImage')[0];
    let imageAlt = '';
    let i = 0;

    image.setAttribute('src', param_produit.imageUrl);
    name.textContent = param_produit.name;
    price.textContent = (param_produit.price) / 100;
    detail.textContent = 'description: ' + param_produit.description;
    id.value = param_produit._id;

    let tableOption = [];
    if (type == 'teddies') {
        imageAlt = 'un ours en peluche';
        for (let colors of param_produit.colors) {
            let selectoption = document.createElement('option');
            selectoption.value = i;
            selectoption.textContent = colors;
            option.appendChild(selectoption);
            tableOption.push({ 'color': colors, 'quantity': '' });
            i++;
        }
    }
    else if (type == 'cameras') {
        imageAlt = 'un appareil photo'
        for (let lense of produit.lenses) {
            let selectoption = document.createElement('option');
            selectoption.value = i;
            selectoption.textContent = lense;
            option.appendChild(selectoption);
            tableOption.push({ 'Lense': lense, 'quantity': '' });
            i++;
        }
    }
    else if (type == 'furniture') {
        option.textContent = 'vernis: ' + param_produit.varnish;
        imageAlt = 'un meuble';
        for (let varnishOption of param_produit.varnish) {
            let selectoption = document.createElement('option');
            selectoption.value = i;
            selectoption.textContent = varnishOption;
            option.appendChild(selectoption);
            tableOption.push({ 'Vernis': varnishOption, 'quantity': '' });
            i++;
        }
    }

    showingProduct.price = param_produit.price;
    showingProduct.name = param_produit.name;
    showingProduct.id = param_produit.id;
    showingProduct.option = tableOption;

    image.setAttribute('alt', imageAlt);
    param_body.appendChild(param_copy); //on crée la carte produit
    //on regarde si une option est sélectionnée
    productOptionListener(param_produit, option); //surveille si une option est sélectionnée
    let submit = getClass('submit');

    for (let btn of submit) {
        btn.addEventListener('click', () => {
            let selectedOptions = getType('input');
            let exist = 0;
            //on vérifie s'il y a une option de produit affichée
            for (let item of selectedOptions) {
                if (item.getAttribute('key')) {
                    exist++
                }
            }

            if (getItem(param_produit._id)) {
                infos.textContent = 'Produit déjà choisi';
            }
            else {
                if (exist > 0) {
                    storeToLocal(param_produit);
                }
                else if (exist == 0) {
                    infos.textContent = 'pas de quantité sélectionnée pour le produit';
                }
            }
        })
    }
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

const listenChange = () => {
    let input = getType('input');
    for (let choice of input) {
        choice.addEventListener('change', (e)=> {// on va écouter tous les inputs
            //on récupére les keyId et keyOpt de l'objet ayant été la cible de l'event.
            let targetId = getAttribute(e.target, 'keyId');
            let targetOption = getAttribute(e.target, 'keyOption');
            //si l'objet arrive à 0
            if (e.target.value == 0) {
                panierRemoveOption(e.target, targetId, targetOption);
            }
            let singlePricePanier = getClass('singlePricePanier');
            let optionCostPanier = getClass('optionCostPanier');

            panierSupprimeCard();

            for (let opt of optionCostPanier) {
                if (getAttribute(opt, 'keyId') == targetId && getAttribute(opt, 'keyOption') == targetOption) {
                    for (let price of singlePricePanier) {
                        if (getAttribute(price, 'keyId') == targetId) {
                            opt.value = price.value * e.target.value;
                        }
                    }
                }
            }
        })
    }
}

const panierData = (param_copy, param_produit, param_body) => {
    let image = select(param_copy, '.imagePanier')[0];
    let name = select(param_copy, '.modelePanier')[0];
    let price = select(param_copy, '.singlePricePanier')[0];
    let card = select(param_copy, '.card')[0];
    let suppress = select(param_copy, '.productSuppr')[0];
    let optionList = select(param_copy, '.optionList')[0];
    let fromStorage = (getItem(param_produit._id));
    /*
    for (let choice of fromStorage) {
        console.log(choice.key);
    }
    */
    name.textContent = param_produit.name;
    image.setAttribute('src', param_produit.imageUrl);
    image.setAttribute('alt', imageAlternative[selectedProduct]);
    price.value = (param_produit.price) / 100;

    //keyId sert à sélection l'élément du correspondant au bon produit
    price.setAttribute('keyId', param_produit._id);
    suppress.setAttribute('keyId', param_produit._id);
    card.setAttribute('keyId', param_produit._id);
    price.setAttribute('keyId', param_produit._id)
    price.setAttribute('disabled', 'disabled');
    price.setAttribute('name', 'price_' + param_produit._id);

    param_body.appendChild(param_copy);

    panierProductOption(param_produit, optionList);
    supprimerUnProduitDuPanier();

    listenChange();
    totalPanier();
}

const panierExplorer = (param_fetchdata) => {
    //on sélectionne le template par son ID
    let template = document.querySelector('#basePanier');
    //on sélectionne là où on on créera les cartes.
    let body = select(document, '#panier')[0];
    for (let produit of param_fetchdata) {
        if (getItem(produit._id)) {
            //on clone le template
            let copy = clone(document, template);
            panierData(copy, produit, body);
        }
    }
    videPanier(param_fetchdata);
}

const idList = () => {
    let idListing = []
    for (let value of getClass('card')) {
        if (getAttribute(value, 'keyId') != null) {
            idListing.push(getAttribute(value, 'keyId'))
        }
    }
    return idListing;
}

//controle des données de formulaire client
const checkValidity = () => {
    let inputs = getType('input');
    let countTyped = 0;
    let countPatterned = 0;
    let countRequired = 0;
    let message = { 'type': '', 'pattern': '', 'required': '' };
    let toInfo = { 'message': '', 'total': '' };
    for (let typed of inputs) {
        if (getAttribute(typed, 'required') == false) {
            if (!typed.value || typed.value.length == 0) {
                countRequired++;
            }
        }
        if (getAttribute(typed, 'type')) {
            if (typed.validity.typeMismatch) {
                countTyped++;
            }
        }
        if (getAttribute(typed, 'pattern')) {
            if (typed.validity.patternMismatch) {
                countPatterned++;
            }
        }
    }
    if (countTyped != 0) {
        message.type = ` ${countTyped} erreurs de types de saisie /`;
    }
    if (countPatterned != 0) {
        message.pattern = ` ${countPatterned} erreurs de format de saisie /`;
    }
    if (countRequired != 0) {
        message.required = ` ${countRequired} champs obligatoires non renseignés`;
    }
    if (countTyped == 0 && countPatterned == 0 && countRequired == 0) {
        toInfo.message = " Aucune erreur détectée";
        toInfo.total = 0;
    }
    else {
        toInfo.message = 'Il y a : ' + message.type + message.pattern + message.required;
        toInfo.total = countTyped + countPatterned + countRequired;
    }
    return toInfo;
}

const getCustomerDatas = () => {
    let customer = { 'lastName': '', 'firstName': '', 'address': {}, 'city': '', 'email': '' };
    customer.firstName = getId('firstName').value;
    customer.lastName = getId('customerType').value + ' ' + getId('lastName').value;
    customer.address =
        getId('adressNumber').value + ' ' +
        getId('adressStreet').value + ' ' +
        getId('adressDoor').value + ' ' +
        getId('adressBuilding').value + ' ' +
        getId('adressAdding').value;

    customer.email = getId('mail').value;
    customer.city = getId('adressCode').value + ' ' + getId('adressCity').value
    return customer;
}