// fonction
const getCustomerDatas = () => {
    let customer = { 'lastName': '', 'firstName': '', 'address': {}, 'city': '', 'email': '' };
    customer.firstName = getId('firstName').value;
    customer.lastName = getId('customerType').value + ' ' + getId('lastName').value;
    customer.address = 
        getId('adressNumber').value+' '+
        getId('adressStreet').value+' '+
        getId('adressDoor').value+' '+
        getId('adressBuilding').value+' '+
        getId('adressAdding').value;
    
    customer.email=getId('mail').value;
    customer.city = getId('adressCode').value + ' ' + getId('adressCity').value
    return customer;
};

//variables
/*
let commande=[];
let test = 000;
let getFormData = getId('getFormData');



if (getFormData){
    getFormData.addEventListener('click',getCustomerDatas);
}
*/
/*
    storage('customer',customer);
    fetchCustomer(getItem('customer'));
*/

/*
let voidStorage = getId('voidStorage');

if (voidStorage){
    voidStorage.addEventListener('click',()=>localStorage.clear());
};
*/

let toConfirmation = getId('toConfirmation');

if (toConfirmation){
    toConfirmation.addEventListener('click',(e)=>{
        if (checkValidity().total!=0){
            e.preventDefault();
            infos.textContent=checkValidity().message;
        }
        else{
            console.log(idList()); //génére la liste des id
        }
        /*
        e.preventDefault();
        console.log(checkValidity());
        
        fetchCustomer();
        //storage('customerDatas',customerinfo);
        */
    })
    
}

//testingFunction();