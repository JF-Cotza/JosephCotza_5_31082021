const totalPanier=()=>{
    let quantity=getClass('quantity');
    let singlePricePanier = getClass('singlePricePanier ');
    let idArray=[];
    for (let input of  quantity )
    {
        if(input.value>0){
            console.log('id:' + getAttribute(input, 'keyId') + ' option '+getAttribute(input, 'keyOption')+' qty '+input.value)
            
        }
    }
}

const idList=()=>{
    let idListing=[]
    for(let value of getClass('card')){
        idListing.push(getAttribute(value,'keyId'))
    }
    console.log(idListing);
}

if (getId('idListen')){
    getId('idListen').addEventListener('click',()=>{
        idList();
    })
}




