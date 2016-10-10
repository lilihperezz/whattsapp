window.addEventListener("load",main);
var inputMensajes = document.getElementById("mensajes");
var chat = document.getElementById("chat");

function main(){
 	inputMensajes.addEventListener("keydown",InputMensajes);
 }
function InputMensajes(e){
	var tecla = e.keyCode;
	if (tecla == 13){
	 	var windowMessage =  document.createElement("div");
	 	var divHora = document.createElement("div"); 
	 	var horaPub = fechaPub();
		
	 	windowMessage.innerText = inputMensajes.value;
	 	divHora.textContent = horaPub;
	 	chat.appendChild(windowMessage);
	 	windowMessage.appendChild(divHora);
	}
}
function fechaPub(){
 	var fecha = new Date();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();
    return hora + ":" + minuto ;
}
