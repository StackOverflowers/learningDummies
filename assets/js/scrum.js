let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let add3 = document.getElementById("add3");
let add4 = document.getElementById("add4");
let add5 = document.getElementById("add5");
console.log(add5);
let array = [];
let obj = {};

add1.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t7").textContent;
    let parrafo = document.getElementById("p7").textContent;
    getData(titulo,parrafo);
}

add2.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t2").textContent;
    let parrafo = document.getElementById("p2").textContent;
    getData(titulo,parrafo);
}

add3.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t3").textContent;
    let parrafo = document.getElementById("p3").textContent;
    console.log(titulo,parrafo)
    getData(titulo,parrafo);
}

add4.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t4").textContent;
    let parrafo = document.getElementById("p4").textContent;
    getData(titulo,parrafo);
}

add5.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t5").textContent;
    let parrafo = document.getElementById("p5").textContent;
    console.log(titulo,parrafo)
    getData(titulo,parrafo);
}





const getData = (titulo,parrafo) =>{
    this.titulo = titulo;
    this.parrafo = parrafo;
    for(let i = 0; i<array.length;i++){
        if(array[i].titulo==titulo){
           return alert("ese titulo ya fue añadido a sus favoritos recargue la pagina por favor");
        }
    }

    obj={
        titulo:titulo,
        parrafo:parrafo
    }

    array.push(obj);
    localStorage.setItem('favoritos4',JSON.stringify(array));

}
