const index=(param_fetchdata)=>{
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

function product(param_fetchdata,param_idproduct) {
    let showingProduct = { 'id': '', 'name': '','price':'','option': [] }

    //on sélectionne le template par son ID
    let template = document.querySelector('#productTemplate');
    let howmany=document.querySelector('#howmany');
    //on sélectionne là où on on créera les cartes.
    let body = select(document, '#productCommand')[0];
    let count = 0;
    //on explore les produits
    for (let produit of param_fetchdata) {
        
        let length = param_fetchdata.length;
        let copy = clone(document, template);
        
        if(produit._id==param_idproduct){
            //let url = select(copy, '.cardLink')[0];
            let name = select(copy, '.cardModelName')[0];
            let option = select(copy, '.cardOptionSelect')[0];
            let price = select(copy, '.cardPrice')[0];
            let detail = select(copy, '.cardDetails')[0];
            let id = select(copy, '.cardId')[0];
            let image=select(copy,'.cardImage')[0];
            let imageAlt='';
            let i=0;

            image.setAttribute('src', produit.imageUrl);
            name.textContent = produit.name;
            price.textContent = (produit.price)/100;
            detail.textContent = 'description: ' + produit.description;
            id.value = produit._id;
            

            let tableOption=[];
            if (type == 'teddies') {
                imageAlt='un ours en peluche';
                for (let colors of produit.colors){
                    let selectoption=document.createElement('option');
                    selectoption.value=i;
                    selectoption.textContent=colors;
                    option.appendChild(selectoption);
                    tableOption.push({'color':colors,'quantity':''});
                    i++;
                }
            }
            else if (type == 'cameras') {
                imageAlt='un appareil photo'
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
                option.textContent = 'vernis: ' + produit.varnish;
                imageAlt='un meuble';
                for (let varnishOption of produit.varnish) {
                    let selectoption = document.createElement('option');
                    selectoption.value = i;
                    selectoption.textContent = varnishOption;
                    option.appendChild(selectoption);
                    tableOption.push({ 'Vernis': varnishOption, 'quantity': '' });
                    i++;
                }
            }

            showingProduct.price=produit.price;
            showingProduct.name=produit.name;
            showingProduct.id = produit.id;
            showingProduct.option=tableOption;
            
            image.setAttribute('alt', imageAlt);
            body.appendChild(copy); //on crée la carte produit
        

        
            //on regarde si une option est sélectionnée
            option.addEventListener('change',function(){
                let volume=clone(document,howmany);
                let label = document.createElement('Label');
                let input = document.createElement('input');
                let commande = getClass('commande')[0];

                //définition du label
                label.setAttribute('for', produit.colors[option.value]);
                label.innerHTML = produit.colors[option.value];
                
                //définition de l'input
                input.id = produit.colors[option.value];
                input.name = produit.colors[option.value];
                input.setAttribute('key', option.value);  //servira de controle pour savoir la couleur a déjà été sélectionnée
                input.type='number';
                input.setAttribute('min',0);
                commande.appendChild(label);
                commande.appendChild(input);
                storage('showing_' + produit._id, showingProduct);

                //click sur le bouton annuler
                cancellation();
            })
        }
        else{//si l'id est erronné
            if(count<(length-1)){
                count++;
            }
            else{
                infos.textContent="Désolé, le produit n'est plus disponible";
            }
        }
    }
}


const cancellation=()=>{
    getId('cancel').addEventListener('click',()=>{
        preventDefault();
        getType('input').remove;
    })
}