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
    let countFalse = 0;
    let countTrue=0;
    for (let item of inputs){
        if (getAttribute(item, 'required')==false){
            console.log('check required');
            countFalse++;
        }
        else if (getAttribute(item, 'required') == true) {
            console.log('pas de check required');
            countTrue++;
        }
        else{
            console.log('pas de required détecté')
        }
    }
    console.log('count required :'+countFalse+' not required :'+countTrue);
}



