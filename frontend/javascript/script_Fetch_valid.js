//script fetchIndex : on récupére tous les datas du serveur pour afficher tous les produits sur la page index
const fetchIndex = () => {
    fetch(apiLink)                      // on se connecte à la page apiLInk définie dans Script_generiqique
        .then(function (res) {          //s'il y a des data on continue sinon on passe au catch 
            res.json()                  //ne pas oublier les parenthèses !!!!!!
                .then((data) => {
                    console.log('index');
                    index(data);        //on crée la carte produit
                })
        })
        .catch((error) => {
            mistake(error);
        })
}

//script fetchProduct : on récupére tous les datas du serveur et l'id du produit sélectionné pour afficher les détails sur la page product.
const fetchProduct = (param_idProduit) => {
    fetch(apiLink + '?id=' + param_idProduit)
        .then(function (result) {
            result.json()
                .then((data) => {
                    product(data, param_idProduit);
                })
        })
        .catch((error) => { mistake(error); }
        );
}

//script fetchAffichagePanier : on récupére tous les datas du serveur pour afficher les détails sur la page panier. une comparaison sera faites avec les id stockées dans le localStorage
const fetchAffichagePanier = () => {
    fetch(apiLink)
        .then(function (res) {
            res.json()
                .then((data) => {
                    panierExplorer(data);
                })
        })
        .catch((error) => {
            mistake(error);
        })
}