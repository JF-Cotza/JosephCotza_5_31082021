/*let contacting = {
            firstName: 'string',
            lastName: 'string',
            address: 'string',
            city: 'string',
            email: 'string'
         };*/

/*let toSend={'contact':contact,'products':products}
    let bodyConst = JSON.stringify(toSend); //on stringifie toSend

    console.log(testmess+' toSend '+toSend.contact+' '+toSend.products );
    console.log('bodyConst: '+bodyConst);

    !req.body.contact.firstName ||
    !req.body.contact.lastName ||
    !req.body.contact.address ||
    !req.body.contact.city ||
    !req.body.contact.email ||
    !req.body.products) {
*/
/*
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
*/
    /*(error)=>{
        console.log(error);
    })
    .then(function(value){
        console.log(value.postData.text);
        infos.textContent='test fetch post';
        
    })
    .catch((error)=>mistake(error))
}*/

/*
const fetchCustomer = () => {   
    const  contacted = () => {
        
        return {
        firstName: getCustomerDatas().firstName,
        lastName: getCustomerDatas().lastName,
        address: getCustomerDatas().address,
        city: getCustomerDatas().city,
        email: getCustomerDatas().email}
        };

    let bodyContent={
        contact:contacted() ,
        products: idList()
    }
    
    fetch(apiLink+'/order', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    })
    .then((res)=>{
            console.log(contacted);
            return res.json();
        })
    .then((data)=>{
        console.log('lac titi caca');
        console.log(data);
    })
    .catch((error)=>{console.log('catch: '+error.message )})
}
*/



const fetchCustomer = (param_contact,param_id) => {
    let bodycontent = {
        contact: param_contact,
        products: param_id
    }

fetch(apiLink+'/order', {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodycontent)
    })
    .then(async (res) => {
        console.log('fetch bodycontent: ' + bodycontent.contact.firstName + ' ' + bodycontent.products);

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


console.log('test 12');




