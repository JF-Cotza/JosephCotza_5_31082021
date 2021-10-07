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
                storage('products ', data.products);//data.products est un array qui contient les infos du produit
                storage('contact ', data.contact); //data.contact contient les infos client
                storage('order ', data.orderId);// data.orderId renvoit un numéro de commande.
                storage('amount',panier);
                if(getItem('order')){
                window.location.href = "./confirmation.html";}
            }
            else{
                infos.textContent='Commande échouée';
                console.log(data);
            }
    
        })
        .catch((error) => { console.log('catch: ' + error.message) })
    

}


//remplissage de la page de confirmation avec le total panier
let confirmation = getId('confirmation')
if(confirmation){
    //clicker sur le logo vide le local storage en plus de renvoyer vers l'index
    getId('logo').addEventListener('click',()=>{
        localStorage.clear();
    });
    // on vide le local storage en fermant l'onglet
   // window.onbeforeunload=localStorage.clear();

    console.log(getItem('contact'));
    getId('commandNumber').textContent=getItem('order').value;
    getId('totalAmount').textContent = getItem('amount');
}



console.log('check storage x30');