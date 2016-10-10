
window.addEventListener("load",main);
function main(){
	var inputMensajes = document.getElementById("mensajes");
	inputMensajes.addEventListener("keydown",InputMensajes);
}
function InputMensajes(e){
	var tecla = e.keyCode;
	enterInput(tecla);
	var inputMensajes = document.getElementById("mensajes");
	var windowMessage =  document.createElement("div");
	var chat = document.getElementById("chat");
	var divHora = document.createElement("div"); 
	var horaPub = fechaPub();
	
	windowMessage.innerText = inputMensajes.value;
	divHora.textContent = horaPub;
	chat.appendChild(windowMessage);
	windowMessage.appendChild(divHora);
}
function enterInput(tecla) {
	var inputMensajes = document.getElementById("mensajes");
        if (tecla == 13) {
        inputMensajes();
    }
}
function fechaPub(){
	var fecha = new Date();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();
        return hora + ":" + minuto + ":" + segundo;
	}


