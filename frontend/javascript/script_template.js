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
/* remplacée par checkvalidity
const checkrequired=()=>{
    let inputs = getType('input');
    let countRequired = 0;
    let countTrue=0;
    for (let item of inputs){
        if (getAttribute(item, 'required')==false){
            if(!item.value || item.value.length==0)
            {
                countRequired++;
            }
            else {
            countTrue++;
            }
        } 
    }  
    return countFalse
}

*/



/*
;
        if(!getId('patt').validity.patternMismatch){
            console.log('pas pattern mismatch');
        }
        else{
            console.log('pattern mismatch');
        }
*/

