if (getId('totalPanier')){
    majPanier()
}

const majPanier=()=>{
    let panier=getId('totalPanier');
    let input=getClass('quantity');
    for(let item of input){
        item.addEventListener('change',()=>{panier.textContent=totalPanier()});
    }
}


