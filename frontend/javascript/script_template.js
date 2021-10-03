
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
    let commande=getClass('commande'); 
    let parag = document.createElement('p')
    let text;
    for (let entry of getItem(param_produit._id)) {
        text+='test 4: present: key' + entry.key + 'value' + entry.value;      
    }
    parag.textContent = text;
}