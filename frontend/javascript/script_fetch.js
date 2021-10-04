

const fetchCustomer = () => {
    let contact = getCustomerDatas();
    let products = idList();
    let toSend={'contact':contact,'products':products}
    const bodyConst = {
        toSend//contact,products           
    };
    console.log(bodyConst);
    const promise = fetch(apiLink+'/order', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(bodyConst) //on stringifie la constante body
    });
    
    promise.then(async (res)=>{
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
            console.log(error);
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



