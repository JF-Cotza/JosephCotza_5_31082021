const totalPanier=()=>{
    let quantity=getClass('quantity');
    let singlePricePanier = getClass('singlePricePanier ');
    let totalList=[]
    let total=0;
    for (let input of  quantity )
    {
        if(input.value>0){ //élimine l'entête de tableau
            let id = getAttribute(input, 'keyId');
            for (price of singlePricePanier){
                if(getAttribute(price,'keyId')==id){
                    totalList.push(price.value*input.value);
                }
            }        
        }
    }   
    for(let i=0;i<totalList.length;i++){
        total+=totalList[i];
    }

    getId('totalPanier').textContent='7: '+total;
}


