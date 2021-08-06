
/*
function borrartarea(titulo){
    alert("Se ha eliminado el tip =/");
    let tips = JSON.parse(localStorage.getItem('favoritos'));
    console.log(tips)
    for(let i = 0 ; i<tips.length;i++){
        if(tips[i].titulo == titulo){
            tips.splice(i,1);
        }
    }
    localStorage.setItem('favoritos',JSON.stringify(tips));
}
*/

/*
let boton = document.querySelectorAll(".btn");
for(let i = 0 ; i<boton.length;i++){
    boton2 = boton[i];
    boton2.onclick = function(){
       let favoritos1 = obtenerFavoritos();
        for(let k =0 ; k<favoritos1.length;k++){
            console.log(favoritos1[k].titulo)
            if(favoritos1[k].titulo == titulo){
                favoritos1.splice(i,1);
            }
        }
        localStorage.setItem('favoritos',JSON.stringify(favoritos1));
    }
    
}
*/


function borrartarea(titulo){
    alert("Se ha eliminado el tip =/");
    favoritos1 = JSON.parse(localStorage.getItem('favoritos'));
    
    for(let i = 0 ; i<favoritos1.length;i++){
        if(favoritos1[i].titulo == titulo){
            favoritos1.splice(i,1);
        }
    }
    localStorage.setItem('favoritos',JSON.stringify(favoritos1));
}


function borrartarea2(titulo){
    alert("Se ha eliminado el tip =/");
    favoritos2 = JSON.parse(localStorage.getItem('favoritos2'));
    
    for(let i = 0 ; i<favoritos2.length;i++){
        if(favoritos2[i].titulo == titulo){
            favoritos2.splice(i,1);
        }
        else if(favoritos2[i]==[]){
            localStorage.clear();
        }
    }
    localStorage.setItem('favoritos2',JSON.stringify(favoritos2));
}

function borrartarea3(titulo){
    alert("Se ha eliminado el tip =/");
    favoritos3 = JSON.parse(localStorage.getItem('favoritos3'));
    
    for(let i = 0 ; i<favoritos3.length;i++){
        if(favoritos3[i].titulo == titulo){
            favoritos3.splice(i,1);
        }
        else if(favoritos3[i]==[]){
            localStorage.clear();
        }
    }
    localStorage.setItem('favoritos3',JSON.stringify(favoritos3));
}

function borrartarea4(titulo){
    alert("Se ha eliminado el tip =/");
    favoritos4 = JSON.parse(localStorage.getItem('favoritos4'));
    
    for(let i = 0 ; i<favoritos4.length;i++){
        if(favoritos4[i].titulo == titulo){
            favoritos4.splice(i,1);
        }
        else if(favoritos4[i]==[]){
            localStorage.clear();
        }
    }
    localStorage.setItem('favoritos4',JSON.stringify(favoritos4));
}


function borrartarea5(titulo){
    alert("Se ha eliminado el tip =/");
    favoritos5 = JSON.parse(localStorage.getItem('favoritos5'));
    
    for(let i = 0 ; i<favoritos5.length;i++){
        if(favoritos5[i].titulo == titulo){
            favoritos5.splice(i,1);
        }
        else if(favoritos5[i]==[]){
            localStorage.clear();
        }
    }
    localStorage.setItem('favoritos5',JSON.stringify(favoritos5));
}

function borrartarea6(titulo){
    alert("Se ha eliminado el tip =/");
    favoritos6 = JSON.parse(localStorage.getItem('favoritos6'));
    
    for(let i = 0 ; i<favoritos6.length;i++){
        if(favoritos6[i].titulo == titulo){
            favoritos6.splice(i,1);
        }
        else if(favoritos6[i]==[]){
            localStorage.clear();
        }
    }
    localStorage.setItem('favoritos6',JSON.stringify(favoritos6));
}