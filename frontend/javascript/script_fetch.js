

const fetchCustomer = () => {
    let contacting = {
            firstName: 'string',
            lastName: 'string',
            address: 'string',
            city: 'string',
            email: 'string'
         };
         //getCustomerDatas();
    let productsend = JSON.stringify(['id1']); //idList();
    contacting=JSON.stringify(contacting);
    /*let toSend={'contact':contact,'products':products}
    let bodyConst = JSON.stringify(toSend); //on stringifie toSend
    
    console.log(testmess+' toSend '+toSend.contact+' '+toSend.products );
    console.log('bodyConst: '+bodyConst);
    console.log('bibi');

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
            {contact: contacting, products:productsend}           
        })
    
    promise.then(async (res)=>{
        console.log('lac titi caca');
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
        }      
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



