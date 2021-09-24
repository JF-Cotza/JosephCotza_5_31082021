//messages d'erreurs
let erreurs = ['NetworkError when attempting to fetch resource.']
let messageAafficher=['Oups! le serveur est inaccessible. Veuillez nous en excusez.']



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

const fetchPanier=()=>{
    method='POST';
}

