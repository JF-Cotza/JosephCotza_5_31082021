
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
    let commande=getClass('commande')[0]; 
    let parag = document.createElement('p')
    let text;
    for (let entry of getItem(param_produit._id)) {
        optionMaker(param_produit,entry.key,entry.value)
        text+='test 7: present: key' + entry.key + 'value' + entry.value;      
    }
    
    parag.textContent = text;
    commande.appendChild(parag);
}