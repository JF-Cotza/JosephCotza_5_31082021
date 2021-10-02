if (getId('totalPanier')){
    majPanier()
}

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


