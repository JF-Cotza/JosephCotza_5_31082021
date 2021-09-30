/*********************** application lancées depuis les pages ***********************/
//index.html
if (getId('allProducts')) {
    console.log('allProducts');
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
    getId('forCustomerInformations').addEventListener('click',()=>{
        getId('customerInformations').classList.remove('d-none');
    })
}

//confirmation.html
if (getId('confirmation')){
    fetchconfirmation();
}

