console.log('script accedé');
let commande=[];

if (getId('allProducts')) {
    //console.log('tout');
    fetchIndex();
}

if (getId('productCommand')){
    let value=getInUrl('id');
    fetchProduct(value);
    //console.log(value);


}



    





