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
    let lista = document.createElement("ul");
    lista.innerHTML = nuevoItem.value;
    lista.addEventListener("dblclick", eliminarLi);//rumina funcion eliminar de a lista 
    listsTarea.appendChild(lista);
    nuevoItem.value = "";
  }
}

//para eliminar de la lista rumina
function eliminarLi() {
  this.parentNode.removeChild(this);
}

//hecho por javiefunction
const boton = document.getElementById("body");
boton.addEventListener("click", () => {
  boton.className = "body newbackground";
});
const footer = document.getElementById("footer");
boton.addEventListener("click", () => {
  footer.className = "body newfooter";
});
