        var myCenter=new google.maps.LatLng(23.790352, 90.409239);
        var marker;
        
        function initialize()
        {
        var mapProp = {
            center:myCenter,
            zoom:14,
            scrollwheel: false,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
            
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
            
        var marker=new google.maps.Marker({
            position:myCenter,
            icon: 'img/pointer.png',
            animation:google.maps.Animation.BOUNCE
        });
            
        marker.setMap(map);
        }
        
        google.maps.event.addDomListener(window, 'load', initialize);