
const majPanier=()=>{
    let panier=getId('totalPanier');
    let inputs = getClass('optionQuantityPanier');
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


