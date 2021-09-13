
//constantes
//const apiLink = 'http://localhost:3000/api/teddies/';
const apiLink = 'http://localhost:3000/api/';//teddies/'

//applications fléchées
const storage       =($nom, $value) => {return localStorage.setItem($nom,$value)};
const getItem       =($nom)         => {return localStorage.getItem($nom)};
const getType       =($type)        => {return document.getElementsByTagName($type)};
const getClass      =($class)       => {return document.getElementsByClassName($class)};
const getId         =($id)          => {return document.getElementById($id)};
const select        =($value)       => {return document.querySelector($value)};
const node          =($value)       => {return document.importNode($value.content,true)};
//test data de test.js
const test = document.getElementById('testwritejs');


// pour le template
    //variables
    let area=[];
//*1) la page sur laquelle on est:
        let page='';
        let areaPage='';
        const whereWeAre=() => {
            if (getId('allProducts')){
                page='allProducts';
                areaPage = getId('allProducts');
                const areaClass = ['.cardLink', '.cardImage', '.cardId', '.cardModelName','cardPrice']
                area=areaClass;
                //console.log(getId('allProducts'));
                
            }
            else{/*paramétrer en fonction des autres pages*/}
            selectTemplate();
        }

    //*2 récupérer le template
        let template;
        const selectTemplate=()=>{
            if(page=='allProducts'){
                template=select('#card');
                
                //console.log(template);
                //console.log(getId('card'));
           }
           else {/*à paramétrer en fonction des autres pages*/}
           clone(template);
        }

    //*3 creation du clone
        let copy;
        const clone=($what)=>{
            copy = node($what);
            //console.log('clone: '+copy);
            cloneArea(copy);
        };
    
    //* définition des zones du clone
        const cloneSelect=($where,$what)=>{
          return  $where.querySelectorAll($what); //ne pas oublier les returns pour renvoyer des valeurs si pas de variables globales...
        }

        const cloneArea=($where)=>{
            let link=cloneSelect($where,area[0])
            //let link =$where.querySelectorAll(area[0]);
            let image=cloneSelect($where,area[1]);
            let id=cloneSelect($where,area[2]);
            let name = cloneSelect($where, area[3]);
            let price=cloneSelect($area[4]);
            //console.log(link);
        }
// réalisation 
whereWeAre();

//console.log('page: ' + page + ' areaPage: ' + areaPage);






// test récup data page test.js
let a='';

const couleurTest=['red','yellow','white','pink','orange','green','blue']

const testValue=()=>{
                    for(let i=0; i<teddies.length; i++){
                    a+=`<div style='background-color:${couleurTest[i]}'>
                    </br>couleurs: ${teddies[i]['colors']} 
                    </br> id: ${teddies[i]['_id']} 
                    </br> nom: ${teddies[i]['name']} 
                    </br> prix: ${teddies[i]['price']/100}€
                    </br> image: ${teddies[i]['imageUrl']}
                    </br> description: id: ${teddies[i]['description']}
                    </div>
                    </br></br>`;
                }
                return a;
}



test.innerHTML=testValue();

/*
const consolefetch=($result)=>{
    let res=$result;
    console.log(`
        test1 + ${res} /
        test2 + ${res['teddies']}/
        test3 + ${res['teddies'][0]}/
        test' + ${res['teddies'][0]['id']}/
    `);
}

const fetchApp= ()=>{
    fetch(apiLink)
        .then(function(res) {
                                consolefetch(res.json)
                            }
            )
        .catch((error)=> 
            {console.log(error.message + ' erreur du fetch ');}
            );
}

fetchApp();*/