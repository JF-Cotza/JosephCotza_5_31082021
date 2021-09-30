const totalPanier=()=>{
    let quantity=getClass('quantity');

    for (let input of  quantity )
    {
    console.log('id:' + getAttribute(input, 'keyId') + ' option '+getAttribute(input, 'keyOption')+' qty '+input.value)
    }
}







