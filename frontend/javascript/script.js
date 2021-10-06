//variable
let toConfirmation = getId('toConfirmation'); //le bouton commander

if (toConfirmation) {
    toConfirmation.addEventListener('click', (e) => {
        if (checkValidity().total != 0) { //il y a au moins 1 erreur
            e.preventDefault();
            infos.textContent = checkValidity().message;
            console.log(getCustomerDatas())
            console.log(checkValidity().total);
            console.log('totalPanier' + totalPanier());
        }
        else if (checkValidity().total == 0) {  //il n'y a pas d'erreur
            localStorage.clear();
            storage('totalPanier', totalPanier());
            storage('id',idList());
            storage('customer', getCustomerDatas());
            if(getItem('id') && getItem('customer'))
            {
                fetchCustomer();
            }
        }
    })
};

const fetchCustomer = () => {
    let contacting = getItem('customer');   
    let productsend = []//getItem('id');
    
    fetch(apiLink + '/order', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify({ contact: contacting, products: productsend })
        })
        .then((res) => {
            
            let data=res.json();
            if (data.orderId){
                storage('reponse',data);
                window.location.href = "./confirmation.html";
            }
            else{
                infos.textContent='Commande échouée'
            }
    
        })
        .catch((error) => { console.log('catch: ' + error.message) })
    

}


//remplissage de la page de confirmation avec le total panier
const confirmFill = () => {
    getId('totalAmount').textContent = getItem('totalPanier');
}


console.log('check storage x9');