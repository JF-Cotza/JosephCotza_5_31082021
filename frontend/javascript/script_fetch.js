//script fetchIndex : on récupére tous les datas du serveur pour aficher les produits
const fetchIndex = () => {
        fetch(apiLink)                      // on se connecte à la page apiLInk définie dans Script_generiqique
            .then(function (res) {          //s'il y a des data on continue sinon on passe au catch 
                res.json()                  //ne pas oublier les parenthèses !!!!!!
                    .then((data) => {
                        index(data);        //on crée la carte produit
                    })

                })
            .catch((error) => { 
                mistake(error);
            })        
}

const fetchProduct= ($prod)=>{
    fetch(apiLink+'?id='+$prod)
        .then(function (result) {
            result.json()
            .then((data)=>{
                    product(data,$prod);
                })
        })
        .catch((error) => { mistake(error);}
        );
    }

const fetchAffichagePanier=()=>{
    fetch(apiLink)                      
        .then(function (res) {           
            res.json()                  
                .then((data) => {
                    panierExplorer(data);        
                })

        })
        .catch((error) => {
            mistake(error);
        })
}

/*
const fetchPanier=($value)=>{
    fetch(apiLink, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonBody)
        
    });
        
}
*/
const fetchCustomer = () => {
    const body = {contact: getCustomerDatas(),
        productsId: ['id', 'vfdnkvjfbkjdjkbjf', 'vbfuigfbgsg', 'kjdnsnbkb', 'cdhvdsvuk']};

    fetch(apiLink, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body) //on stringifie la constante body
    })
    .then(function(res){
        if(res.ok){
            console.log('resjson-post:');
            console.log(res.json());
            return res.json();

        }
        else{
            console.log('pas de res');
        }
    })
    .then(function(value){
        console.log(value.postData.text);
    })
    .catch((error)=>mistake(error))
}