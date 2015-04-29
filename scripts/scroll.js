
(function (window, document) {
  'use strict';

  var UPDATE_DELAY = 10;

  // Position Indicator variables.
  var piElement = document.getElementById('position-indicator');
  var piSectionLinks = piElement && piElement.getElementsByClassName('position-link') || null;
  var piUpdateTimeout;
  var piSections = [];

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

  // Get the position of the element from the top of the page.
  var getScrollTopElement = function (event) {
    var top = 0;

    while (event.offsetParent != undefined && event.offsetParent != null) {
      top += event.offsetTop + (event.clientTop != null ? event.clientTop : 0);
      event = event.offsetParent;
    }

    return top;
  };


  // Enable the position indicator functionality.
  if (piElement && piSectionLinks) {
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
          'offset': getScrollTopElement(target)
        });
      }
    }

    // Updates the active class for the position indicator.
    var updatePositionIndicator = function() {
      var scrollTopPosition = getScrollTopDocument();
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

    // Updates the position indicator on scroll after a small delay.
    window.addEventListener('scroll', function() {
      clearTimeout(piUpdateTimeout);
      piUpdateTimeout = setTimeout(updatePositionIndicator, UPDATE_DELAY);
    });

    // Update the position indicator.
    updatePositionIndicator();
  }

})(window, document);
