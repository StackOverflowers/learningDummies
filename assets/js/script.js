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

bienvenida.addEventListener("mouseout", () => {
  let name = prompt("por favor ingrese su nombre");
  if (name == null || name == "") {
    bienvenida.textContent = "Bienvenido" + " " + "Sin registrar";
    return alert("no esta registrado");
  }

  localStorage.setItem("nombre", name);
});

function validar() {
  if (localStorage.getItem("nombre")) {
    bienvenida.textContent =
      "Bienvenido" + " " + localStorage.getItem("nombre");
  }
  if (localStorage.getItem("nombre") == null || localStorage.getItem == "") {
    bienvenida.textContent = "Bienvenido" + " " + " " + "sin registrar";
  }
}

validar();
