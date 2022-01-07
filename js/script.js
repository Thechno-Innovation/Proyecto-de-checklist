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

const button = document.querySelector(".li .boton");
const div = document.querySelector(".li")
console.log(button);
console.log(div);

button.addEventListener('click', function() {
    const li = button.parentElement;
    var texto = li.firstElementChild;
    if (texto.classList.contains("cheked") == false){
        texto.classList.add("checked");
    }
    else
    {
        texto.classList.remove("checked");
    }
});

const button1 = document.querySelector("ul .li:nth-child(1)");

for()

if 