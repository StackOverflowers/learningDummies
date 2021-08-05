var contador = 1;

//funcion de tiempo

setInterval(function () {
  //se obtiene el elemento radio
  document.getElementById("radio" + contador).checked = true;
  //contador vamos a ir incrementando
  contador++;
  //si contador es mayor a la cantidad de imagenes.
  //contador se restablece a 1.
  if (contador > 6) {
    contador = 1;
  }
  //tiempo de las imagenes
}, 5000);

const bienvenida = document.querySelector("#bienvenida");
const bienveniDiv = document.querySelector("#bienveniDiv");

bienveniDiv.addEventListener("click", function () {
  let name = prompt("Por favor ingrese su nuevo nombre de usuario");
  localStorage.setItem("nombre", name);
  if (name == null || name == "") {
    bienvenida.textContent = "Bienvenido" + " " + "Sin registrar";
  } else {
    bienvenida.textContent = "Bienvenido " + localStorage.getItem("nombre");
  }
});

function validar() {
  if (localStorage.getItem("nombre")) {
    bienvenida.textContent = "Bienvenido " + localStorage.getItem("nombre");
  }
  if (localStorage.getItem("nombre") == null || localStorage.getItem == "") {
    let name = prompt("Por favor ingrese su nombre");
    localStorage.setItem("nombre", name);
    bienvenida.textContent = "Bienvenido " + localStorage.getItem("nombre");
  }
}

validar();
