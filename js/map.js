

//this is the function that creates the map object and loads it into the "map" element in the
// maps page - the function will be called in the maps page once this page and the googlemaps api has loaded

function initialize() {

// these are map initialisation values which are put into a "literal object" called myOptions

var myOptions = {center: new google.maps.LatLng(53.347633,-6.259676),
zoom: 11,  mapTypeId: google.maps.MapTypeId.ROADMAP};

// this is where the map object is defined for the maps page and it becomes an instance of the map class
//the map object with all its data and graphics is loaded into the "map" div is by the getElementById method

var map = new google.maps.Map(document.getElementById("map"),myOptions);

//this should set up an info window for each of the events
		


		var newEventOneLocation = new google.maps.LatLng(53.3607,-6.25138);
		var newEventOneMarker = new google.maps.Marker({
		    position: newEventOneLocation,
		    map:map,
		    title:"Croke Park Event"});

		newEventOneMarker.setMap(map);


		var newEventTwoLocation = new google.maps.LatLng(53.338122,-6.258742);
		var newEventTwoMarker = new google.maps.Marker({
		    position: newEventTwoLocation,
		    map:map,
		    title:"Stephens Green Event"});

		newEventTwoMarker.setMap(map);
		

		var newEventThreeLocation = new google.maps.LatLng(53.293471,-6.246382);
		var newEventThreeMarker = new google.maps.Marker({
		    position: newEventThreeLocation,
		    map:map,
		    title:"Mill Theatre Event"});

		newEventThreeMarker.setMap(map);

//add content into the variable contentString by creating a div id for the content styling and content
 var contentString = '<div id="content" style="margin-left:5px;margin-right:5px;width:190px;margin-top:3px;margin-bottom:3px;font-size:12px;color:navy;overflow:hidden;"><p>Croke Park Rocks</p><p>For One Night Only</p><p> 18th July 2012</p><p><a href="http://www.crokepark.ie" target="_blank">More Information</a></p><img src="images/crokepark.jpg" alt = "crokepark" width="125px" height="55px"/><br></div>';


//create a new infowindow object and call the content from here
 var infowindow = new google.maps.InfoWindow({content:contentString,
    						width:150, height:100});
//the above code is repeated for each of the other two markers on the map so 
//separate variables are created for each and a new infowindow object is created for each 
  
  var contentStringOne = '<div id="content" style="margin-left:5px;margin-right:5px;width:190px;margin-top:3px;margin-bottom:3px;font-size:12px;color:navy;overflow:hidden;"><p>Lark in the Park on Stephens Green</p><p>13th 14th 15th July 2012</p><p><a href="index.html"target="blank">More Information</a></p><img src="images/Stephens Green.jpg" alt = "Stephens Green Concert" width = "125px" height = "55px"/><br></div>';

   var infowindowTwo = new google.maps.InfoWindow({content:contentStringOne,
    						width: 150, height:35});
                                                                                         
  var contentStringTwo = '<div id="content" style="margin-left:5px;margin-right:5px;width:190px;margin-top:3px;margin-bottom:3px;font-size:12px;color:navy;overflow:hidden;"><p>The Dubliners Surprise </p><p>One Night Only</p><p>Mill Theatre Dundrum 9th July 2012</p><p><a href="http://www.milltheatre.ie" target="blank">More Information</a></p><img src="images/dundrum.jpg" alt = "dundrum town centre" width = "125px" height = "55px"/><br></div>';

   var infowindowThree = new google.maps.InfoWindow({content:contentStringTwo,
    						width: 150, height:35});
  
      // this adds an event listener for newEventOneMarker and opens the infowindow on click 
        google.maps.event.addListener(newEventOneMarker, 'click', function() {
    		                            infowindow.open(map,newEventOneMarker);
    
    
         	});

	 // again this adds an event listener for newEventTwoMarker and opens the infowindow on click 
	     google.maps.event.addListener(newEventTwoMarker, 'click', function() {
	    		                            infowindowTwo.open(map,newEventTwoMarker);
  
	         	});

	 // again this adds an event listener for newEventThreeMarker and opens the infowindow on click 
        google.maps.event.addListener(newEventThreeMarker, 'click', function() {
    		                            infowindowThree.open(map,newEventThreeMarker);
    
    
         	});
	


}
	

//this should allow the pages, especially html to load first before the googlemaps api starts to load

function loadScript() {

var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://maps.googleapis.com/maps/api/js?sensor=false";
document.body.appendChild(script);

}


window.onload = loadScript;

