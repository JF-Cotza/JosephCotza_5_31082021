// fonction

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
            e.preventDefault();
            console.log(idList()); //génére la liste des id
            console.log(getCustomerDatas()); //récupère les données du client
            localStorage.clear();
            storage('totalPanier', totalPanier());
            console.log('confirmation 9');
            //fetchCustomer();
        }
    })
    
}

let given_id = '5beaa8bf1c9d440000a57d94';

const testId=()=>{
    fetch(apiLink +'/:_id',given_id)
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
