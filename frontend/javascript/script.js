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
            infos.textContent = checkValidity().message;
            console.log(getCustomerDatas())
            console.log(checkValidity().total);

        }
        else{
            e.preventDefault();
            console.log(idList()); //génére la liste des id
            console.log(getCustomerDatas()); //récupère les données du client
        }
        /*
        e.preventDefault();
        console.log(checkValidity());
        
        fetchCustomer();
        //storage('customerDatas',customerinfo);
        */
    })
    
}

/*
const testId=()=>{
    fetch(apiLink +'/:_id=5beaa8bf1c9d440000a57d94')
    .then(function(res){
        return res.json()
    })
    .then((data)=>{
        
            console.log(data)
   })
    .catch((error)=>console.log("pas d'id : "+error.message))
}

//testingFunction();
testId();
*/