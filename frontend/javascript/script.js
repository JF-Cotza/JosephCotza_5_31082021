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
   // console.log(toLocalstorage);

    toLocalstorage.addEventListener('click',(e)=>{
        //console.log('toLocalstorage');
        e.preventDefault();
        //storage('customerDatas',customerinfo);
        fetchCustomer();
    })
    
}

//testingFunction();