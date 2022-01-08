window.onload = init;
function init() {
  botonEnvio = document.querySelector(".boton2");
  nuevoItem = document.querySelector('[type="text"]');
  listsTarea = document.getElementById("listaTarea");

  botonEnvio.addEventListener("click", anadir);
}

function anadir(e) {
  evento = e || window.event;
  if (nuevoItem.value == "") {
    evento.preventDefault();
  } else {
    let lista = document.createElement("div.li");
    lista.innerHTML("");
    listsTarea.appendChild(lista);
    nuevoItem.value = "";
  }
}

// By Dina

function botones(elm) {
  const li = elm.parentElement;
  var texto = li.firstElementChild;
  var button = elm.firstElementChild;

  if (texto.style.textDecoration == "line-through") {
    texto.style.textDecoration = "none";
    button.style.color = "white";
  } else {
    texto.style.textDecoration = "line-through";
    button.style.color = "black";
  }
}

