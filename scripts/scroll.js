
(function (window, document) {
  'use strict';

  var UPDATE_DELAY = 10;

  // Sticky Navigation variables.
  var snElement = document.getElementById('page-navigation');
  var snUpdateTimeout;

  // Position Indicator variables.
  var piElement = document.getElementById('position-indicator');
  var piSectionLinks = piElement && piElement.getElementsByClassName('position-link') || null;
  var piUpdateTimeout;
  var piSections = [];

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

  // Enable the sticky navigation functionality.
  if (snElement) {
    var originalNavigationPosition = getScrollTopElement(snElement);
    console.log(originalNavigationPosition);

    var updateStickyNavigation = function() {
      console.log('updating sticky navigation!');
      // Update the state of the sticky navigation.
      var scrollTopPosition = getScrollTopDocument();

      var headerHeight = 5 * (16 * 0.8);
      console.log('header: ' + headerHeight + ' <> total:' + (scrollTopPosition + headerHeight));

      if (originalNavigationPosition < scrollTopPosition + headerHeight) {
        if (!snElement.classList.contains('is-fixed')) {
          snElement.classList.add('is-fixed');
        }
      }
      else {
        snElement.classList.remove('is-fixed');
      }
    };

    // Update the position indicator on scroll after a small delay.
    window.addEventListener('scroll', function() {
      clearTimeout(snUpdateTimeout);
      snUpdateTimeout = setTimeout(updateStickyNavigation, UPDATE_DELAY);
    });

    // Update the sticky header state.
    updateStickyNavigation();
  }

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
