
//script de titre
h1content(productType[selectedProduct] + ' ' + entreprise);

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
    getId('forCustomerInformations').addEventListener('click',()=>{
        getId('customerInformations').classList.remove('d-none');
    })
}

//Confirmation

if (getId('confirmation')){
    //setTimeout(filling('contact', getItem('order'), getItem('totalPanier')),500);
    filling('contact', 'order', 'totalPanier');
    clear();

    getId('testF').addEventListener('click', () => filling('contact', 'order','totalPanier'))
    

}

console.log('check storage x86')