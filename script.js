	// create the module and name it scotchApp
	var smartApp = angular.module('smartApp', ['ngRoute']);

	// configure our routes
	smartApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/details', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the bp details page
			.when('/bpDetails', {
				templateUrl : 'pages/bpDetails.html',
				controller  : 'bpController'
			})

			// route for the hr details page
			.when('/hrDetails', {
				templateUrl : 'pages/hrdetails.html',
				controller  : 'hrController'
			})

			// route for the activity details page
			.when('/activityDetails', {
				templateUrl : 'pages/activitydetails.html',
				controller  : 'activityController'
			});
	});

	// create the controller and inject Angular's $scope
	smartApp.controller('mainController', function($scope,$location) {
		// create a message to display in our view
		//$scope.message = 'Everyone come and see how good I look!';
		$scope.bpDetails = function(){
			$location.path('/bpDetails');
		}

		$scope.hrDetails = function(){
			$location.path('/hrDetails');
		}

		$scope.activityDetails = function(){
			$location.path('/activityDetails');
		}
	});

	smartApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	smartApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	smartApp.controller('bpController', function($scope,$location) {
		$scope.arr = [
			{date: "12/02/2016",BP: "120/80"},
			{date: "12/03/2016",BP: "120/90"},
			{date: "12/04/2016",BP: "120/70"}
		];
	});

	smartApp.controller('hrController', function($scope,$location) {
		$scope.arr = [
			{date: "12/02/2016",HR: "90"},
			{date: "12/03/2016",HR: "100"},
			{date: "12/04/2016",HR: "70"}
		];
	});

	smartApp.controller('activityController', function($scope,$location) {
		$scope.arr = [
			{date: "12/02/2016",activity: "Walking",Effort: "10000 steps"},
			{date: "12/02/2016",activity: "Running",Effort: "1 km"},
			{date: "12/02/2016",activity: "Swimming",Effort: "0.5 km"}
		];
	});