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




//si on clique sur le bouton idListen, on génere la liste des id
if (getId('idListen')){
    getId('idListen').addEventListener('click',()=>{
        idList();
    })
}




