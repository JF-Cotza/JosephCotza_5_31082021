//script fetch
const fetchIndex = () => {
        fetch(apiLink)                      // on se connecte à la page apiLInk définie dans Script_generiqique
            .then(function (res) {          //s'il y a des data on continue sinon on passe au catch 
                res.json()                  //ne pas oublier les parenthèses !!!!!!
                    .then((data) => {
                        index(data);        //on crée la carte produit
                    })

                })
            .catch((error) => { console.log(error.message + ' erreur du fetch '); }
            );
}

const fetchProduct= ($prod)=>{
    fetch(apiLink+'?id='+$prod)
        .then(function (result) {
            result.json()
            .then((data)=>{
                    product(data,$prod);
                })
        })    
    }

