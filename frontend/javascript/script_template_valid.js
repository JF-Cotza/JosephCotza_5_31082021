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