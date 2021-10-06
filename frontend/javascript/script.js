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
            let prod=idList(); //génére la liste des id
            let data=getCustomerDatas(); //récupère les données du client
            localStorage.clear();
            storage('totalPanier', totalPanier());
            
            fetchCustomer(prod,data);        
        }
    })
    
}

//remplissage de la page de confirmation
const confirmFill = () => {
    //getId('customerName').textContent=customer.lastName;
    getId('totalAmount').textContent = getItem('totalPanier');
    //console.log(testmess);
}

const fetchCustomer = async (param_prod, param_data) => { //pour les fonctions fléchées on mets le async avant la parenthése de paramétres
    let contacting = await param_data;

         //getCustomerDatas();
    let productsend = await param_prod;
    
    let bodyFonction={
        contact: contacting,
        products : productsend
    }
   
    let promise = fetch(apiLink+'/order', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: 
            JSON.stringify( await bodyFonction)           
        });
    //console.log(promise);
    //console.log('productsend ' + productsend + 'paramdata: ' + param_data.firstName);

    promise
        .then((res)=>{
            console.log('ok: datas:' + param_data.firstName + ' products ' + param_prod)
            console.log(res.json());
        
        })
        .catch((error)=>{
            console.log('catch: '+error.message );
            console.log('error datas:'+ param_data.firstName+' products '+param_prod)
        })
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

console.log('test async 11');