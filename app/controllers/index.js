function doClick(e) {
	alert($.label.text);
}

$.index.open();

var url = 'rtsp://edge-cl.edge.mdstrm.com:80/tvn-live/285a5c6dade574d5f111419c85c6cf17_240p';
function play(e) {
	var opened = Ti.Platform.openURL(url);
	if(!opened) {
		alert('No tiene una aplicación que pueda abrirlo');
	}	
}

function stop(e) {

}

function videoPlayer(e) {
	if(OS_ANDROID) {
		var player = Ti.Media.createVideoPlayer({
			fullscreen: true,
			autoplay: true,
			mediaControlStyle : Titanium.Media.VIDEO_CONTROL_FULLSCREEN,
			scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
			url: url
		});
		player.addEventListener('load', function(e) {
			Ti.API.info('loaded');
		})
	} else {
		var player = Ti.Media.createVideoPlayer({
			autoplay: true,
			mediaControlStyle : Titanium.Media.VIDEO_CONTROL_FULLSCREEN,
			scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
			url: url
		});
		var win = Ti.UI.createWindow({

		});
		win.add(player);
		win.addEventListener('open', function(e) {
			player.setFullscreen(true);
		});
		win.open();
	}
}
