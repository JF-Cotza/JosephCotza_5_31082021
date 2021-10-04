//remplissage de la page de confirmation
const confirmFill=()=>{
    //getId('customerName').textContent=customer.lastName;
    getId('totalAmount').textContent=getItem('totalPanier');
    console.log('confirmation test 2');
}




/*
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
*/

