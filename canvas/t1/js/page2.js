$(function() {
  var $reset = $('#J_reset');
  var $show = $('#J_show');
  var timer = null;
  var canvasWidth = 400;
  var canvasHeight = 300;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  var img = new Image();
  var RADIUS = 50;
  var clippingRegion = { x: -1, y: -1, r: RADIUS };
  img.src = 'img/xs.jpg';

  img.onload = function() {
    init();
  };

  $reset.on('click', reset);
  $show.on('click', function() {
    show(function() {
      // var img = getPrevNode(canvas);
      // img.setAttribute('style', 'display:none');
    });
  });

  /**
   * 初始化
   * @return {[type]} [description]
   */
  function init() {
    clippingRegion = {
      x: Math.random() * (canvas.width - 2 * RADIUS) + RADIUS,
      y: Math.random() * (canvas.height - 2 * RADIUS) + RADIUS,
      r: RADIUS
    };
    draw(img, clippingRegion);
  }

  /**
   * 绘制图像
   * @param  {[type]} img            [description]
   * @param  {[type]} clippingRegion [description]
   * @return {[type]}                [description]
   */
  function draw(img, clippingRegion) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    setClippingRegion(clippingRegion);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    ctx.restore();
  }

  /**
   * 设置剪辑区域
   */
  function setClippingRegion(cr) {
    ctx.beginPath();
    ctx.arc(cr.x, cr.y, cr.r, 0, Math.PI * 2, false);
    ctx.clip();
  }

  /**
   * 重置
   * @return {[type]} [description]
   */
  function reset() {
    if (timer) {
      clearInterval(timer);
    }
    init();
  }

  /**
   * 显示图片
   * @return {[type]} [description]
   */
  function show(callback) {
    timer = setInterval(function() {
      clippingRegion.r += 20;
      if (clippingRegion.r > 2 * Math.max(canvas.width, canvas.height)) {
        clearInterval(timer);
        callback();
      }
      draw(img, clippingRegion);
    }, 30);
  }

  /**
   * 获取目标节点的上一个兄弟节点
   * @param  {[type]} node 目标节点
   * @return {[type]}      [description]
   */
  function getPrevNode(node) {
    if (!node) {
      return;
    }
    node = node.previousSibling;
    while (node && node.nodeType !== 1) {
      // element
      node = node.previousSibling;
    }
    return node;
  }

  /**
   * 获取目标节点的下一个兄弟节点
   * @param  {[type]} node 目标节点
   * @return {[type]}      [description]
   */
  function getNextNode(node) {
    if (!node) {
      return;
    }
    node = node.nextSibling;
    while (node && node.nodeType !== 1) {
      node = node.nextSibling;
    }
    return node;
  }
});
