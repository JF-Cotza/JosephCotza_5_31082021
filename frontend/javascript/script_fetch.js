const fetchCustomer = () => {
    const body = {
        contact: getCustomerDatas(),
        products: idList()};
    
    fetch(apiLink+'/order', {
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

const fetchconfirmation=()=>{
    console.log('confirmation');
}