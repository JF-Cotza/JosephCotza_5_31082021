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
        if (getAttribute(item, 'required')){
            if (!item.value) {
                count++;
                console.log('pas de valeur')
            }
            else{
                console.log('valeur');
            }
        }
    }
    console.log('required:' + count);
}



