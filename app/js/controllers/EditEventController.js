'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope){
		$scope.saveEvent=function(event, newEventForm) {
			if(newEventForm.$valid){
				window.alert('event' + event.name + 'saved!');
			} 
			
		};
		$scope.cancelEvent=function() {
			// We'll have it navigate back to the Event Details page
			window.location="/EventDetails.html"
		};




	}

	)