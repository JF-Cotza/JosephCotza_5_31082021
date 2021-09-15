function index(param_fetchdata){
    //on sélectionne le template par son ID
    let template = document.querySelector('#card');
    //on sélectionne là où on on créera les cartes.
    let body = select(document, '#allProducts')[0];

    //on explore les produits
    for (let produit of param_fetchdata) {
        let copy = clone(document, template);
        let url = select(copy, '.cardLink')[0];
        let name = select(copy, '.cardModelName')[0];
        let option = select(copy, '.cardOption')[0];
        let price = select(copy, '.cardPrice')[0];
        let detail = select(copy, '.cardDetails')[0];
        let id = select(copy, '.cardId')[0];
        let image = document.createElement('img');

        image.setAttribute('alt', produit.alt);
        image.setAttribute('src', produit.imageUrl);
        url.href = `product.html?id=${produit._id}`;
        name.textContent = 'modèle: '+produit.name;        
        price.textContent = 'prix: '+(produit.price) / 100 + '€';
        detail.textContent = 'description: '+produit.description;
        id.textContent = produit._id;
        
        if(type=='teddies'){
            option.textContent = 'couleurs: '+ produit.colors;
        }
        else if (type=='cameras'){
            option.textContent = 'objectifs: '+produit.lenses;
        }
        else if (type=='furniture'){
            option.textContent = 'vernis: '+produit.varnish;

        }

        
        url.appendChild(image); //on crée l'image dans le l'url
        body.appendChild(copy); //on crée la carte produit

    }
}
