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




let test=000;



if(getId('look')){
    afficherLePanier(test);
}



let getFormData = getId('getFormData');
let voidStorage = getId('voidStorage');

getFormData.addEventListener('click',function(){
    let customer = { 'lastName': '', 'firstName': '','address':{},'city':'','email':'' };

    customer.firstName = getId('firstName').value;
    customer.lastName = getId('customerType').value+' '+getId('lastName').value;
    customer.address = {
        'adressNumber':getId('adressNumber').value,
        'adressStreet':getId('adressStreet').value,
        'adressDoor': getId('adressDoor').value,
        'adressBuilding': getId('adressBuilding').value,
        'adressAdding':getId('adressAdding').value
    }
    customer.city= getId('adressCode').value + ' '+getId('adressCity').value
    
    storage('customer',customer);
})

voidStorage.addEventListener('click',function () {
    localStorage.clear();
})