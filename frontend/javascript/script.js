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
    let productsend = getItem('id');
    
    fetch(apiLink + '/order', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify({ contact: contacting, products: productsend })
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            
            if (data.orderId){
                let panier = getItem('totalPanier');
                localStorage.clear();
                storeDataReturn(data,panier);
                
                
            }
            else{
                infos.textContent='Commande échouée';
                console.log(data);
            }
    
        })
        .catch((error) => { console.log('catch: ' + error.message) })
    

}

const storeDataReturn= async (param_data,param_amount)=>{

     storage('products ', param_data.products);//data.products est un array qui contient les infos du produit
     storage('contact ', param_data.contact); //data.contact contient les infos client
     storage('order ', param_data.orderId);// data.orderId renvoit un numéro de commande.
     storage('amount', param_amount);
    
    await redirect();
}

const redirect=async()=>{
    window.location.href='./confirmation.html';
//remplissage de la page de confirmation avec le total panier
    let confirmation = getId('confirmation');
    if(confirmation){
        //clicker sur le logo vide le local storage en plus de renvoyer vers l'index
        getId('logo').addEventListener('click',()=>{
            localStorage.clear();
        });
        // on vide le local storage en fermant l'onglet
    // window.onbeforeunload=localStorage.clear();

        getId('customerName').textContent=await getItem('contact').lastName;
        getId('commandNumber').textContent= await getItem('order');
        getId('totalAmount').textContent = await getItem('amount');
    }
}


console.log('check storage x35')