
(function(window, DG, jRespond) {
  // Call jRespond and add breakpoints.
  var mediaQueries = jRespond([
    {
      label: 'handheld',
      enter: 0,
      exit: DG.breakPoints('bp_small')
    },{
      label: 'tablet',
      enter: DG.breakPoints('bp_small'),
      exit: DG.breakPoints('bp_medium')
    },{
      label: 'laptop',
      enter: DG.breakPoints('bp_medium'),
      exit: DG.breakPoints('bp_large')
    },{
      label: 'desktop',
      enter: DG.breakPoints('bp_large'),
      exit: 99999
    }
  ]);

  // Hide the search.
  var sidebarSearchHide = function() {
    // Make sure the header-drop-down-thingy is hidden.
    var drop_down_thingy = window.document.getElementById('header-drop-down-thingy');
    drop_down_thingy.classList.remove('is-visible');

    // Disable activation of the header-drop-down-thingy.
    var search_link = window.document.getElementById('toggle-search');
    search_link.removeEventListener('click', toggleDropDownThingyVisibility)
  };

  // Show the search.
  var sidebarSearchShow = function() {
    if (window.document.body.classList.contains('search-page')) {
      return;
    }

    // Remove display none from the html style attribute.
    var drop_down_thingy = window.document.getElementById('header-drop-down-thingy');
    drop_down_thingy.style.display = null;

    // Instead of going to the search page display the header-drop-down-thingy.
    var search_link = window.document.getElementById('toggle-search');
    search_link.addEventListener('click', toggleDropDownThingyVisibility, true);
  };

  // Deal with clicks on the search button.
  var toggleDropDownThingyVisibility = function(e) {
    e.preventDefault();

    var drop_down_thingy = window.document.getElementById('header-drop-down-thingy');
    drop_down_thingy.classList.toggle('is-visible');

    // Initialize lunr.js search once the requirements were loaded.
    DG.loadScript(DG.baseUrl + '/scripts/search.min.js', initLunrSearch);
  };

  // Register enter and exit functions for laptop and desktop screens.
  mediaQueries.addFunc({
    breakpoint: ['laptop', 'desktop'],
    enter: function() {
      // Only enable search for large screens.
      sidebarSearchShow();
    },
    exit: function() {
      // Make sure search is disabled on small screens.
      sidebarSearchHide();
    }
  });

})(window, DG, jRespond);
