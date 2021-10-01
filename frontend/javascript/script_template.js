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

const checkrequired=()=>{
    let inputs = getType('input');
    let count = 0;
    for (let item of inputs){
        if (getAttribute(item, 'required')==false){
            console.log('check required');
        }
        else if (getAttribute(item, 'required') == true) {
            console.log('pas de check required');
        }
        else{
            console.log('pas de required détecté')
        }
    }
}



