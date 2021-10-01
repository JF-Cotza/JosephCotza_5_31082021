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
    let required=getAttribute(getType('input','required'));
    let count=0;
    for (item of required){
        if(item.value=''){
            count++
        }
    }
    console.log('required:' +count);
}



