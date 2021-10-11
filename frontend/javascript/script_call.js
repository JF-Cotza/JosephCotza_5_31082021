//script de titre
h1content(entreprise);

/*********************** application lancées depuis les pages ***********************/
//index.html
if (getId('allProducts')) {
    fetchIndex();
};

//product.html
if (getId('productCommand')) {
    let value = getInUrl('id');
    fetchProduct(value);   
};

//panier.html
if (getId('panier')) {
    fetchAffichagePanier();
}

if (getId('forCustomerInformations')){
    getId('forCustomerInformations').addEventListener('click',(e)=>{
        if(idList()!=[]){
            getId('customerInformations').classList.remove('d-none');
        }
        else{
            e.preventDefault();
            infos.textContent='Panier vide';
        }
    })
}

if (getId('toConfirmation')){
    sendingCommand();
}

//Confirmation

if (getId('confirmation')){
    filling('contact', 'order', 'totalPanier');
    clear();
}

console.log('desactivation bouton client');