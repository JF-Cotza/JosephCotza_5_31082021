
const apiLink = 'http://localhost:3000/api/teddies';
const storage= ($nom, $value)=> localStorage.setItem($nom,$value)
const getItem= ($nom)=>localStorage.getItem($nom)

fetch(apiLink)
    .then((res) => {
                        let value=res[0];
                        console.log('longueur: '+value.length);
                        for (let i=0; i<res.length; i++){
                            console.log(i+' '+res[i]);
                        }
                        
                    })
    .catch((error)=> 
        {console.log(error.message + ' erreur du fetch ');}
        );

