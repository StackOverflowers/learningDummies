let container = document.getElementById("container");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

let favoritos1 = localStorage.getItem('favoritos');
let favoritos2 = localStorage.getItem('favoritos2');
let favoritos3 = localStorage.getItem('favoritos3');
let favoritos4 = localStorage.getItem('favoritos4');
let favoritos5 = localStorage.getItem('favoritos5');
let favoritos6 = localStorage.getItem('favoritos6');

const obtenerFavoritos6 =()=>{
    if(favoritos6== null){
        array = [];
    }
    else{
        array = JSON.parse(favoritos6);
    }
    return array;
}

const obtenerFavoritos5 =()=>{
    if(favoritos5== null){
        array = [];
    }
    else{
        array = JSON.parse(favoritos5);
    }
    return array;
}


const obtenerFavoritos4 =()=>{
    if(favoritos4== null){
        array = [];
    }
    else{
        array = JSON.parse(favoritos4);
    }
    return array;
}

const obtenerFavoritos3 =()=>{
    if(favoritos3== null){
        array = [];
    }
    else{
        array = JSON.parse(favoritos3);
    }
    return array;
}

const obtenerFavoritos2 =()=>{
    if(favoritos2== null){
        array = [];
    }
    else{
        array = JSON.parse(favoritos2);
    }
    return array;
}

const obtenerFavoritos = () =>{
    
    if(favoritos1== null){
        array = [];
    }
    else{
        array = JSON.parse(favoritos1);
    }
    return array;
}   

const pintar = () =>{
 let lista = obtenerFavoritos();
 let html = "";  
 lista.forEach(element => {
     titulo = element.titulo
     html += `<div class="card-body">`
     html += `<h5 class="card-title">${element.titulo}</h5>`
     html += `<p class="card-text">${element.parrafo}</p>`
     html += `<a href="#" class="btn btn-danger" onclick="borrartarea('${titulo}');">Eliminar tip :(</a>`
     html += `</div>`
 });
 container.innerHTML = html;
}

const pintar2 = () =>{
    let lista = obtenerFavoritos2();
    let html2 = "";  
    lista.forEach(element => {
        titulo = element.titulo
        html2 += `<div class="card-body">`
        html2 += `<h5 class="card-title">${element.titulo}</h5>`
        html2 += `<p class="card-text">${element.parrafo}</p>`
        html2 += `<a href="#" class="btn btn-danger" onclick="borrartarea2('${titulo}');">Eliminar tip :(</a>`
        html2 += `</div>`
    });
    container2.innerHTML = html2;
   }

   const pintar3 = () =>{
    let lista = obtenerFavoritos3();
    let html2 = "";  
    lista.forEach(element => {
        titulo = element.titulo
        html2 += `<div class="card-body">`
        html2 += `<h5 class="card-title">${element.titulo}</h5>`
        html2 += `<p class="card-text">${element.parrafo}</p>`
        html2 += `<a href="#" class="btn btn-danger" onclick="borrartarea3('${titulo}');">Eliminar tip :(</a>`
        html2 += `</div>`
    });
    container3.innerHTML = html2;
   }

   const pintar4 = () =>{
    let lista = obtenerFavoritos4();
    let html2 = "";  
    lista.forEach(element => {
        titulo = element.titulo
        html2 += `<div class="card-body">`
        html2 += `<h5 class="card-title">${element.titulo}</h5>`
        html2 += `<p class="card-text">${element.parrafo}</p>`
        html2 += `<a href="#" class="btn btn-danger" onclick="borrartarea4('${titulo}');">Eliminar tip :(</a>`
        html2 += `</div>`
    });
    container4.innerHTML = html2;
   }

   const pintar5 = () =>{
    let lista = obtenerFavoritos5();
    let html2 = "";  
    lista.forEach(element => {
        titulo = element.titulo
        html2 += `<div class="card-body">`
        html2 += `<h5 class="card-title">${element.titulo}</h5>`
        html2 += `<p class="card-text">${element.parrafo}</p>`
        html2 += `<a href="#" class="btn btn-danger" onclick="borrartarea5('${titulo}');">Eliminar tip :(</a>`
        html2 += `</div>`
    });
    container5.innerHTML = html2;
   }

   const pintar6 = () =>{
    let lista = obtenerFavoritos6();
    let html2 = "";  
    lista.forEach(element => {
        titulo = element.titulo
        html2 += `<div class="card-body">`
        html2 += `<h5 class="card-title">${element.titulo}</h5>`
        html2 += `<p class="card-text">${element.parrafo}</p>`
        html2 += `<a href="#" class="btn btn-danger" onclick="borrartarea6('${titulo}');">Eliminar tip :(</a>`
        html2 += `</div>`
    });
    container6.innerHTML = html2;
   }
pintar();
pintar2();
pintar3();
pintar4();
pintar5();
pintar6();