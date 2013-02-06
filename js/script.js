chrome.extension.sendRequest({localStorage: "hotkey"}, function() {

    //console.log(ctrl,shift,alt,code);

        document.addEventListener("keydown", function (e){
        if(e.keyCode == 90 && e.ctrlKey == true && e.shiftKey == true ){   //e.altKey == alt
            e.preventDefault();
            chrome.extension.sendRequest({action:"keydown"});
            return false;
        }
    }, false);
});