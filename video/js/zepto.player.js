/*!
 * Zepto 播放器插件
 *
 * @author lizhigao
 */

/**
 * 让插件支持 AMD 标准的模块加载模式
 *
 * 如果不需要支持 AMD，也可以直接使用：
 * (function($){ ... })(Zepto);
 *
 * 将插件封装在闭包里面，防止外部污染
 */
;
(function (factory) {

    // 如果要兼容 CMD 等其他标准，可以在下面添加条件，比如：
    // CMD: typeof define === 'function' && define.cmd
    // UMD: typeof exports === 'object'
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['zepto'], factory);
    } else {
        factory(Zepto);
        // 如果要兼容 Zepto，可以改写，比如使用：factory(Zepto||jQuery)
    }
}(function ($) {
    'use strict';
    var $videoPlayer = null,
        $video = null, // video zepto对象
        video = null,  // video dom对象
        $loading = null,   // 加载中 zepto对象
        $videoShadow = null,  // video覆盖层 zepto对象
        $play = null, // 播放按钮 zopto对象
        $poster = null, // 视频海报 zepto对象
        $playPause = null, // 播放/暂停 zepto对象
        $progressLoaded = null, // 视频已加载进度 zepto对象
        $progressCurrent = null, // 视频已播放进度  zepto对象
        $progressTotal = null, // 视频已播放进度  zepto对象
        $timeCurrent = null, // 视频已播放时间  zepto对象
        $timeTotal = null, // 视频总时间  zepto对象
        $timeHandle = null, // 视频总时间  zepto对象
        $fullscreen = null, // 全屏播放  zepto对象
        $gg = null, // 广告  zepto对象
        ctrlTimer = null,
        startPos = 0,
        touchDis = 0,
        duration = 0,
        canplay = false;

    /**
     * 定义插件的构造方法
     * @param element 选择器对象
     * @param options 配置项
     * @constructor
     */
    var Plugin = function (element, options) {

        // 合并参数设置
        this.options = $.extend({}, Plugin.defaults, options);

        //将选择器对象赋值给插件，方便后续调用
        this.$element = $(element);

        $videoPlayer = this.$element;
        $video = $videoPlayer.find('.J-zvp-video'); // video zepto对象
        video = $video[0];  // video dom对象
        $loading = $videoPlayer.find('.zvp-overlay-loading');   // 加载中 zepto对象
        $videoShadow = $videoPlayer.find('.zvp-video-shadow');  // video覆盖层 zepto对象
        $play = $videoPlayer.find('.zvp-overlay-play'); // 播放按钮 zopto对象
        $poster = $videoPlayer.find('.zvp-poster'); // 视频海报 zepto对象
        $playPause = $videoPlayer.find('.vc-playpause-button'); // 播放/暂停 zepto对象
        $progressLoaded = $videoPlayer.find('.vc-time-loaded'); // 视频已加载进度 zepto对象
        $progressCurrent = $videoPlayer.find('.vc-time-current'); // 视频已播放进度  zepto对象
        $progressTotal = $videoPlayer.find('.vc-time-total'); // 视频已播放进度  zepto对象
        $timeCurrent = $videoPlayer.find('.vc-time-panel-current'); // 视频已播放时间  zepto对象
        $timeTotal = $videoPlayer.find('.vc-time-panel-total'); // 视频总时间  zepto对象
        $timeHandle = $videoPlayer.find('.vc-time-handle'); // 视频总时间  zepto对象
        $fullscreen = $videoPlayer.find('.vc-fullscreen-button'); // 全屏播放  zepto对象
        $gg = $videoPlayer.find('.zvp-gg');

        //进行一些初始化工作
        this.init();
    };

    /**
     * 插件名称，即调用时的名称（$.fn.pluginName）
     * @type {string}
     */
    Plugin.pluginName = "ZgPlayer";

    /**
     * 插件缓存名称，插件通过 data 方法缓存在 dom 结构里，存储数据的名称
     * @type {string}
     */
    Plugin.dataName = "ZgPlayerDataName";

    /**
     * 插件版本
     * @type {string}
     */
    Plugin.version = "1.0.0";

    /**
     * 插件默认配置项
     * @type {{}}
     */
    Plugin.defaults = {};

    /**
     * 定义插件的方法
     * @type {{}}
     */
    Plugin.prototype = {
        /**
         * 初始化
         * @return {[type]} [description]
         */
        init: function () {
            var scope = this;

            $progressCurrent.width('0');
            $timeCurrent.html('00:00');

            $video.on('loadedmetadata', function(event){    // 元数据加载
                duration = video.duration;
                $timeTotal.html(scope._convert(video.duration));
            }).on('canplaythrough', function(event){    // 可以播放了
                canplay = true;
            }).on('timeupdate', function(){     // 播放时间更新
                $timeCurrent.html(scope._convert(video.currentTime));
                // scope.updateProgress();
            }).on('playing', function(){    //  开始播放了
                $loading.hide();
            }).on('pause', function(){  //  开始播放了
                $playPause.removeClass('vc-pause').addClass('vc-play');
            });

            // 播放按钮点击事件
            $play.on('click', function(){
                // window["bdInsertApi"].triggleAd("u2633485");
                // window["bdInsertApi"].triggleAd("u2633485",function(){
                    // $loading.show();
                    // scope.play();
                // });
                // 播放广告
                $gg.show();
                var $sec = $gg.find('.seconds'),
                    total = parseInt($sec.text()),
                    timer = setInterval(function(){
                        $sec.text(--total);
                        if(total <= 0){
                            // 关闭定时器、广告
                            clearInterval(timer);
                            $gg.hide();
                            // 开始播放视频
                            $loading.show();
                            scope.play();
                        }
                    }, 1000);


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
                scope.updateProgress();
                scope.updateLoaded();
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
                    video.currentTime = curTime + (duration * touchDis / $progressTotal.width());
                } else {
                    $progressCurrent.width(progressWidth - Math.abs(touchDis));
                    video.currentTime = curTime - (duration * Math.abs(touchDis) / $progressTotal.width());
                }
            }).on('touchend', function(event){
                if(touchDis > 0){
                    video.currentTime = curTime + (duration * touchDis / $progressTotal.width());
                } else {
                    video.currentTime = curTime - (duration * Math.abs(touchDis) / $progressTotal.width());
                }
                scope.play();
            });

            // 全屏播放
            $fullscreen.on('click', function(event){
                if($fullscreen.hasClass('vc-fullscreen')){
                    $fullscreen.removeClass('vc-fullscreen').addClass('vc-unfullscreen');
                    $videoPlayer.addClass('fullscreen');
                } else {
                    $fullscreen.removeClass('vc-unfullscreen').addClass('vc-fullscreen');
                    $videoPlayer.removeClass('fullscreen');
                }
            });
        },

        /**
         * 播放
         * @param  {[type]} ct [description]
         * @return {[type]}    [description]
         */
        play: function (ct) {
            if(canplay){
                $play.hide();
                $poster.hide();
                $playPause.removeClass('vc-play').addClass('vc-pause');
                $video.removeClass('video-hide');
                if(ct){
                    video.currentTime = ct;
                }
                video.play();
            }
        },

        /**
         * 暂停
         * @return {[type]} [description]
         */
        pause: function () {
            $playPause.removeClass('vc-pause').addClass('vc-play');
            video.pause();
        },

        /**
         * 更新进度条(播放时间进度更新)
         * @return {[type]} [description]
         */
        updateProgress: function () {
            $progressCurrent.width($progressTotal.width() * video.currentTime / duration);
        },

        /**
         * 更新进度条(缓存进度更新)
         * @return {[type]} [description]
         */
        updateLoaded: function(){
            var buffered = video.buffered.end(0);
            $progressLoaded.width($progressTotal.width() * buffered / duration);
        },

        /**
         * 时间转换方法
         * @param  {[type]} seconds 时间（s）
         * @return {[type]}         mm:ss
         */
        _convert: function(seconds){
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
        }
    };

    /**
     * 缓存同名插件
     */
    var old = $.fn[Plugin.pluginName];

    /**
     * 定义插件，扩展$.fn，为Zepto对象提供新的插件方法
     * 调用方式：$.fn.pluginName()
     * @param option {string/object}
     */
    $.fn[Plugin.pluginName] = function (option) {
        return this.each(function () {
            var $this = $(this);

            var instance = $.fn[Plugin.pluginName].pluginData[$this.data(Plugin.dataName)];
            var options = typeof option == 'object' && option;

            //只实例化一次，后续如果再次调用了该插件时，则直接获取缓存的对象
            if (!instance) {
                //zepto的data方法只能保存字符串，所以用此方法解决一下
                $.fn[Plugin.pluginName].pluginData[++$.fn[Plugin.pluginName].pluginData.index] = new Plugin(this, options);
                $this.data(Plugin.dataName, $.fn[Plugin.pluginName].pluginData.index);
                instance = $.fn[Plugin.pluginName].pluginData[$this.data(Plugin.dataName)];
            }

            //如果插件的参数是一个字符串，则直接调用插件的名称为此字符串方法
            if (typeof option == 'string') instance[option]();
        });
    };

    /**
     * zepto的data方法只能保存字符串，所以用一个对象来存储data
     * @type {{index: number}}
     */
    $.fn[Plugin.pluginName].pluginData = {index: 0};

    $.fn[Plugin.pluginName].Constructor = Plugin;

    /**
     * 为插件增加 noConflict 方法，在插件重名时可以释放控制权
     * @returns {*}
     */
    $.fn[Plugin.pluginName].noConflict = function () {
        $.fn[Plugin.pluginName] = old;
        return this
    };

}));