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

    //on explore les produits
    for (let produit of param_fetchdata) {
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
                //option.textContent = 'couleurs: ' + produit.colors;
                imageAlt='un ours en peluche';
                for (let colors of produit.colors){
                    let selectoption=document.createElement('option');
                    
                    //console.log(colors);
                    selectoption.value=i;
                    selectoption.textContent=colors;
                    option.appendChild(selectoption);
                    tableOption.push({'color':colors,'quantity':''});
                    i++;
                }
                //console.log(tableOption);
            }
            else if (type == 'cameras') {
               // option.textContent = 'objectifs: ' + produit.lenses;
                imageAlt='un appareil photo'
            }
            else if (type == 'furniture') {
                option.textContent = 'vernis: ' + produit.varnish;
                imageAlt='un meuble';
            }

            showingProduct.price=produit.price;
            showingProduct.name=produit.name;
            showingProduct.id = produit.id;
            showingProduct.option=tableOption;
            storage('showing_'+produit._id,JSON.stringify(showingProduct));
            image.setAttribute('alt', imageAlt);
            body.appendChild(copy); //on crée la carte produit
            commande.push(showingProduct);

        
            //on regarde si une option est sélectionnée
            option.addEventListener('change',function(){
                let volume=clone(document,howmany);
                let volumeAsked = select(volume,'.volumeAsked')[0]
                let commande=getClass('commande')[0];
                volumeAsked.name=produit.colors[option.value];
                commande.appendChild(volumeAsked);
            })
        }
    }
}
