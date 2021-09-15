console.log('script accedé');


if (getId('allProducts')) {
    console.log('tout');
    fetchIndex();
}

if (getId('productCommand')){
    let value=getInUrl('id');

    console.log(value);


}



    





