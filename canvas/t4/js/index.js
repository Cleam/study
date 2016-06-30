$(function () {
   

    drawProcess({
        id: "canvas.processList",  //canvas
        width: 3,                  //边框宽度
        UpColor: "#159ff9",     //进度�?
        DownColor: "#eeeeee",       //底色
        BgColor: "#fff",             //内部背景�?
        start: 1.5,               //开始位�?
        end: 2              //总进度幅�?
    });
    drawProcess({
        id: "canvas.process",  //canvas
        width: 4,                  //边框宽度
        UpColor: "#159ff9",     //进度�?
        DownColor: "#EEE",       //底色
        BgColor: "#FFF",
        start: 0.85,               //开始位�?
        end: 1.3           //总进度幅�?
    });

});

function drawProcess(fn) {
    if (!fn.id) {
        return false
    }
    var oId = $(fn.id);
    var oWith = fn.width || 5;
    var UpColor = fn.UpColor || "#e74c3c";
    var DownColor = fn.DownColor || "#ddd";
    var BgColor = fn.BgColor;
    var start = fn.start || 0;
    var end = fn.end || 2;
    var With = fn.With;
    var Height = fn.Height;
    oId.each(function () {

        var canvas = this;
        canvas.width = $(this).parent().width();
        canvas.height = $(this).parent().height();
        var x = $(this).width() / 2;
        var y = $(this).height() / 2;
        var R = x - 1;
        var r = R - oWith;

        var text = parseInt($(this).text());
        var process = text;
        var text = $(this).parent().children(".canvasContent").text().split("%")[0];
        var Start = start * Math.PI;
        var StartDown = start * Math.PI;
        var EndUp = Math.abs((end * text / 100 + start)) * Math.PI;
        var EndDown = (end + start) * Math.PI;

        var context = canvas.getContext('2d');
        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, R, StartDown, EndDown, false);
        context.closePath();
        context.fillStyle = DownColor;
        context.fill();

        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, R, Start, EndUp, false);
        context.closePath();
        context.fillStyle = UpColor;
        context.fill();

        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, r, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = BgColor;
        context.fill();
    })
};
