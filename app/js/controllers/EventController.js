'use strict';

eventsApp.controller('EventController',
	// we put scope and we inject eventData the service we are using ! 
	function EventController($scope, eventData, $log) {
		//Let us create an Event
		$scope.sortorder='name'; // to filter the ng-repeat directive ordered by name. THE ORDER OF SESSIONS IS BY ALPHABETICAL ORDER... WE CANN ORDER BY NUMBER OF PARTICIPANTS...
		$scope.boolValue= true;
		$scope.mystyle = {}; // add the css you want
		$scope.buttonDisabled= true; // add <button class="btn" ng-disabled="buttonDisabled">
		$scope.myclass= ""; // define a blue class in app.css and call the class here and go to html and put ng-class myclass
		// call the getEvent method without forgetting the call back function in case it succeeds as an inline function
		eventData.getEvent()
			.success(function(event){$scope.event=event; })
			.error(function(data,status,headers,config) {
				$log.warn(data,status,headers,config);
			});



		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};
		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};

	}	);