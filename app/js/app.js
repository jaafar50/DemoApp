'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource'])
	.factory('myCache', function($cacheFactory){
		return $cacheFactory('myCache', {capacity:3}); // we limit it to 3 if we want to
	});
