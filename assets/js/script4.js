let botones = document.querySelectorAll(".leer");

for (let i = 0; i < botones.length; i++) {
  let parrafos = document.querySelectorAll(".parrafo-posta");
  console.log(parrafos);

  botones[i].addEventListener("click", () => {
    if (parrafos[i].style.display === "none") {
      parrafos[i].style.display = "block";
      botones[i].textContent = "ocultar";
    } else {
      parrafos[i].style.display = "none";
      botones[i].textContent = "mostrar";
    }
  });
}