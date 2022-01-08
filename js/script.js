window.onload = init;
function init() {
  botonEnvio = document.querySelector(".boton2");
  nuevoItem = document.querySelector('[type="text"]');
  listsTarea = document.getElementById("listaTarea");

  botonEnvio.addEventListener("click", anadir);
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

//-----------------------------------------------


function anadir(e) {
  let lista = document.querySelector("ul");
  evento = e || window.event;
  if (nuevoItem.value == "") {
    evento.preventDefault();
  } else {
    let agregar = document.createElement("div");
    agregar.classList.add("li");
    agregar.innerHTML = '<li>'+ nuevoItem.value +'</li> <button class="check" onclick="botones(this)"> <svg xmlns="http://www.w3.org/2000/svg" width="16"height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg> </button>';
    lista.insertAdjacentElement("beforeend", agregar);
    agregar.addEventListener("dblclick", eliminarLi);//rumina funcion eliminar de a lista 
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
