console.log('script accedé');
let commande=[];

if (getId('allProducts')) {
    //console.log('tout');
    fetchIndex();
}

if (getId('productCommand')){
    let value=getInUrl('id');
    fetchProduct(value);
    //console.log(value);


}

let test=000;

const afficherLePanier=(param_totalPanier)=>{
    if(param_totalPanier<=0){
        textLook.textContent='Panier vide';
        look.title='panier vide, bouton de panier neutralisé';
        look.addEventListener('click',function(e){
            e.preventDefault();
        })
    }
    else{
        let span=document.createElement('span');
        look.title='afficher le panier';
        span.textContent=`valeur du panier: ${param_totalPanier/100} €`
        look.appendChild(span);
    }
}


afficherLePanier(test);