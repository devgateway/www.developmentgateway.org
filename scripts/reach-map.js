(function(mapEl) {
  if (!mapEl) {
    throw new Error('no map element ("#reach-map") found');
  }

  function sizeMapContainer(mapEl) {
    // expand to the viewport size
    var offsetTop = (function getOffset(node, offset) {
      return node ?
        getOffset(node.offsetParent, (offset || 0) + node.offsetTop) :
        offset;
    })(mapEl);
    var viewH = Math.max(document.documentElement.clientHeight, window.innerHeight || 200);
    mapEl.style.height = Math.min((viewH - offsetTop), 600) + 'px';
  }

  function initMap(mapEl) {
    if (!(mapEl.getAttribute('data-tiles'))) {
      throw new Error('#reach-map must have a "data-tiles" property.');
    }
    // set up the map
    var map = L.map(mapEl, {
      scrollWheelZoom: false,
      zoomControl: false,  // re-added later in the desired location
    }).setView([10, 15], 1);
    var needToZoomBy = map.getBounds()._northEast.lng / (180*1.5);
    if (needToZoomBy > 1) {
      var zoomSteps = Math.ceil(Math.log(needToZoomBy) / Math.log(2));
      map.zoomIn(zoomSteps);
    }
    L.tileLayer(mapEl.getAttribute('data-tiles'), {
      attribution: 'Data <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a> <a href="http://openstreetmap.org">OpenStreetMap</a>',
      worldCopyJump: true,
      minZoom: parseInt(mapEl.getAttribute('data-min-zoom') || 0, 10),
      maxZoom: parseInt(mapEl.getAttribute('data-max-zoom') || 5, 10)
    }).addTo(map);
    L.control.zoom({
      position: 'bottomright',
      zoomOutText: '',  // we will draw our own centred minus with css
    }).addTo(map);
    return map;
  }

  function initInset(mapEl) {
    var h = mapEl.querySelector('.map-inset-text > h1'),
        p = mapEl.querySelector('.map-inset-text > p.help'),
        orinalText = {
          h: h.textContent,
          p: p.textContent
        };
    function rewrite(to) {
      h.textContent = to.h;
      p.textContent = to.p;
    }
    return {
      detail: function(data) {
        return function() {
          rewrite({
            h: data.country,
            p: data.project + ' – ' + data.year + '. ' + data.description
          });
        }
      },
      reset: function(data) {
        rewrite(orinalText);
      }
    }
  }

  function parseDomData(qs) {
    var dataEls = document.querySelectorAll(qs),
        i,
        data = [],
        convert = {
          string: function(v) { return v; },
          float: function(v) { return parseFloat(v); },
          int: function(v) { return parseInt(v, 10); }
        };

    function pickData(el, picks) {
      var d = {};
      for (var k in picks) {
        if (picks.hasOwnProperty(k)) {
          d[k] = picks[k](el.getAttribute('data-' + k));
        }
      }
      return d;
    }

    for (i=0; i<dataEls.length; i++) {
      data.push(pickData(dataEls[i], {
        country: convert.string,
        id: convert.string,
        lat: convert.float,
        lon: convert.float,
        year: convert.int,
        project: convert.string,
        description: convert.string,
        quote: convert.string,
        quoteAuthor: convert.string,
        url: convert.string,
        region: convert.string,
      }));
    }
    return data;
  }

  function drawMarkers(map, data, inset) {
    var marker;

    function locate(where) {
      return function() {
        window.location.hash = where;
      }
    }

    for (var i=0; i<data.length; i++) {
      marker = L.marker([data[i].lat, data[i].lon], {
        icon: L.divIcon({
          className: 'country-marker',
          iconSize: null  // don't let leaflet put a size on the el style  >:(
        })
      });
      marker.on('click', locate(data[i].id));
      marker.on('mouseover', inset.detail(data[i]));
      marker.on('mouseout', inset.reset);
      marker.addTo(map);
    }
  }

  // ready set go
  (function draw(mapEl) {
    sizeMapContainer(mapEl);
    var inset = initInset(mapEl);
    var map = initMap(mapEl);
    var data = parseDomData('.reach-data > .reach-map-data');
    drawMarkers(map, data, inset);
  })(mapEl);

})(document.getElementById('reach-map'));
