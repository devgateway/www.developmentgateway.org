/*
 * - autoSmoothScroll -
 * Licence MIT
 * Written by Gabriel Delépine
 * Current version  1.3 (2014-07-23)
 * Previous version  1.2 (2014-02-13)
 * Previous version 1.0.1 (2013-11-08)
 * Previous version 1.0 (2013-10-27)
 * Requirement : No one, it is a framework-free fonction (ie : You do not need to include any other file in your page such as jQuery)
 * Fork-me in github :
 * */
(function(window, document, undefined) {
  'use strict';
  if (window.smoothScrollTo) {
    console.warn('tried to init smoothScrollTo twice');
    return;
  }

  var height_fixed_header = 106, // land below header with position:fixed
      period = 500;  // total time for scroll


  var initScrollAnchors = function() {
    var links = document.getElementsByTagName('a'),
        scrollNotDisabled,
        href;

    for (var i=0; i<links.length; i++) {
      href = (links[i].attributes.href !== undefined) ?
          links[i].attributes.href.value.toString() :
          null;
      scrollNotDisabled = links[i].getAttribute('data-no-smoothscroll') === null;

      if (scrollNotDisabled &&
          href !== null &&
          href.indexOf('#') != -1) { // href.substr(0, 1) == '#'
        links[i].addEventListener('click', (function(anchor) {
          return function() {
            smoothScrollTo.anchor(anchor);
            return false;
          };
        })(href.substr(href.indexOf('#')+1)));
      }
    }
  };

  var smoothScrollTo = function(destination, doneCb, progressCb) {
    var startTime,
        startPosition = getPageYOffset(),
        progress = 0;

    var rAFID = window.requestAnimationFrame(function scrollStep(t) {
      startTime = startTime || t;

      if (t > (startTime + period)) {  // ready or not, we're done here.
        window.scrollTo(0, destination);
        doneCb && doneCb();
      } else {
        progress = (t - startTime) / period;
        window.scrollTo(0, progress * (destination - startPosition) + startPosition);
        progressCb && progressCb(progress);
        rAFID = window.requestAnimationFrame(scrollStep);
      }
    });

    function requestStop() {
      doneCb && doneCb();
      window.cancelAnimationFrame(rAFID);
    }

    return requestStop;
  };

  smoothScrollTo.el = function(element, progressCb, doneCb) {
    return smoothScrollTo(getScrollTopElement(element), doneCb, progressCb);
  };

  smoothScrollTo.anchor = function(anchor, progressCb, doneCb) {
    return smoothScrollTo.el(document.getElementById(anchor) || document.body, doneCb, progressCb);
  };

  var getScrollTopElement = function(e) {
    var top = height_fixed_header * -1;

    while (e.offsetParent != undefined && e.offsetParent != null) {
      top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
      e = e.offsetParent;
    }

    return top;
  };

  var getPageYOffset = function() {
    return (window.pageYOffset !== undefined) ?
      window.pageYOffset :
      (document.documentElement.scrollTop !== undefined) ?
        document.documentElement.scrollTop :
        document.body.scrollTop;
  };

  // export the smoothScrollTo function to global
  window.smoothScrollTo = smoothScrollTo;

  // scan the page for links to register as scrollable
  document.addEventListener('DOMContentLoaded', initScrollAnchors);

})(window, document);
