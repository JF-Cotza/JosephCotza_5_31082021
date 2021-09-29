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
            console.log('teddies ' + theOption);
        }
        else if (type == 'cameras') {
            theOption = param_produit.lenses;
            console.log('cameras ' + theOption);
        }
        else if (type == 'furniture') {
            theOption = param_produit.varnish;
            console.log('furniture ' + theOption);
        }
        let optionInputName = param_produit.name + '_' + theOption[poss.key];
        let optionAmount = poss.value * param_produit.price
        optionTitlePanier.textContent = theOption[poss.key]; //label
        optionTitlePanier.setAttribute('for', optionInputName)
        optionQuantityPanier.value = poss.value;
        optionQuantityPanier.id = optionInputName;
        optionQuantityPanier.name = optionInputName;
        optionCostPanier.textContent = (optionAmount) / 100;

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

const listenChange = () => {
    let input = getType('input');

    for (let choice of input) {
        choice.addEventListener('change', function(e) {// on va écouter tous les inputs
            //on récupére les keyId et keyOpt de l'aobjet ayant été la cible de l'event.
            let targetId = getAttribute(e.target, 'keyId');
            let targetOption = getAttribute(e.target, 'keyOption');
            //si l'objet arrive à 0
            if (e.target.value == 0) {
                e.target.remove();
                let labels = getType('label');
                let optionCostPanier = getClass('optionCostPanier');
                // On va parcourir tous les labels 
                for (let lab of labels) {
                    if (getAttribute(opt, 'keyId') == targetId && getAttribute(opt, 'keyOption') == targetOption) {
                        lab.remove();
                        console.log('remove lab');
                    }
                }
                // On va parcourir tous les totaux d'option
                for (let opt of optionCostPanier) {
                    if (getAttribute(opt, 'keyId') == targetId && getAttribute(opt, 'keyOption') == targetOption) {
                        opt.remove();
                        console.log('remove cost');
                    }
                }
            }
        })
    }//fermeture de for (let choice of input)

}//fermeture de const