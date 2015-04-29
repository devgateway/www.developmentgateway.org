
(function (window, document) {
  'use strict';

  // Get the current window scroll position.
  var getScrollTopDocument = function() {
    if (typeof window.pageYOffset !== 'undefined') {
      return window.pageYOffset;
    }
    if (typeof document.documentElement.scrollTop !== 'undefined') {
      return document.documentElement.scrollTop;
    }
    return document.body.scrollTop;
  };


  // Get the position of the element from the top of the page.
  var getScrollTopElement = function(target) {
    var top = 0;

    while (target.offsetParent != undefined && target.offsetParent != null) {
      top += target.offsetTop + (target.clientTop != null ? target.clientTop : 0);
      target = target.offsetParent;
    }

    return top;
  };


  var addScrollHandler = (function() {
    var handlers = [],
        scrollUpdate;

    var _addScrollHandler = function addScrollHandler(handler) {
      if (typeof handler !== 'function') {
        console.error('scroll handlers must be functions. Got', handler);
        return;
      }
      handlers.push(handler);
      // also execute immediately on add
      handler(getScrollTopDocument());
    };

    var runHandlers = function() {
      var currentPosition = getScrollTopDocument();
      for (var i = 0; i < handlers.length; i++) {
        handlers[i](currentPosition);
      }
    };

    window.addEventListener('scroll', function() {
      window.cancelAnimationFrame(scrollUpdate);
      scrollUpdate = window.requestAnimationFrame(runHandlers);
    });

    return _addScrollHandler;
  })();


  DG.ready(function initStickyHeader() {
    var snElement = document.getElementById('page-navigation');
    if (snElement === null) { return; }

    // Get the initial position of the page navigation element.
    var initialNavigationPosition = getScrollTopElement(snElement);

    // Get the main site header height.
    var headerHeight = document.getElementsByClassName('main-header')[0].clientHeight;

    var updateStickyNavigation = function(scrollTopPosition) {
      // Update the state of the sticky navigation.

      if (initialNavigationPosition < scrollTopPosition + headerHeight) {
        if (!snElement.classList.contains('is-fixed')) {
          snElement.classList.add('is-fixed');
        }
      }
      else {
        snElement.classList.remove('is-fixed');
      }
    };
    addScrollHandler(updateStickyNavigation);
  });


  DG.ready(function initPositionIndicator() {
    var piElement = document.getElementById('position-indicator');
    if (piElement === null) { return; }

    var piSectionLinks = piElement.getElementsByClassName('position-link') || null,
        piSections = [];

    // Generate a list of sections to be used by updatePositionIndicator().
    for (var i = 0; i < piSectionLinks.length; i++) {
      if (typeof piSectionLinks[i].attributes.href === 'undefined') {
        continue;
      }

      var href = piSectionLinks[i].attributes.href.value.toString();
      if (href.length <= 1 && href.indexOf('#') != -1) {
        continue;
      }

      // Add the target to the list of sections.
      var target_id = href.substr(href.indexOf('#') + 1);
      var target = document.getElementById(target_id);
      if (target) {
        piSections.push({
          'link': piSectionLinks[i],
          'target': target,
          'offset': getScrollTopElement(target) - DG.fixedHeaderHeight
        });
      }
    }

    // Updates the active class for the position indicator.
    var updatePositionIndicator = function(scrollTopPosition) {
      var classUpdated = false;

      for (var i = piSections.length - 1; i >= 0; i--) {
        var elementTopOffset = piSections[i].offset;
        if (scrollTopPosition >= elementTopOffset ||
          i == 0 && scrollTopPosition < elementTopOffset) {
          if (!classUpdated) {
            piSections[i].link.classList.add('active');
            classUpdated = true;
            continue;
          }
        }

        piSections[i].link.classList.remove('active');
      }
    };

    addScrollHandler(updatePositionIndicator);
  });


})(window, document);
