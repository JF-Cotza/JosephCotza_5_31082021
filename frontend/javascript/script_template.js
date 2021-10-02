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

const checkValidity=()=>{
    let inputs=getType('input');
    let countTyped=0;
    let countPatterned=0;
    let countRequired=0;
    let message={'type':'','pattern':'','required':''};
    let toInfo={'message':'','total':''};
    for (let typed of inputs) {
        if (getAttribute(typed, 'required') == false) {
            if (!typed.value || typed.value.length == 0) {
                countRequired++;
            }
        }
        if(getAttribute(typed,'type')){
            if(typed.validity.typeMismatch){
                countTyped++;
            }
        }
        if(getAttribute(typed,'pattern')){
            if(typed.validity.patternMismatch){
                countPatterned++;
            }
        }
    }
    if(countTyped!=0){
        message.type = ` ${countTyped} erreurs de types de saisie /`;
    }
    if (countPatterned!= 0) {
        message.pattern = ` ${countPatterned} erreurs de format de saisie /`;
    }
    if (countRequired!= 0) {
        message.required = ` ${countRequired} champs obligatoires non renseignés`;
    }
    if (countTyped == 0 && countPatterned == 0 && countRequired==0){
        toInfo.message=" Aucune erreur détectée";
        toInfo.total=0;
    }
    else{
        toInfo.message='Il y a : '+message.type+message.pattern+message.required;
        toInfo.total=countTyped+countPatterned+countRequired;
    }

    return toInfo;
}

/*
;
        if(!getId('patt').validity.patternMismatch){
            console.log('pas pattern mismatch');
        }
        else{
            console.log('pattern mismatch');
        }
*/

