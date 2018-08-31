!(function() {
  function MyCanvas(opts) {
    this.canvas = opts.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvasWidth = opts.canvasWidth;
    this.canvasHeight = opts.canvasHeight;
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.RADIUS = opts.radius || 50;
    this.clippingRegion = opts.clippingRegion && {
      x: opts.clippingRegion.x || 50,
      y: opts.clippingRegion.y || 50,
      r: this.RADIUS
    };
    this.loadImg(opts.imgsrc);
  }
  MyCanvas.prototype = {
    loadImg: function(imgsrc) {
      var _this = this;
      if (imgsrc) {
        var img = new Image();
        img.src = imgsrc;
        img.onload = function() {
          _this.img = img;
          _this.reset();
        };
      }
    },
    init: function() {
      this.draw(this.ctx, this.img, {
        x: Math.random() * (this.canvasWidth - 2 * this.RADIUS) + this.RADIUS,
        y: Math.random() * (this.canvasHeight - 2 * this.RADIUS) + this.RADIUS,
        r: this.RADIUS
      });
    },
    draw: function() {
      var ctx = this.ctx;
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      ctx.save();
      this.clippingRegion && this.setClippingRegion();
      ctx.drawImage(
        this.img,
        0,
        0,
        this.img.width,
        this.img.height,
        0,
        0,
        this.canvasWidth,
        this.canvasHeight
      );
      ctx.restore();
    },
    setClippingRegion: function() {
      var cr = this.clippingRegion;
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(cr.x, cr.y, cr.r, 0, Math.PI * 2, false);
      ctx.clip();
    },
    expand: function(callback) {
      var _this = this;
      _this.timer = setInterval(function() {
        _this.clippingRegion.r += 20;
        if (
          _this.clippingRegion.r >
          2 * Math.max(_this.canvasWidth, _this.canvasHeight)
        ) {
          _this.timer && clearInterval(_this.timer);
          callback && callback();
        }
        _this.draw();
      }, 30);
    },
    reset: function() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.init();
    }
  };
  $(function() {
    var canvas1 = document.getElementById('canvas1');
    var canvas2 = document.getElementById('canvas2');
    var c1 = new MyCanvas({
      canvas: canvas1,
      canvasWidth: 400,
      canvasHeight: 300,
      radius: 20,
      imgsrc: 'img/xs.jpg'
    });
    $('#J_change1').on('click', function() {
      c1.expand(function() {
        canvas1.style.zIndex = 1;
        canvas2.style.zIndex = 2;
      });
    });

    var c2 = new MyCanvas({
      canvas: canvas2,
      canvasWidth: 400,
      canvasHeight: 300,
      clippingRegion: {
        x: 400 - 50,
        y: 300 - 50
      },
      radius: 20,
      imgsrc: 'img/ms.jpg'
    });
    $('#J_change2').on('click', function() {
      c2.expand(function() {
        canvas1.style.zIndex = 2;
        canvas2.style.zIndex = 1;
        c1.clippingRegion = {
          x: 50,
          y: 50
        };
        console.log('c1::', c1);

        c1.reset();
      });
    });
  });
})();
