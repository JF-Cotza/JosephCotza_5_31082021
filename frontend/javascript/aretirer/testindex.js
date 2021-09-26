console.log('testindex');

// pour le template
//variables

//*1) la page sur laquelle on est:
let page = '';
let areaPage = '';
const area = ['.cardLink', '.cardImage', '.cardId', '.cardModelName', '.cardPrice', '.cardDetails', '.cardOption']
        
const cloneSelect = (param_where,param_what) =>{
    return param_where.querySelectorAll(param_what);
}



const cloneCard=(param_info)=>{
    console.log('clonecard');
let template;
let clone;
    template = select('#card');
    clone = node(template);
    
let link = cloneSelect(clone, area[0])
let image = cloneSelect(clone, area[1]);
let id = cloneSelect(clone, area[2]);
let name = cloneSelect(clone, area[3]);
let price = cloneSelect(clone, area[4]);
let detail = cloneSelect(clone, area[5]);
let option = cloneSelect(clone, area[6]);
    link[0].textcontent='##'
    image[0].textcontent=param_info.imageUrl;
    id[0].textcontent=param_info._id;
    name[0].textcontent=param_info.name;
    price[0].textcontent=(param_info.price)/100;
    detail[0].textcontent=param_info.description;
    option[0].textcontent=param_info.color;
    allProducts.appendChild(clone);
}
