$(function(){

	var uidUrl = 'http://toutiao.eastday.com/getwapdata/getuid',			// 获取uid
		videoLogUrl = 'http://toutiao.eastday.com/getwapdata/videoact';		// 视频统计接口

	function Video(){
		this.qid = GLOBAL.Et.qid || GLOBAL.Util.getQueryString('qid') || Cookies.get('qid');	// 渠道ID
		this.userId = '';
		this.osType = GLOBAL.Util.getOsType();
		this.browserType = GLOBAL.Util.getBrowserType();
		this.init();
	}

	Video.prototype.init = function() {
		var scope = this;
		/* 获取、存储qid */
		if(scope.qid){
			scope._setQid(scope.qid);
		} else {
			// 无qid的情况，删除cookie中qid
			Cookies.remove('qid', {path: '/', domain: 'eastday.com'});
		}
		/* 获取、存储uid */
		scope.userId = scope._getUid();
		if(!scope.userId){
			scope._setUid();
		}
	};

	Video.prototype._setQid = function(qid) {
		if(qid){
			Cookies.set('qid', qid, { expires: 3, path: '/', domain: 'eastday.com'});
		}
	};

	Video.prototype._getQid = function(qid) {
		var qid = Cookies.get('qid');
		return qid ? qid : '';
	};

	Video.prototype._setUid = function(qid) {
		var scope = this;
        $.ajax({
            url: uidUrl,
            dataType: 'jsonp',
            data: {
                softtype: 'news',
                softname: 'eastday_wapnews',
            },
            jsonp: 'jsonpcallback',
            success: function(msg) {
                try {
                    scope.userId = msg.uid;
                    Cookies.set('user_id', scope.userId, { expires: 365, path: '/', domain: 'eastday.com'});
                    // wsCache.set('user_id', scope.userId, {exp: 365 * 24 * 3600});
                } catch(e) {
                    console.error(e);
                }
            },
            error: function(e){
            	console.error(e);
            }
        });
	};

	Video.prototype._getUid = function(qid) {
		var uid = Cookies.get('user_id');
    	// var uid = wsCache.get('user_id');
        return uid ? uid : '';
	};

	/**
     * 发送视频操作日志
     * @param  {String} param 必需 - 参数(qid,uid,osType,browserType,url,duration,playingTime,currentTime,action)
     */
    Video.prototype.sendVideoLog = function(param){
    	if(!param){
    		return;
    	}
		$.ajax({
			url: videoLogUrl,
			data: {
				param: param
			},
			dataType: 'jsonp',
			jsonp: 'jsonpcallback',
			success: function(){},
			error: function(){}
		});
	}


	/**
     * video事件监听
     * @param {Object} $video video对象
     * @return {[type]}        [description]
     */
    Video.prototype.addVideoListener = function($video) {
    	var scope = this;
    	// 播放事件
    	$video.on('playing', function(event){
			try {
				var $video = $(event.target),
					video = $video[0],
					src = video.currentSrc,
					duration = Math.floor(video.duration * 1000),
					idx = $video.attr('data-idx'),
					videoType = $video.attr('data-type'),
					playingTime = $video.attr('data-playingTime') ? $video.attr('data-playingTime') : 'null',
					currentTime = Math.floor(video.currentTime * 1000),	// 当前播放时间位置
					param = scope.qid + '\t' + scope.userId + '\t' + 'news' + '\t' + 'eastday_wapnews' + '\t' + 'null' + '\t' + videoType + '\t' + scope.osType + '\t' + idx + '\t' + scope.browserType + '\t' + src + '\t' + duration + '\t' + playingTime + '\t' + currentTime + '\tplay';
				// 用于记录实际播放时长
				$video.attr('data-updateTime', +new Date());
				scope.sendVideoLog(param);
			} catch(e){
				console.log('Event playing has error!!!', e);
			}
		});
    	// 暂停事件
		$video.on('pause', function(event){
			try {
				var $video = $(event.target),
					video = $video[0],
					src = video.currentSrc,
					duration = Math.floor(video.duration * 1000),
					idx = $video.attr('data-idx'),
					videoType = $video.attr('data-type'),
					playingTime = $video.attr('data-playingTime') ? $video.attr('data-playingTime') : 'null',
					currentTime = Math.floor(video.currentTime * 1000),	// 当前播放时间位置
					param = scope.qid + '\t' + scope.userId + '\t' + 'news' + '\t' + 'eastday_wapnews' + '\t' + scope.newsType + '\t' + videoType + '\t' + scope.osType + '\t' + idx + '\t' + scope.browserType + '\t' + src + '\t' + duration + '\t' + playingTime + '\t' + currentTime + '\tpause';
				// 用于记录实际播放时长
				scope.sendVideoLog(param);
			} catch(e){
				console.log('Event pause has error!!!', e);
			}
		});
		// 播放时间更新事件（记录实际播放时间）
		$video.on('timeupdate', function(event){
			try {
				var $video = $(event.target),
		      		updateTime = parseInt($video.attr('data-updateTime'), 10) || (+new Date()),
		      		playingTime = parseInt($video.attr('data-playingTime'), 10) || 0,
		      		now = +new Date();
	  			// 播放时间
	  			playingTime = playingTime + now - updateTime;
	  			$video.attr('data-playingTime', playingTime);
				$video.attr('data-updateTime', now);
			} catch(e){
				console.log('Event timeupdate has error!!!', e);
			}
		});
    };

    new Video();

});