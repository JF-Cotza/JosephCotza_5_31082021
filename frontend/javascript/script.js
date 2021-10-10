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
                storeDataReturn(data);                       
            }
            else{
                infos.textContent='Commande échouée';
                console.log(data);
            }
    
        })
        .catch((error) => { console.log('catch: ' + error.message) })
    

}

const storeDataReturn= (param_data)=>{
     storage('products ', param_data.products);//data.products est un array qui contient les infos du produit
     storage('contact ', param_data.contact); //data.contact contient les infos client
      storage('order ', param_data.orderId);// data.orderId renvoit un numéro de commande.
      //storage('amount', param_amount);
      redirect();
}

const redirect=()=>{
  
    console.log('redirect');
    window.location.href = './confirmation.html';
   
}


const filling =  (param_customer, param_order, param_total)=>{
    
    let contening = getId('customerName');
    let contant =  getItem(param_customer).lastName
    contening.textContent = contant;
    
    let command =   getId('commandNumber');
    let order = getItem(param_order);
    command.textContent = order;
    let cost=  getId('totalAmount');
    let payed =  getItem(param_total);
    cost.textContent = payed;
    
    console.log('fill');
    console.log('order: ' + getItem('order'));
}

const clear=()=>{
    //clicker sur le logo vide le local storage en plus de renvoyer vers l'index
    getId('logo').addEventListener('click', () => {
        localStorage.clear();
    });
    // on vide le local storage en fermant l'onglet
    //window.onbeforeunload = localStorage.clear();
}

console.log('check storage x77')

