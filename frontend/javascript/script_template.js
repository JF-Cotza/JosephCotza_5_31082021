const totalPanier=()=>{
    let quantity=getClass('quantity');
    let singlePricePanier = getClass('singlePricePanier ');
    let totalList=[]
    for (let input of  quantity )
    {
        if(input.value>0){ //élimine l'entête de tableau
            let id = getAttribute(input, 'keyId');
            for (price of singlePricePanier){
                if(getAttribute(price,'keyId')==id){
                    totalList.push(price.value*input.value);
                }
            }
            console.log('id:' + getAttribute(input, 'keyId') + ' option '+getAttribute(input, 'keyOption')+' qty '+input.value)
            
        }
    }
    console.log("liste des totaux:" + totalList);
}


