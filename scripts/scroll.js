
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


  var targetSections = function(links) {
    var sections = [];

    var updateOffsets = function() {
      var href,
          target_id,
          target;

      sections = [];

      for (var i = 0; i < links.length; i++) {
        if (links[i].attributes.href === undefined) {
          continue;
        }
        href = links[i].attributes.href.value.toString();
        if (href.length <= 1 || href.indexOf('#') === -1) {
          continue;
        }
        target_id = href.substr(href.indexOf('#') + 1);
        target = document.getElementById(target_id);
        if (target === null) {
          console.warn('could not find a section with id', links[i]);
          continue;
        }
        sections.push({
          link: links[i],
          target: target,
          offset: getScrollTopElement(target) - DG.fixedHeaderHeight
        });
      }

      sections.sort(function(sA, sB) {
        return (sA.offset < sB.offset) ? -1 : (sA.offset > sB.offset) ? 1 : 0;
      });
    };

    var clearActive = function() {
      for (var i = 0; i < sections.length; i++) {
        sections[i].link.classList.remove('active');
      }
    };

    var updateActive = function(scrollTopPosition) {
      var position = scrollTopPosition + DG.fixedHeaderHeight;

      clearActive();

      for (var i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offset <= position || i === 0) {
          sections[i].link.classList.add('active');
          break;
        }
      }
    };

    updateOffsets();  // auto-updateOffsets once to initialize

    return {
      clearActive: clearActive,
      updateActive: updateActive,
      updateOffsets: updateOffsets
    }
  };


  DG.ready(function initStickyHeader() {
    var snElement = document.getElementById('page-navigation');
    if (snElement === null) { return; }

    var mainHeader = document.querySelector('.main-header'),
        headerHeight = mainHeader ? mainHeader.offsetHeight : 0,  // should always exist, but don't break if not
        initialNavigationPosition = getScrollTopElement(snElement),
        sections = targetSections(document.querySelectorAll('#page-navigation a'));

    var updateStickyNavigation = function(scrollTopPosition) {
      if (initialNavigationPosition < scrollTopPosition + headerHeight) {
        if (!snElement.classList.contains('is-fixed')) {
          snElement.classList.add('is-fixed');
        }
        sections.updateActive(scrollTopPosition);
      }
      else {
        snElement.classList.remove('is-fixed');
        sections.clearActive();
      }
    };
    addScrollHandler(updateStickyNavigation);

    // re-calculate offsets once images are loaded
    DG.load(sections.updateOffsets);
    // and on page resize
    DG.resize(sections.updateOffsets);
  });


  DG.ready(function initPositionIndicator() {
    var piElement = document.getElementById('position-indicator');
    if (piElement === null) { return; }

    var piSections = targetSections(piElement.querySelectorAll('.position-link'));
    addScrollHandler(piSections.updateActive);

    // re-calculate offsets once images are loaded
    DG.load(piSections.updateOffsets);
    // and on page resize
    DG.resize(piSections.updateOffsets);
  });


})(window, document);
