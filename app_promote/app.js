var link_idx = 0,
    idx_str = '100'
$(document).ready(function() {
    try {
        onDocumentReady();
    } catch (e) {
        console.dir(e);
    }
    // var btn = document.getElementById("btn_download");
    var $btn = $('#btn_download');
    // $('#download_directly').attr("href", "http://mini.eastday.com/hdhtml/lq001/index.html");
    $('#download_directly').click(function(e) {
        e.stopPropagation();
        idx_str = (link_idx >= 10 ? link_idx : ('0' + link_idx)) + '00';
        sendLog();
        setTimeout(function() {
            location.href = "http://mini.eastday.com/hdhtml/lq001/index.html";
        }, 100);
    });
    // btn.setAttribute("href", "http://mini.eastday.com/hdhtml/lq001/index.html");
    // $btn.attr("href", "http://mini.eastday.com/hdhtml/lq001/index.html");
    $btn.on('click', function(e) {
        e.stopPropagation();
        idx_str = (link_idx >= 10 ? link_idx : ('0' + link_idx)) + '03';
        sendLog();
        setTimeout(function() {
            location.href = "http://mini.eastday.com/hdhtml/lq001/index.html";
        }, 100);
    });

});

function onDocumentReady() {
    $('body').on('click', 'a[data-des]', function() {
        link_idx = $(this).parent().index();
        link_idx = link_idx > 1 ? link_idx - 1 : link_idx;
        link_idx += 1;
        idx_str = (link_idx >= 10 ? link_idx : ('0' + link_idx)) + '02';
        var des = $(this).attr("data-des");
        var artId = $(this).attr("data-artId");
        $("#text_introduce").html(des);
        $("a[data-des]").removeClass('addFunc');
        $(this).append($(".download-tip")).addClass('addFunc');
        if ($(this).data('clicked') !== 'true') {
            $(this).data('clicked', 'true');
            idx_str = (link_idx >= 10 ? link_idx : ('0' + link_idx)) + '01';
        } else {
            $('.panel-download h3').html($('.addFunc').find('h2').html());
            $('.panel-download p').html(des);
            $('.panel-wrap').css({
                'height': window.innerHeight + 'px',
                'display': 'block'
            }).on('touchstart', function(e) {
                if (e.target.id !== 'btn_download') {
                    $(this).hide();
                    e.stopPropagation();
                    return false;
                }
            });
        }
        sendLog();
        // console.log('idx_str::', idx_str);
    });

    // $("a[data-des]").click(function () {
    //     link_idx = $(this).parent().index();
    //     link_idx = link_idx > 1 ? link_idx - 1 : link_idx;
    //     link_idx += 1;
    //     idx_str = (link_idx >= 10 ? link_idx : ('0' + link_idx)) + '01';
    //     var des = $(this).attr("data-des");
    //     var artId = $(this).attr("data-artId");
    //     /*var url = $("#btn_download").attr("href");
    //      url = url.replace(/fromArt=\d+/i, "fromArt=" + artId);
    //      $("#btn_download").attr("href", url);*/
    //     $("#text_introduce").html(des);
    //     $("a[data-des]").removeClass('addFunc');
    //     $(this).after($(".download-tip")).addClass('addFunc');
    //     if(){

    //     } else {
    //         $('.addFunc,.download-tip').off('click').on('click', function () {
    //             link_idx = $(this).parent().index();
    //             link_idx = link_idx > 1 ? link_idx - 1 : link_idx;
    //             link_idx += 1;
    //             idx_str = (link_idx >= 10 ? link_idx : ('0' + link_idx)) + '01';
    //             $('.panel-download h3').html($('.addFunc').find('h2').html());
    //             $('.panel-download p').html(des);
    //             $('.panel-wrap').css({
    //                 'height': window.innerHeight + 'px',
    //                 'display': 'block'
    //             }).on('touchstart', function (e) {
    //                 if (e.target.id !== 'btn_download') {
    //                     $(this).hide();
    //                     e.stopPropagation();
    //                     return false;
    //                 }
    //             });
    //             sendLog();
    //         });
    //     }

    // });

    var h = $(".images-list-box").width() * 0.3333 * 0.67;
    var imgs = $(".images-list-box").find("img:not([style])");
    imgs.height(h);
    $("a[data-des]").eq(0).click();
}

