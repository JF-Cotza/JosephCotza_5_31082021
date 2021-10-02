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
        if(res.ok){
            return res.json();
        }
        else{
            console.log('pas de res');
        }
    })
    .then(function(value){
        console.log(value.postData.text);
        infos.textContent='test fetch post';
        
    })
    .catch((error)=>mistake(error))
}

/*
const orderGet=()=>{
fetch(apiLink+'/order')
    .then(function(res){
        console.log('res.json '+res.json());
    })
    .catch((error)=>{
        console.log('pas de data product');
        mistake(error);
    })
}

if(getId('confirmation')){
    orderGet();
}
*/