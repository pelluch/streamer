function doClick(e) {
	alert($.label.text);
}

$.index.open();

var activity;

function play(e) {
	try {
		var opened = Ti.Platform.openURL('rtsdasp://edge-cl.edge.mdstrm.com:80/tvn-live/285a5c6dade574d5f111419c85c6cf17_240p');
		if(!opened) {
			alert('No tiene una aplicación que pueda abrirlo');
		}
	}
	catch(err) {
		alert(err.message);
	}
	
	
}

function stop(e) {

}

function onOpen(e) {
	activity = this.activity;
}

function videoPlayer(e) {

}
