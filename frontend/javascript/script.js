// fonction
const getCustomerDatas = () => {
    let customer = { 'lastName': '', 'firstName': '', 'address': {}, 'city': '', 'email': '' };
    customer.firstName = getId('firstName').value;
    customer.lastName = getId('customerType').value + ' ' + getId('lastName').value;
    customer.address = {
        'adressNumber': getId('adressNumber').value,
        'adressStreet': getId('adressStreet').value,
        'adressDoor': getId('adressDoor').value,
        'adressBuilding': getId('adressBuilding').value,
        'adressAdding': getId('adressAdding').value
    }
    customer.email=getId('mail').value;
    customer.city = getId('adressCode').value + ' ' + getId('adressCity').value
    //storage('customer',customer);
    return customer;
};



//variables

let commande=[];
let test = 000;
let getFormData = getId('getFormData');
let voidStorage = getId('voidStorage');



//application lancées
if (getId('allProducts')) {
    fetchIndex();
};

if (getId('productCommand')){
    let value=getInUrl('id');
    fetchProduct(value);
};


if (getFormData){
    getFormData.addEventListener('click',getCustomerDatas);
}

/*
    storage('customer',customer);
    fetchCustomer(getItem('customer'));
*/



if (voidStorage){
    voidStorage.addEventListener('click',()=>localStorage.clear());
};


let toLocalstorage = getId('toLocalstorage');
if (toLocalstorage){
    toLocalstorage.addEventListener('click',function(){
        
        let customerinfo=getCustomerDatas();
        storage('customerDatas',customerinfo);
    })
    
}







//testingFunction(getId('text-center'));
console.log(getId('infos'));