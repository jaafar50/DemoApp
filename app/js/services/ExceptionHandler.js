'use strict';

eventsApp.factory('$exceptionHandler', function(){
	//the $ sign overrides the default service
	return function (exception){
		console.log("exception handled : "+ exception.message);


	};

});