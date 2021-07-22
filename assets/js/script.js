var contador = 1 ;


//funcion de tiempo

setInterval(function(){
    //se obtiene el elemento radio
    document.getElementById('radio' + contador).checked = true;
    //contador vamos a ir incrementando
    contador ++;
    //si contador es mayor a la cantidad de imagenes.
    //contador se restablece a 1.
    if(contador>6){
        contador = 1;
    }
    //tiempo de las imagenes
},5000);



const bienvenida = document.getElementById('bienvenida');

function actualizarNombre(){
    let name = prompt("Por favor Introduzca su nombre");
    name = name.toLocaleLowerCase();
    if(name===null || name===""){
        validar();
        alert("No ingreso autenticacion");
    }
    bienvenida.textContent="Bienvenido : " + "" + name;
    localStorage.setItem("name",name);
}

function validar(){
    if(localStorage.getItem("name")){
        bienvenida.textContent="Bienvenido : " + "" + localStorage.getItem("name");
    }
    else{
        bienvenida.textContent="Bienvenido : " + "" + "sin autenticar";
    }
}

validar();

actualizarNombre();




