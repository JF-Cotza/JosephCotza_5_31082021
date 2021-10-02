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

        }
        else if (checkValidity().total= 0){  //il n'y a pas d'erreur
           // e.preventDefault();
            console.log(idList()); //génére la liste des id
            console.log(getCustomerDatas()); //récupère les données du client
            storage('totalPanier',totalPanier())
        }
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