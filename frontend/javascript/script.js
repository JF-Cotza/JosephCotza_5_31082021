const apiLink= 'localhost:3000/api/teddy'; //2erreurs
//const apiLink= 'localhost:3000/api/teddies'; //2erreurs
//const apiLink= 'localhost/api/teddy' //3erreurs


fetch(apiLink)
    .then((res) => { console.log(res);})
    .catch((error)=> 
        {console.log(error.message + ' erreur du fetch ');}
        );