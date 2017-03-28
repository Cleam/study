FastClick.attach(document.body);
/**
 * 模块模板
 */
var module = (function(my) {
    // 存储一系列初始化方法
    my.inits = my.inits || [];
    // to do...
    return my;
})(module || {});

/**
 * 图片浏览
 */
var module = (function(my) {
    // 存储一系列初始化方法
    my.inits = my.inits || [];

    var initPhotoSwipeFromDOM = function(gallerySelector) {
        var getFigureNodes = function(nodes) {
            var figureNodes = [];
            if (nodes && nodes.length > 0) {
                // 排除无效DOM节点
                for (var i = 0; i < nodes.length; i++) {
                    var tn = nodes[i].tagName;
                    if (tn && tn.toUpperCase() === 'FIGURE') {
                        figureNodes.push(nodes[i]);
                    }
                }
            }
            return figureNodes;
        };
        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
                figureNodes = getFigureNodes(thumbElements),
                figureLen = figureNodes.length,
                items = [],
                linkEl,
                imgEl,
                // size,
                item,
                figureEl,
                cnode;
            for (var i = 0; i < figureLen; i++) {
                figureEl = figureNodes[i]; // <figure> element
                // include only element nodes 
                if (figureEl.nodeType !== 1) {
                    continue;
                }
                linkEl = figureEl.children[0]; // <a> element
                imgEl = linkEl.children[0]; // <img> element
                // size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(imgEl.getAttribute('data-width')),
                    h: parseInt(imgEl.getAttribute('data-height'))
                        // w: parseInt(size[0], 10),
                        // h: parseInt(size[1], 10)
                };
                if (figureEl.children.length > 1) {
                    // <figcaption> content
                    cnode = figureEl.children[1];
                    while (cnode && cnode.nodeName !== 'FIGCAPTION') {
                        cnode = cnode.nextSibling;
                    }
                    if (cnode) {
                        item.title = cnode.innerHTML;
                    }
                }
                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }
                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }
            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            var eTarget = e.target || e.srcElement;
            if (eTarget.tagName.toUpperCase() !== 'IMG') {
                return;
            }
            e.preventDefault ? e.preventDefault() : e.returnValue = false; // jshint ignore:line
            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            if (!clickedListItem) {
                return;
            }
            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                figureNodes = getFigureNodes(childNodes),
                // figureLen = figureNodes.length,
                nodeIndex = 0,
                index;
            for (var i = 0; i < figureNodes.length; i++) {
                if (figureNodes[i].nodeType !== 1) {
                    continue;
                }
                if (figureNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if (index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
                params = {};
            if (hash.length < 5) {
                return params;
            }
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }
            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
            return params;
        };

        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;
            items = parseThumbnailElements(galleryElement);
            // define options (if needed)
            options = {
                // define gallery index (for URL)
                index: index,
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                tapToClose: true,
                closeOnVerticalDrag: false,
                loop: true,
                closeOnScroll: false,
                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();
                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                }
            };
            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }
            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }
            // Pass data to PhotoSwipe and initialize it
            /* global PhotoSwipe:true */
            /* global PhotoSwipeUI_Default:true */
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);
        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };

    // 初始化
    my.inits.push(function() {
        initPhotoSwipeFromDOM('.J-article-content');
    });

    return my;
})(module || {});

$(function() {
    // forEach方法的兼容解决方法
    (function() {
        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function(callback, thisArg) {
                var T, k;
                if (this === null) {
                    throw new TypeError(' this is null or not defined');
                }
                var O = Object(this);
                var len = O.length >>> 0; // jshint ignore:line
                if (typeof callback !== "function") {
                    throw new TypeError(callback + ' is not a function');
                }
                if (arguments.length > 1) {
                    T = thisArg;
                }
                k = 0;
                while (k < len) {
                    var kValue;
                    if (k in O) {
                        kValue = O[k];
                        callback.call(T, kValue, k, O);
                    }
                    k++;
                }
            };
        }
    }());

    // 调用初始化方法
    module.inits.forEach(function(fn) {
        if (typeof fn === 'function') {
            try {
                fn();
            } catch (e) {
                console.error(e);
            }
        }
    });
});
