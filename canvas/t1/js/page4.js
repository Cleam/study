!(function() {
  function MyCanvas(opts) {
    this.canvas = opts.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvasWidth = opts.canvasWidth;
    this.canvasHeight = opts.canvasHeight;
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.radius = opts.radius === undefined ? 50 : opts.radius;

    this.clippingRegion = opts.clippingRegion && {
      x: opts.clippingRegion.x || 50,
      y: opts.clippingRegion.y || 50,
      r: this.radius
    };
    this._clippingRegion = Object.assign({}, this.clippingRegion);
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
        x: Math.random() * (this.canvasWidth - 2 * this.radius) + this.radius,
        y: Math.random() * (this.canvasHeight - 2 * this.radius) + this.radius,
        r: this.radius
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
        _this.clippingRegion.r += 10;
        if (
          _this.clippingRegion.r >
          Math.sqrt(
            Math.pow(_this.canvasWidth, 2) + Math.pow(_this.canvasHeight, 2)
          )
        ) {
          _this.timer && clearInterval(_this.timer);
          callback && callback();
        }
        _this.draw();
      }, 16.7);
    },
    reset: function() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.clippingRegion = Object.assign({}, this._clippingRegion);
      this.init();
    }
  };

  $(function() {
    var $img = $('#img');
    var canvas1 = document.getElementById('canvas1');
    var canvas2 = document.getElementById('canvas2');
    var c1 = new MyCanvas({
      canvas: canvas1,
      canvasWidth: 400,
      canvasHeight: 300,
      radius: 0,
      imgsrc: 'img/xs.jpg',
      clippingRegion: {
        x: 50,
        y: 50,
        r: 0
      }
    });
    var c2 = new MyCanvas({
      canvas: canvas2,
      canvasWidth: 400,
      canvasHeight: 300,
      radius: 0,
      imgsrc: 'img/ms.jpg',
      clippingRegion: {
        x: 400 - 50,
        y: 300 - 50,
        r: 0
      }
    });

    function resetZIndex() {
      canvas1.style.zIndex = -1;
      canvas2.style.zIndex = -1;
    }

    function setZIndex(dom) {
      resetZIndex();
      dom.style.zIndex = 2;
    }

    var t = 0;
    var drawing = false;
    var canvasOffsetTop = $img.offset().top;
    var canvasHeight = $img.height();
    var winHeight = $(window).height();
    var isC1 = true;
    $(document.body).on('touchstart, click', function() {
      var winScrollTop = $(window).scrollTop();
      var isInView =
        winScrollTop < canvasOffsetTop &&
        winScrollTop > canvasOffsetTop + canvasHeight - winHeight;
      if (!drawing && isInView) {
        var c = isC1 ? c1 : c2;
        var domc = isC1 ? canvas1 : canvas2;
        drawing = true;
        setZIndex(domc);
        c.reset();
        c.expand(function() {
          isC1 = !isC1;
          drawing = false;
          $img.hide();
        });
      }
    });
  });
})();
