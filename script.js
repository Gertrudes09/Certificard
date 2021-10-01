let contador = 0;

function mudaTema() {
  let botaoOculto = document.getElementById("botaoOculto");

  document.body.classList.toggle("dark");

  if (contador == 0) {
    botaoOculto.style.visibility = "visible";
    contador++;
    console.log(contador);
  } else {
    botaoOculto.style.visibility = "hidden";
    contador--;
  }
}

function Gaster() {
  window.open("https://gertrudeso9.github.io/SANESS/");
}