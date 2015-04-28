
(function (window, document) {
  'use strict';

  var piElement = document.getElementById('position-indicator')
  if (!piElement) {
    return;
  }

  var UPDATE_DELAY = 10;
  var sections = [];
  var updateTimeout;

  // @TODO: Make sure elements are sorted by Y offset.
  var sectionLinks = piElement.getElementsByClassName('position-link');

  // Get the position of the element from the top of the page.
  var getScrollTopElement = function (event) {
    var top = 0;

    while (event.offsetParent != undefined && event.offsetParent != null) {
      top += event.offsetTop + (event.clientTop != null ? event.clientTop : 0);
      event = event.offsetParent;
    }

    return top;
  };

  // Generate a list of sections to be used by updatePositionIndicator().
  for (var i = 0; i < sectionLinks.length; i++) {
    if (typeof sectionLinks[i].attributes.href === 'undefined') {
      continue;
    }

    var href = sectionLinks[i].attributes.href.nodeValue.toString();
    if (href.length <= 1 && href.indexOf('#') != -1) {
      continue;
    }

    var target_id = href.substr(href.indexOf('#') + 1);

    var target = document.getElementById(target_id);
    if (target) {
      sections.push({
        'link': sectionLinks[i],
        'target': target,
        'offset': getScrollTopElement(target)
      });
    }
  }

  // Update the active class for the position indicator.
  var updatePositionIndicator = function() {
    var scrollTopPosition = getScrollTopDocument();
    var classUpdated = false;

    for (var i = sections.length - 1; i >= 0; i--) {
      var elementTopOffset = sections[i].offset;
      if (scrollTopPosition >= elementTopOffset ||
          i == 0 && scrollTopPosition < elementTopOffset) {
        if (!classUpdated) {
          sections[i].link.classList.add('active');
          classUpdated = true;
          continue;
        }
      }

      sections[i].link.classList.remove('active');
    }
  };

  // Get the current window scroll position.
  var getScrollTopDocument = function () {
    if (typeof window.pageYOffset !== 'undefined') {
      return window.pageYOffset;
    }

    if (typeof document.documentElement.scrollTop !== 'undefined') {
      return document.documentElement.scrollTop;
    }

    return document.body.scrollTop;
  };

  // Update the position indicator on scroll after a small delay.
  window.addEventListener('scroll', function() {
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(updatePositionIndicator, UPDATE_DELAY);
  });

  // Update the position indicator.
  updatePositionIndicator();

})(window, document);
