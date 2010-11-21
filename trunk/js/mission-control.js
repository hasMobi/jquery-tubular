$().ready(function() {
	$('body').tubular('49SKbS7Xwf4'); // f-UGhWj1xww, cool sepia hd
	
	// Play/Pause
	jQuery('#videoPause').click(function() {
		if (jQuery(this).hasClass('videoPaused')) {
			ytplayer.playVideo();
			jQuery(this).removeClass('videoPaused');
		} else {
			ytplayer.pauseVideo();
			jQuery(this).addClass('videoPaused');
		}
		return false;
	});
	
	// Mute/Unmute
	jQuery('#videoMute').click(function() {
		if (jQuery(this).hasClass('videoMute')) {
			ytplayer.mute();
			jQuery(this).removeClass('videoMute');
		} else {
			ytplayer.unMute();
			jQuery(this).addClass('videoMute');
		}
		return false;
	});
	
	// Nuke video (for slow connections -- stops loading entirely)
	jQuery('#videoStop').click(function() {
		ytplayer.stopVideo();
		ytplayer.clearVideo();
		jQuery('#yt-container').hide();
		return false;
	});
});