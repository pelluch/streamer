function doClick(e) {
	alert($.label.text);
}

$.index.open();

var url = 'rtsp://edge-cl.edge.mdstrm.com:80/tvn-live/285a5c6dade574d5f111419c85c6cf17_240p';
function play(e) {
	var opened = Ti.Platform.openURL(url);
	if(!opened) {
		videoPlayer();
	}
}


function videoPlayer() {
	if(OS_ANDROID) {
		var player = Ti.Media.createVideoPlayer({
			fullscreen: true,
			autoplay: true,
			mediaControlStyle : Titanium.Media.VIDEO_CONTROL_FULLSCREEN,
			scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
			url: url
		});
		var label = Ti.UI.createLabel({
			text: "Cargando...",
			color: 'white'
		});
		player.add(label);
		player.addEventListener('load', function(e) {
			Ti.API.info('loaded');
			label.hide();
		});
	} else {
		var player = Ti.Media.createVideoPlayer({
			mediaControlStyle : Titanium.Media.VIDEO_CONTROL_FULLSCREEN,
			scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
			url: url
		});
		var win = Ti.UI.createWindow({
			backgroundColor: 'black'
		});
		var label = Ti.UI.createLabel({
			text: "Cargando...",
			color: 'white'
		});
		win.add(player);
		win.add(label);
		win.addEventListener('open', function(e) {
			player.setFullscreen(true);
			player.addEventListener('load', function(e) {
				Ti.API.info('loaded');
				label.hide();
			});
			player.play();
		});
		win.open();
	}
}