function sendLog() {
    // console.log('idx_str::', idx_str);
    $.ajax({
        url: 'http://toutiao.eastday.com/getwapdata/ad',
        // url: 'http://123.59.60.170/getwapdata/ad',
        dataType: 'jsonp',
        data: {
            "qid": Cookies.get('qid') || 'null',
            "uid": Cookies.get('user_id') || 'null',
            "loginid": 'null',
            "softtype": 'news',
            "softname": 'eastday_wapnews',
            "newstype": 'ad',
            "from": 'null',
            "to": 'http://mini.eastday.com/hdhtml/lq001/index.html',
            "os_type": getOsType() || 'null',
            "browser_type": getBrowserType() || 'null',
            "pixel": window.screen.width + '*' + window.screen.height,
            "ime": "null",
            "refer": getReferrer() || 'null',
            "adv": 'dfttdown100000001',
            "idx": idx_str
        },
        jsonp: 'jsonpcallback',
        success: function(msg) {}
    });
}

function systemJudge() {
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
        var version = parseFloat(RegExp.$1);
        return 'Android';
    } else if (navigator.userAgent.indexOf('iPhone') != -1) {
        return 'IOS';
    } else {
        return 'other';
    }
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值

}

function getBrowserType() {
    var agent = navigator.userAgent.toLowerCase();
    var browser_type = "";
    if (agent.indexOf("msie") > 0) {
        browser_type = "IE";
    }
    if (agent.indexOf("firefox") > 0) {
        browser_type = "firefox";
    }
    if (agent.indexOf("chrome") > 0 && agent.indexOf("mb2345browser") < 0 && agent.indexOf("360 aphone browser") < 0) {
        browser_type = "chrome";
    }
    if (agent.indexOf("360 aphone browser") > 0 || agent.indexOf("qhbrowser") > 0) {
        browser_type = "360";
    }
    if (agent.indexOf("ucbrowser") > 0) {
        browser_type = "UC";
    }
    if (agent.indexOf("micromessenger") > 0) {
        browser_type = "WeChat";
    }
    if ((agent.indexOf("mqqbrowser") > 0 || agent.indexOf("qq") > 0) && agent.indexOf("micromessenger") < 0) {
        browser_type = "QQ";
    }
    if (agent.indexOf("miuibrowser") > 0) {
        browser_type = "MIUI";
    }
    if (agent.indexOf("mb2345browser") > 0) {
        browser_type = "2345";
    }
    if (agent.indexOf("sogoumobilebrowser") > 0) {
        browser_type = "sogou";
    }
    if (agent.indexOf("liebaofast") > 0) {
        browser_type = "liebao";
    }
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0 && agent.indexOf("ucbrowser") < 0 && agent.indexOf("micromessenger") < 0 && agent.indexOf("mqqbrowser") < 0 && agent.indexOf("miuibrowser") < 0 && agent.indexOf("mb2345browser") < 0 && agent.indexOf("sogoumobilebrowser") < 0 && agent.indexOf("liebaofast") < 0 && agent.indexOf("qhbrowser") < 0) {
        browser_type = "safari";
    }
    return browser_type;
}

/**
 * OS的判断
 * @return {[type]} [description]
 */
function getOsType() {
    var agent = navigator.userAgent.toLowerCase();
    var os_type = "";
    if (/android/i.test(navigator.userAgent)) {
        var index = agent.indexOf("android");
        version = agent.substr(index + 8, 3);
        os_type = "Android " + version;
    }
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        var index = agent.indexOf("os");
        version = agent.substr(index + 3, 3);
        os_type = "iOS " + version;
    }
    if (/Linux/i.test(navigator.userAgent) && !/android/i.test(navigator.userAgent) && !/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        os_type = "Linux";
    }
    if (/windows|win32/i.test(navigator.userAgent)) {
        os_type = "windows32";
    }
    if (/windows|win32/i.test(navigator.userAgent)) {
        os_type = "windows64";
    }
    return os_type;
}

function getReferrer() {
    var referrer = '';
    try {
        referrer = window.top.document.referrer;
    } catch (e) {
        if (window.parent) {
            try {
                referrer = window.parent.document.referrer;
            } catch (e2) {
                referrer = '';
            }
        }
    }
    if (referrer === '') {
        referrer = document.referrer;
    }
    return referrer;
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;

    }
}
