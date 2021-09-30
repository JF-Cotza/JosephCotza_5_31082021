/*
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
    let submit=getClass('submit');

    for (let btn of submit){
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


*/



