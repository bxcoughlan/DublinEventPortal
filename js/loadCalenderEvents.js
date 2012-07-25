  	  var eventsArray = [];
    var retrievedEvent = [];
		
		// set up the event entry for each event
		// with a full set up with a database on the server side, event details could be fetched from the DB
		// and inserted into the array
    retrievedEvent[0] = "Wrecking Ball Tour";		 					// this is the name of the event as it appears on the calender
	  retrievedEvent[1] = "Bruce Springsteen - Wrecking Ball Tour";	// this is the full name of the event - appears in dialog window		
		retrievedEvent[2] = "Tue, 17 Jul 2012 19:00:00 GMT";	 // date of event
		retrievedEvent[3] = "http://brucespringsteen.net/";		 // website of event
		retrievedEvent[4] = "images/springsteen1_thumb.jpg";	 // image/logo of event
		eventsArray.push(retrievedEvent);

		var retrievedEvent2 = [];
		retrievedEvent2[0] = "My Event4";
		retrievedEvent2[1] = "My Event4";
		retrievedEvent2[2] = "Sat, 14 Jul 2012 13:00:00 GMT";
		retrievedEvent2[3] = "http://google.com/";
		retrievedEvent2[4] = "images/castles.jpg";
		eventsArray.push(retrievedEvent2);
		
		var retrievedEvent3 = [];
		retrievedEvent3[0] = "My Event3";
		retrievedEvent3[1] = "My Event3";
		retrievedEvent3[2] = "Tue, 14 Aug 2012 13:00:00 GMT";
		retrievedEvent3[3] = "http://google.com/";
		retrievedEvent3[4] = "images/castles.jpg";
		eventsArray.push(retrievedEvent3);
		
		var retrievedEvent4 = [];
		retrievedEvent4[0] = "My Event2";
		retrievedEvent4[1] = "My Event2";
		retrievedEvent4[2] = "Sat, 21 Jul 2012 13:00:00 GMT";
		retrievedEvent4[3] = "http://google.com/";
		retrievedEvent4[4] = "images/castles.jpg";
		eventsArray.push(retrievedEvent4);
		
		var formattedEventInfo = [];
		for (var i = 0; i < eventsArray.length; i++) {
    		formattedEventInfo.push({
        	title: eventsArray[i][0],
					fullTitle: eventsArray[i][1],
					start: eventsArray[i][2],
          url: eventsArray[i][3],
					image: eventsArray[i][4]
        });
    }

	  $(document).ready(function() {
      // page is now ready, initialize the calendar...
      $('#calendar').fullCalendar({
			  events: formattedEventInfo, 
    		eventClick: function(event) {
          if (event.url) {
            window.open(event.url);
            return false;
          }
        },
				eventMouseover: function(event) {
				// pop up dialog window with event details when mouse moved over the event.
				  $( "#dialog" ).dialog('open');
				  document.getElementById("dialogtable").style.display="block";
					document.getElementById("dialogevent").innerHTML = event.fullTitle ;
					document.getElementById("dialogdate").innerHTML = event.start ;
					document.getElementById("dialogwebsite").innerHTML = '<a href="' + event.url + '" target="_blank">' + event.url + '</a>' ;
					document.getElementById("dialogimage").innerHTML = '<img src="' + event.image + '" alt="" />';

				}
// I commented this out because the of unstable dialog window appearing/disappearing when mouse events occur.
// if the eventMouseout event is used the dialog flickers and is hard to read.
//				eventMouseout: function(event) {
//				  document.getElementById("dialogtable").style.display="none";
//				  $( "#dialog" ).dialog('close');
//				}
      })
    });