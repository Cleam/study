$(function(){
	$('.zg-video-player').ZgPlayer();

	// ZgVideoPlayer.init();

	/*var $videoPlayer = $('.zg-video-player'),
		$video = $videoPlayer.find('.J-zvp-video'),	// video zepto对象
		video = $video[0],	// video dom对象
		$loading = $videoPlayer.find('.zvp-overlay-loading'),	// 加载中 zepto对象
		$videoShadow = $videoPlayer.find('.zvp-video-shadow'),	// video覆盖层 zepto对象
		$play = $videoPlayer.find('.zvp-overlay-play'),	// 播放按钮 zopto对象
		$poster = $videoPlayer.find('.zvp-poster'),	// 视频海报 zepto对象
		$playPause = $('.vc-playpause-button'),	// 播放/暂停 zepto对象
		$progressLoaded = $videoPlayer.find('.vc-time-loaded'), // 视频已加载进度 zepto对象
		$progressCurrent = $videoPlayer.find('.vc-time-current'), // 视频已播放进度  zepto对象
		$progressTotal = $videoPlayer.find('.vc-time-total'), // 视频已播放进度  zepto对象
		$timeCurrent = $videoPlayer.find('.vc-time-panel-current'), // 视频已播放时间  zepto对象
		$timeTotal = $videoPlayer.find('.vc-time-panel-total'), // 视频总时间  zepto对象
		$timeHandle = $videoPlayer.find('.vc-time-handle'), // 视频总时间  zepto对象
		$fullscreen = $videoPlayer.find('.vc-fullscreen-button'), // 视频总时间  zepto对象
		ctrlTimer = null,
		startPos = 0,
		touchDis = 0;

	function ZgVideoPlayer(){
		this.canplay = false;	// 视频可以播放标志
		this.duration = 0;	// 总时长
		this.startPlayTime = 0;	// 开始播放时间
		this.init();
	}

	ZgVideoPlayer.prototype.init = function() {
		var scope = this;
		$progressCurrent.width('0');
		$timeCurrent.html('00:00');

		$video.on('loadedmetadata', function(event){	// 元数据加载
			scope.duration = video.duration;
			$timeTotal.html(convert(video.duration));
		}).on('canplaythrough', function(event){	// 可以播放了
			scope.canplay = true;
		}).on('timeupdate', function(){		// 播放时间更新
			// var currentTime = video.currentTime;
			$timeCurrent.html(convert(video.currentTime));
			// $progressCurrent.width((video.currentTime / scope.duration * 100) + '%');
			scope.updateProgress();
		}).on('playing', function(){	//  开始播放了
			$loading.hide();
		}).on('pause', function(){	//  开始播放了
			$playPause.removeClass('vc-pause').addClass('vc-play');
		});

		// 播放按钮点击事件
		$play.on('click', function(){
			$loading.show();
			scope.play();
		});

		$playPause.on('click', function(){
			if(video.paused){
				scope.play();
			} else {
				$play.show();
				scope.pause();
			}
		});

		// 视频点击事件（显示视频操作控件）
		$videoShadow.on('click', function(){
			$videoPlayer.removeClass('zvp-title-controls-hide');
			ctrlTimer && clearTimeout(ctrlTimer);
			ctrlTimer = setTimeout(function(){
				$videoPlayer.addClass('zvp-title-controls-hide');
			}, 3000);
		});

		// 快进快退事件
		var progressWidth = 0, curTime = 0;
		$timeHandle.on('touchstart', function(event){
			startPos = event.targetTouches[0].pageX;
			progressWidth = $progressCurrent.width();
			curTime = video.currentTime;
			scope.pause();
		}).on('touchmove', function(event){
			var endPos = event.targetTouches[0].pageX;
			touchDis = endPos - startPos;
			if(touchDis > 0){
				$progressCurrent.width(progressWidth + touchDis);
				video.currentTime = curTime + (scope.duration * touchDis / $progressTotal.width());
			} else {
				$progressCurrent.width(progressWidth - Math.abs(touchDis));
				video.currentTime = curTime - (scope.duration * Math.abs(touchDis) / $progressTotal.width());
			}
		}).on('touchend', function(event){
			if(touchDis > 0){
				video.currentTime = curTime + (scope.duration * touchDis / $progressTotal.width());
			} else {
				video.currentTime = curTime - (scope.duration * Math.abs(touchDis) / $progressTotal.width());
			}
			scope.play();
		});
	};*/

	/**
	 * 播放
	 * @param  {[type]} ct [description]
	 * @return {[type]}    [description]
	 */
	// ZgVideoPlayer.prototype.play = function(ct) {
	// 	var scope = this;
	// 	if(scope.canplay){
	// 		$play.hide();
	// 		$poster.hide();
	// 		$playPause.removeClass('vc-play').addClass('vc-pause');
	// 		if(ct){
	// 			video.currentTime = ct;
	// 		}
	// 		video.play();
	// 	}
	// };
	/**
	 * 暂停
	 * @return {[type]} [description]
	 */
	// ZgVideoPlayer.prototype.pause = function() {
	// 	var scope = this;
	// 	$playPause.removeClass('vc-pause').addClass('vc-play');
	// 	video.pause();
	// };
	/**
	 * 更新进度条
	 * @return {[type]} [description]
	 */
	// ZgVideoPlayer.prototype.updateProgress = function() {
	// 	$progressCurrent.width($progressTotal.width() * video.currentTime / scope.duration);
	// };
	

	// new ZgVideoPlayer();


	/*function convert(seconds){
		var hh, mm, ss;
		// 传入的时间为空或小于0
		if(seconds == null || seconds < 0 ){
			return;
		}
		seconds = Math.ceil(seconds);
		// 得到小时
		hh = seconds / 3600 | 0;
		seconds = parseInt(seconds) - hh * 3600;
		if(parseInt(hh) < 10){
			hh = '0' + hh;
		}
		// 得到分
		mm = seconds / 60 | 0;
		if(parseInt(mm) < 10){
			mm = '0' + mm;
		}
		// 得到秒
		ss = parseInt(seconds) - mm * 60;
		if(ss < 10){
			ss = '0' + ss;
		}
		return mm + ':' + ss;
		// return hh + ':' + mm + ':' + ss;
	}*/

});