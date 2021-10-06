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
            fetchCustomer();
        }
    })
};

const fetchCustomer = () => {
    let contacting = {
        firstName: 'string',
        lastName: 'string',
        address: 'string',
        city: 'string',
        email: 'string'
    };

    
    let productsend = idList();
    contacting = contacting;

    /*let toSend={'contact':contact,'products':products}
    let bodyConst = JSON.stringify(toSend); //on stringifie toSend
    
    console.log(testmess+' toSend '+toSend.contact+' '+toSend.products );
    console.log('bodyConst: '+bodyConst);

    !req.body.contact.firstName ||
    !req.body.contact.lastName ||
    !req.body.contact.address ||
    !req.body.contact.city ||
    !req.body.contact.email ||
    !req.body.products) {

    */
    let promise = fetch(apiLink + '/order', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify({ contact: contacting, products: productsend })
    });
    console.log(promise);

    if(productsend!=[])
    {
    promise
        .then(async (res) => {
            console.log(res.json());
            /*
            try{
                //storage('datas',res);
                console.log('in promise '+testmess);
                if(res.ok){
                    console.log(res.json());
                    return res.json();
                }
                else{
                    console.log('pas de res');
                }
            }    
            catch(error){
                console.log(error.message);
            }*/
        })
        .catch((error) => { console.log('catch: ' + error.message) })
    }

}


//remplissage de la page de confirmation avec le total panier
const confirmFill = () => {
    getId('totalAmount').textContent = getItem('totalPanier');
}


console.log('check storage x1');