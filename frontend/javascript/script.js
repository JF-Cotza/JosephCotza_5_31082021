//variables

let toConfirmation = getId('toConfirmation');

if (toConfirmation){
    toConfirmation.addEventListener('click',(e)=>{
        if (checkValidity().total!=0){ //il y a au moins 1 erreur
            e.preventDefault();
            infos.textContent = checkValidity().message;
            console.log(getCustomerDatas())
            console.log(checkValidity().total);
            console.log('totalPanier'+ totalPanier());
        }
        else if (checkValidity().total== 0){  //il n'y a pas d'erreur
            //e.preventDefault();
            //console.log(idList()); //génére la liste des id
            //console.log(getCustomerDatas()); //récupère les données du client
            localStorage.clear();
            storage('totalPanier', totalPanier());
            
            fetchCustomer();
            
                 
            

        }
    })
    
}

console.log('test direct 7');

/*
let given_id = '5beaa8bf1c9d440000a57d94';



const testId=()=>{
    fetch(apiLink +'/'+given_id)
    .then(function(res){
        return res.json()
    })
    .then((data)=>{
            console.log(data.name)
   })
    .catch((error)=>console.log("pas d'id : "+error.message))
}

//testingFunction();
testId();
*/

//remplissage de la page de confirmation
const confirmFill = () => {
    //getId('customerName').textContent=customer.lastName;
    getId('totalAmount').textContent = getItem('totalPanier');
    //console.log(testmess);
}

/*
let testmess = 'test fetch 17';

console.log(testmess);
*/
const fetchCustomer = () => {
    let contacting = {
            firstName: 'string',
            lastName: 'string',
            address: 'string',
            city: 'string',
            email: 'string'
         };

         //getCustomerDatas();
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
    let promise = fetch(apiLink+'/order', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: 
            JSON.stringify({contact: contacting, products: productsend})           
        });
    console.log(promise);
    promise
        .then(async (res)=>{
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
        .catch((error)=>{console.log('catch: '+error.message )})
}

    /*(error)=>{
        console.log(error);
    })
    .then(function(value){
        console.log(value.postData.text);
        infos.textContent='test fetch post';
        
    })
    .catch((error)=>mistake(error))
}*/
