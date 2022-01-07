window.onload = init;
        function init(){
            botonEnvio = document.querySelector(".boton2");
            nuevoItem = document.querySelector('[type="text"]');
            listsTarea = document.getElementById("listaTarea");
            
            botonEnvio.addEventListener("click",anadir);
        }

        function anadir(e){
            evento = e || window.event;
            if (nuevoItem.value == ""){
                evento.preventDefault();
            }else{
            let lista = document.createElement("li");
            lista.innerHTML = nuevoItem.value;
            listsTarea.appendChild(lista);
            nuevoItem.value = "";
            }
        }
        