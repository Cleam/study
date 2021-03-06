var gameData = {"question": [{"img": "", "question": "小时候你做过优等生没有？", "answer": {"a": {"title": "一直是", "next": "2"}, "b": {"title": "有时是", "next": "3"}, "c": {"title": "没有做过", "next": "4"} } }, {"img": "", "question": "你中学的时候，有很喜欢的异性同学吗？", "answer": {"a": {"title": "有", "next": "3"}, "b": {"title": "没有", "next": "4"}, "c": {"title": "不知道", "next": "5"} } }, {"img": "", "question": "你很在意恋人的一些小细节吗？", "answer": {"a": {"title": "是的", "next": "4"}, "b": {"title": "不是", "next": "5"}, "c": {"title": "还好", "next": "6"} } }, {"img": "", "question": "你是一个挺长情的人，喜欢一个人很久都放不下？", "answer": {"a": {"title": "是的", "next": "5"}, "b": {"title": "不是", "next": "6"}, "c": {"title": "看情况", "next": "7"} } }, {"img": "", "question": "目前的你觉得自己状态挺好的？", "answer": {"a": {"title": "是的挺好", "next": "6"}, "b": {"title": "不怎么好", "next": "7"}, "c": {"title": "十分糟糕", "next": "8"} } }, {"img": "", "question": "觉得自己最像下面哪种动物？", "answer": {"a": {"title": "笨拙的熊", "next": "7"}, "b": {"title": "纯洁的兔", "next": "8"}, "c": {"title": "飘逸的马", "next": "A"} } }, {"img": "", "question": "下面三种武器，你最喜欢的是？", "answer": {"a": {"title": "长枪", "next": "8"}, "b": {"title": "短剑", "next": "9"}, "c": {"title": "双剑", "next": "10"} } }, {"img": "", "question": "你觉得下面哪种职业，是你最想要的？", "answer": {"a": {"title": "花匠", "next": "9"}, "b": {"title": "服装设计师", "next": "A"}, "c": {"title": "图书管理员", "next": "B"} } }, {"img": "", "question": "下面三双鞋子，你最喜欢穿的是？", "answer": {"a": {"title": "板鞋", "next": "C"}, "b": {"title": "马丁靴", "next": "D"}, "c": {"title": "人字拖", "next": "A"} } }, {"img": "", "question": "下面三种天气情况，你最喜欢的是？", "answer": {"a": {"title": "杏花微雨", "next": "B"}, "b": {"title": "红叶秋阳", "next": "C"}, "c": {"title": "初雪纷飞", "next": "D"} } }], "result": [{"threshold": "A", "title": "半年之内", "desc": "以你的行动力，只要你彻底觉悟，找个恋人还是很快的，半年之内就可以马上行动，瞄准目标，追求成功，摆脱单身汪的称号。不过不得不说，像你这种速战速决的人，恋得快，失得也快。反省一下之前的恋情，无一不是这样呢，可能快不见得就是真爱，就是对的缘分哦。所以也没啥好高兴的，有恋且恋呗。", "sharetitle": "经测试，我半年内会结束单身，测测看你还要多久才能结束单身？"}, {"threshold": "B", "title": "一年之内", "desc": "再给自己一年的时间来解决这个单身的问题吧，虽然你是不大急啦，但是你家人急啊，你身边的人替你着急啊！而且，你也觉得自己差不多也得面对这个问题，而不是一直当一个流浪汉，一个人过着潇洒却又孤单的生活。一年就好，你多少也是优质的人，只要想解决，用一年的时候考量一份感情，刚刚好。", "sharetitle": "经测试，我今年内会结束单身，真爱你在哪里呢，测测看你什么时候才能结束单身？"}, {"threshold": "C", "title": "三年之内", "desc": "呵呵，对目前的你来讲，无论是哪个方面，都并不适合你马上摆脱单身。你是有追求的，要达到目的总要有所付出，有所舍弃。三年之内，你的追求会达成的，可能是事业的成功，可能是理想的实现。总之你一旦实现了计划，人生的追求就是要成家了哦。三年的时间，正是大好时光。", "sharetitle": "经测试，我三年内会结束单身，测测看你什么时候才能结束单身？"}, {"threshold": "D", "title": "可能很快，可能很久", "desc": "对于你这种缘分党，说自己对爱情对另一半没有要求，偏偏这才是最大的要求。你的缘分可能要很久才来，这个久是多久，谁也不知道，但是你不在乎，你愿意等待，等着最合适的那个人出现。也或者，你的缘分很快就来了呢，兴许明天出个门就遇到了。谁知道呢，知道的不叫缘分……", "sharetitle": "经测试，我要结束单身全靠缘分，测测看你什么时候才能结束单身？"}] };

var xlist = eval(gameData.question);
var ylist = eval(gameData.result);
var total = xlist.length; // 总题数
var finish = 0; // 已完成题数
var answer_right = 0; // 答对题数
var score = 0;
var next = 0;

function cur_ceshi(i) {
    $("#current").html(i);
    $("#total").html("/" + total);
}

function show_qus(num) {
    num = parseInt(num);
    cur_ceshi(num + 1);
    $(".inp_meu").html("");
    $(".inp_box1 h3").html(xlist[num].question);
    $(".inp_box1").attr("data-num", num + 1);
    for (anser in xlist[num].answer) {
        $(".inp_meu").append("<p name=\"inp_rad" + (anser + 1) + "\" data-value=\"" + xlist[num].answer[anser].next + "\" ><span>" + anser + ". " + xlist[num].answer[anser].title + "</span></p>");

    }
}
$(".btn_star").click(function() {
    $(".ceshi_des").css("display", "none");
    $("#accordion").css("display", "block");
    $("html,body").animate({ scrollTop: $("#wrapper h1").offset().top - 50 });
    show_qus(0)

});

$(".inp_box1 p").live("click", function() {
    $(this).addClass("on");
    finish = $(".inp_box1").attr("data-num");
    score = $(this).attr("data-value").toUpperCase();
    if (score == "A" || score == "B" || score == "C" || score == "D" || score == "E" || score == "F" || score == "G" || score == "H" || score == "I" || score == "J" || score == "K") {
        $(".progress").css("display", "none");
        $(".inp_box1").css("display", "none");
        $(".jg_box").css("display", "block");
        for (i = 0; i < ylist.length; i++) {
            if (score == ylist[i].threshold) {
                fonts = ylist[i].title;
                fonts1 = ylist[i].desc;
                document.title = ylist[i].sharetitle;
                $(".ma_cs1").html(fonts);
                $(".ma_cs2").html(fonts1);
                $("html,body").animate({ scrollTop: $("#wrapper h1").offset().top - 50 });
                break;
            }
        }
    } else {
        show_qus(score - 1);
    }
})

function receshi() {
    $(".inp_meu p").removeClass("on");
    $("#div1").attr("style", "display:block;");
    $(".jg_box").attr("style", "display:none;");
    $(".progress").css("display", "block");
    cur_ceshi(1);
    show_qus(0);
}

$(".inp_meu p").live("mousedown", function() {
    $(this).parent("div").find("p").removeClass("on");
    $(this).addClass("on");
})
