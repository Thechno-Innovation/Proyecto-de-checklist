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
    let lista = document.createElement("li");
    lista.innerHTML = nuevoItem.value;
    listsTarea.appendChild(lista);
    nuevoItem.value = "";
  }
}

// Sin terminar - Dina

// const button = document.querySelector(".li .check");
const div = document.querySelector(".li");
// console.log(button);
console.log(div);

function botones(elm) {
  elm.classList.add("activado");
  console.log(elm);
  const button = document.querySelector(".activado");
}

button.addEventListener("click", function () {
  const li = button.parentElement;
  var texto = li.firstElementChild;
  if (texto.style.textDecoration == "line-through") {
    texto.style.textDecoration = "none";
  } else {
    texto.style.textDecoration = "line-through";
  }
});
