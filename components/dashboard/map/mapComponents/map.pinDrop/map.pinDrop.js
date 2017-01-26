     function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.948766, lng: -87.691497},
          zoom: 12
        });

        var layer = new google.maps.FusionTablesLayer({
          query: {
            select: 'address',
            from: '1d7qpn60tAvG4LEg4jvClZbc1ggp8fIGGvpMGzA',
            where: 'ridership > 5000'
          }
        });
        layer.setMap(map);
      }