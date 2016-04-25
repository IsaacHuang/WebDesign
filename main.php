<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>
		CYCU_MAP
	</title>
</head>
<body>
	<div id="map" width="600" height="300">
		
	</div>
	<script type="text/javascript">
		function initMap() {
  			// Create a map object and specify the DOM element for display.
  			var map = new google.maps.Map(document.getElementById('map'), {
    			center: {lat: -34.397, lng: 150.644},
    			scrollwheel: false,
    			zoom: 8
  			});
		}
	</script>
	<script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfk27NsL0_DzLgFmkJIAP5X-qbkEFcNbo&callback=initMap">
    </script>
</body>
</html>
