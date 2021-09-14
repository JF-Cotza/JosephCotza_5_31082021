console.log('script fetch lancé');



//script fetch
const fetchApp = () => {
    fetch(apiLink)                      // on se connecte à la page apiLInk définie dans Script_generiqique
        .then(function (res) {          //s'il y a des data on continue sinon on passe au catch 
            res.json()                  //ne pas oublier les parenthèses !!!!!!
                .then((data) => {
                    if (getId('allProducts')){
                    index(data);        //on crée la carte produit
                    }
                    else{
                        console.log('pas la bonne page');
                    }    
                })
        })
        .catch((error) => { console.log(error.message + ' erreur du fetch '); }
        );
}


fetchApp();
/*for (let i = 0; i < data.length; i++) {
                        let produit = { '_id': '', 'name': '', 'price': '', 'description': '', 'imageUrl': '', 'colors': '' };
                        let colors = [];
                        for (let param_value of data[i].colors) {
                            colors.push(param_value);
                        }
                        produit._id = data[i]._id;
                        produit.name = data[i].name;
                        produit.price = data[i].price;
                        produit.description = data[i].description;
                        produit.imageUrl = data[i].imageUrl;
                        produit.colors = colors;


                        cloneCard(produit);
                    */


                        //prod.push(produit);
                        //storage('produit'+i, produit);
                    //};
                    //console.log(prod[0]); fonctionne !



/*console.log(champs); //test affichage console tableau simple
            console.log(testTab);// test affichage console tableau avec objet
            console.log(testTab[0].color);//resultat attendu: blue
            console.log(prod[0]);
            let item = getItem('produit0')
            console.log('get: '+item._id);
            */