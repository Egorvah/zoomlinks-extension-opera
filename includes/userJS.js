var background;

opera.extension.onmessage = function(event){
	background = event.source;
}

window.addEventListener("keypress",function(event){
	if(event.ctrlKey == true && event.shiftKey == true && event.keyCode == 26) {   // 26 == 'Z' - opera key code
        console.log('HotKey OK');
        background.postMessage(event.keyCode);

	}
},false);

