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
            
            //fetchCustomer(getCustomerDatas(), idList());
            /************ test en direct  */
            let apilink = apiLink+'/order';
            

            const prod = () => {
                return ['5beaa8bf1c9d440000a57d94', '5be9c8541c9d440000665243'];
            }

            const conta = () => {
                return {
                    firstName: 'a',
                    lastName: 'b',
                    address: 'c',
                    city: 'd',
                    email: 'a.b@gmail.com'
                };
            }

            let bodyFonction = {
                contact: conta(),
                products: prod()
            }

                            //callingF(bodycontent)
                fetch(apilink, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyFonction)
                })
                    .then((res) => {
                        console.log(apilink);
                        console.log('fetch bodycontent: ' + bodyFonction.contact.firstName + ' ' + bodyFonction.products);

                        return res.json()
                    })
                    .then((value) => {
                        console.log('lac titi caca');
                        console.log(value);

                    })
                    .catch((error) => {
                        console.log(error.message)
                        console.log('test 3')
                    });
            

        }
    })
    
}

console.log('test direct 3');

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