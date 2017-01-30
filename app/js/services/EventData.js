//let's create our service. Here we do not put dollar sign when creating a service
// add $log service of angular rather than using console.log ! 
eventsApp.factory('eventData',function($resource){
	var resource= $resource('/data/event/:id', {id:'@id'});
	return {
		// getEvent : function(successcb) {
		// 	//http protocole with GET method retrieving info from the url below through Ajax call
		// 	//if it is a success  , execute function callback inside. The HTTP call is asynchronous, we cant just return it so successcb that we will call when it succeeds
		// 	$http({method: 'GET', url:'/data/event/1'}).success(function(data,status,headers,config){
		// 		// we pass into the successcb the data received from the ajax call
		// 		successcb(data);

		// 	}).error(function(data,status,headers,config){
		// 		$log.warn(data, status, headers, config);

		// 		});

		// }

		getEvent: function(){
			// return $http({method:'GET', url:'/data/event/1'});
			return resource.get({id:1});

		},
		save: function(event){
			event.id=8;
			return resource.save(event);
		}



	};

});