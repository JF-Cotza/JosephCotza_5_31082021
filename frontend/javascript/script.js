
//constantes
const apiLink = 'http://localhost:3000/api/teddies';

//applications fléchées
const storage= ($nom, $value)=> {localStorage.setItem($nom,$value)};
const getItem= ($nom)=>{localStorage.getItem($nom)};
const getType= ($type)=>{document.getElementsByTagName($type)};
const getClass=($class)=>{document.getElementsByClassName($class)};

    //copie template
const copieTemplate=() => {
    if (getType('template')){
        getType('template');
    }
}

    //clone template
const repeat=($what,$where,$howmuch) => {
    const $towrite=[];
    for (let i=0; i<$howmuch; i++){
        $towrite.push($what);
    }
    $where.innerHTML=($towrite);
}

//test
const test=document.getElementById('testwritejs');

repeat(copieTemplate('toto'),test,4);



/*
fetch(apiLink)
    .then(function(res) {
                            test.innerHTML=res;
                            console.log(res);
                        }
        )
    .catch((error)=> 
        {console.log(error.message + ' erreur du fetch ');}
        );

*/