//obtengo por medio de queryselector todos los elementos en forma de array
let leer = document.querySelectorAll('.leer');

//por medio de un bucle for recorro todos los botones de la pagina
for(let i = 0 ; i<leer.length;i++){
    //obtengo todos los parrafos a los cuales quiero ocultar , tambien se manejan en forma de array
    let parrafos = document.querySelectorAll('.parrafo-post');
    //a cada boton despes de dar clic se ejecuta la funcion
    leer[i].onclick=function (e){
        e.preventDefault();
        //si parrafos en la posicion de i tiene el style=none , se muestra el parrafo
        //se añaden clases y se remueven clases
        if(parrafos[i].style.display==='none'){
            leer[i].classList.remove("mystyle");
            parrafos[i].style.display="block";
            leer[i].textContent="Ocultar";
            
        }//pero si si tiene el estilo block se oculta y cambia el texto del boton
        else{
            leer[i].classList.add("mystyle");
            parrafos[i].style.display='none';
            leer[i].textContent="Mostrar";
            
           
        }
    }
}

fecha();

function fecha(){
    let publicaciones = document.querySelectorAll('.datos-publicaciones1');
    
    


    for(let i = 0;i<publicaciones.length;i++){
    
    
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    
    if(month < 10){
     publicaciones[i].innerHTML=`${day}-0${month}-${year}`
     publicaciones[i].classList.add("datos-publicaciones");
    }else{
     publicaciones[i].innerHTML= `${day}-${month}-${year}`
     publicaciones[i].classList.add("datos-publicaciones");
    }
    }
}   