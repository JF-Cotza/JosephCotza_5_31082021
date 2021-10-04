const fetchCustomer = () => {
    const bodyConst = {
        contact: getCustomerDatas(),
        products: idList()
    };
    fetch(apiLink+'/order', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(bodyConst) //on stringifie la constante body
    })
    .then(function(res){
        storage('datas',res);
        console.log('test 1');
        if(res.ok){
            console.log(res.json());
            return res.json();
        }
        else{
            console.log('pas de res');
        }
    },
    function(error){
        console.log(error);
    })
    .then(function(value){
        console.log(value.postData.text);
        infos.textContent='test fetch post';
        
    })
    .catch((error)=>mistake(error))
}

