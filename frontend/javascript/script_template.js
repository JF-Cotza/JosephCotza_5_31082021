
const majPanier=()=>{
    let panier=getId('totalPanier');
    let inputs = getClass('optionQuantityPanier');
    console.log(inputs);
    for(let item of inputs){
        item.addEventListener('change',()=>{
            panier.textContent=totalPanier();
            console.log('majPanier');
        });
    }
}


if (getId('totalPanier')) {
    majPanier()
}


const allreadyExisting=(param_produit)=>{
    //let commande=getClass('commande')[0]; 
    //let parag = document.createElement('p')
    //let text='';
    for (let entry of getItem(param_produit._id)) {
        let param_option={'value':entry.key};
        optionMaker(param_produit,param_option,entry.value);
        listenChange();
    }
    
    //parag.textContent = text;
    //commande.appendChild(parag);
}