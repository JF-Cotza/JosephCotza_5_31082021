
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



const panierExplorer=(param_fetchdata)=>{
    //on sélectionne le template par son ID
    let template = document.querySelector('#basePanier');
    //on sélectionne là où on on créera les cartes.
    let body = select(document, '#panier')[0];
    for (let produit of param_fetchdata){
        if(getItem(produit._id))
        {
            //on clone le template
            let copy = clone(document, template);
            panierData(copy,produit,body);        
        }    
    }
    videPanier(param_fetchdata);
}

const panierData = (param_copy, param_produit, param_body) =>{
    let image= select(param_copy,'.imagePanier')[0];
    let name = select(param_copy,'.modelePanier')[0];
    let price = select(param_copy, '.singlePricePanier')[0];
    let card = select(param_copy,'.card')[0];
    let suppress = select(param_copy,'.productSuppr')[0];
    let optionList=select(param_copy,'.optionList')[0];
    let fromStorage=(getItem(param_produit._id));
    for (let choice of fromStorage){
        console.log(choice.key);
    }
      
    name.textContent=param_produit.name;
    image.setAttribute('src', param_produit.imageUrl);
    image.setAttribute('alt', imageAlternative[selectedProduct]);
    price.value=(param_produit.price) / 100; 

    //keyId sert à sélection l'élément du correspondant au bon produit
    price.setAttribute('keyId',param_produit._id);
    suppress.setAttribute('keyId',param_produit._id);
    card.setAttribute('keyId', param_produit._id);
    price.setAttribute('keyId', param_produit._id)
    price.setAttribute('disabled','disabled');
    price.setAttribute('name','price_'+param_produit._id);

    param_body.appendChild(param_copy);

    panierProductOption(param_produit, optionList);
    supprimerUnProduitDuPanier();
   
    listenChange();
        
    //optionCostPanier = optionQuantityPanier *price 
}

const listenChange = () => {
    let input = getType('input');

    for (let choice of input) {
        choice.addEventListener('change', function (e) {// on va écouter tous les inputs
            //on récupére les keyId et keyOpt de l'aobjet ayant été la cible de l'event.
            let targetId = getAttribute(e.target, 'keyId');
            let targetOption = getAttribute(e.target, 'keyOption');
            //si l'objet arrive à 0
            if (e.target.value == 0) {
                panierRemoveOption(e.target, targetId, targetOption);
            }
                            
                let singlePricePanier = getClass('singlePricePanier');
                let optionCostPanier = getClass('optionCostPanier');
                
                panierSupprimeCard();

                for (let opt of optionCostPanier){
                    if (getAttribute(opt, 'keyId') == targetId && getAttribute(opt, 'keyOption') == targetOption){
                        for(let price of singlePricePanier)
                        {
                            if (getAttribute(price, 'keyId') == targetId) {
                        
                                opt.value = price.value*e.target.value;
                            }
                            
                        }
                        //opt.textContent=amount/100;
                    }
                }
            
        })
    }
}






//crée l'input pour les options et les quantités
const optionMaker=(param_produit,param_option)=>{
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


const cancellation = () => {
    getId('cancel').addEventListener('click', () => {
        preventDefault();
        getType('input').remove;
    })
}
/*
//surveille si l'on sélectionne une option
const productOptionListener=(param_produit,param_option)=>{
    param_option.addEventListener('change', function () {
        let qty=getClass('qty');
        let allready=0;
        if(qty){
            for (let member of qty) {
                if (getAttribute(member, 'key') == param_option.value){
                    allready++
                }
            }
            if (allready!=0){
                infos.textContent='Option déjà sélectionnée';
            }
            else{
                optionMaker(param_produit, param_option);
                infos.textContent='';
            }
        }       
        if(qty){
            for(let member of qty){
                member.addEventListener('change', (e) => {
                    if (e.target.value == 0) {
                        let toSuppress = e.target.getAttribute('key');
                        e.target.remove();
                        let labels = document.getElementsByTagName('label');
                        for (let lab of labels) {
                            if (getAttribute(lab,'key') == toSuppress) {
                                lab.remove();
                            }
                        }
                    }
                })
            }
        }                
    })
}

*/



