
console.log('template lancé')

function index(param_fetchdata){
    console.log('index');
    //on sélectionne le template par son ID
    let template = document.querySelector('#card');
    //on sélectionne là où on on créera les cartes.
    let body = select(document, '#allProducts')[0];

    //on explore les produits
    for (let produit of param_fetchdata) {
        let copy = clone(document, template);
        let url = select(copy, '.cardLink')[0];
        let name = select(copy, '.cardModelName')[0];
        let color = select(copy, '.cardOption')[0];
        let price = select(copy, '.cardPrice')[0];
        let detail = select(copy, '.cardDetails')[0];
        let id = select(copy, '.cardId')[0];
        let image = document.createElement('img');

        image.setAttribute('alt', produit.alt);
        image.setAttribute('src', produit.imageUrl);
        url.href = `produit/?id=${produit._id}`;
        console.log(produit._id);
        name.textContent = produit.name;
        color.textContent = produit.colors;
        price.textContent = (produit.price) / 100 + '€';
        detail.textContent = produit.description;
        id.textContent = produit._id;
        url.appendChild(image); //on crée l'image dans le l'url
        body.appendChild(copy); //on crée la carte produit

    }
}
