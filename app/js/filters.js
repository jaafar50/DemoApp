'use strict';

eventsApp.filter('durations', function() {
	return function (duration){

		switch(duration){
			case 1:
				return "45 minutes";
			case 2:
				return "60 minutes";
			case 3:
				return "90 minutes";
			case 4:
				return "120 minutes";
		}
	}


})
