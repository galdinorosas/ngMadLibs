angular.module('myApp',['ngAnimate'])
.controller('firstCtrl', function($scope,$timeout){


	$scope.userName = "";
	$scope.job_title = "";
	$scope.tedious_task="";
	$scope.dirty_task="";
	$scope.celebrity="";
	$scope.useless_skill="";
	$scope.adjective="";
	$scope.obnoxiuous_celebrity = "";
	$scope.huge_number="";
	$scope.gender="";
	$scope.he="he";
	$scope.she="she";
	$scope.him="him";
	$scope.her="her";
	$scope.his="his";


	

	$scope.test = function(f){
		console.log(f);
		if(f.$valid){
			console.log('true');
		}
	}
	$scope.textDisplay = true;
	$scope.inputDisplay = true;

	$scope.submit = function(){
		if( $scope.myForm.$valid ) {
		    console.log('The form is valid');
		    $scope.inputDisplay = false;

		    $timeout(function(){
		    	$scope.textDisplay = false;
		    }, 1000);
		    
		    console.log($scope.textDisplay);

		} else {
		    console.log('The form is invalid');
		}
	};

	$scope.restart = function(){
		$scope.textDisplay = true;
		$timeout(function() {
			$scope.inputDisplay = true;
			$scope.userName = "";
			$scope.job_title = "";
			$scope.tedious_task="";
			$scope.dirty_task="";
			$scope.celebrity="";
			$scope.useless_skill="";
			$scope.adjective="";
			$scope.obnoxiuous_celebrity = "";
			$scope.huge_number="";
			$scope.gender="";
			$scope.he="he";
			$scope.she="she";
			$scope.him="him";
			$scope.her="her";
			$scope.his="his";
		}, 1000);
		
	};

	$scope.goBack = function(){
		$scope.textDisplay = true;
		$timeout(function() {
			
			$scope.inputDisplay = true;
		}, 1000);

	};



});

// ng-init="userName='male name'; 
// job_title='job title';
// tedious_task='tedious task'; 
// dirty_task='dirty task'; 
// celebrity='celebrity'; 
// useless_skill='useless skill'; 
// adjective='adjective'; 
// obnoxiuous_celebrity = 'obnoxiuous celebrity'; 
// huge_number='huge number'"