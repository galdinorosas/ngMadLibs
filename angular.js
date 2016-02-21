angular.module('myApp',[])
.controller('firstCtrl', function($scope){
	$scope.madlibs = {
		userName: 'name1',

	}

	$scope.userName = 'name2';
	$scope.job_title = 'job title';
	$scope.tedious_task='tedious task';
	$scope.dirty_task='dirty task';
	$scope.celebrity='celebrity';
	$scope.useless_skill='useless skill';
	$scope.adjective='adjective';
	$scope.obnoxiuous_celebrity = 'obnoxiuous celebrity';
	$scope.huge_number='a large number';
	$scope.gender="gender (male or female)"
	$scope.he="he";
	$scope.she="she";
	$scope.him="him";
	$scope.her="her";
	$scope.his="his";
	$scope.heOrShe = "he /or she";
	$scope.hisOrHer = "his /or her";
	$scope.himOrHer = "him /or her";

	$scope.test = function(f){
		console.log(f);
		if(f.$valid){
			console.log('true');
		}
	}
	$scope.textDisplay = true;

	$scope.submit = function(){
		if( $scope.myForm.$valid ) {
		    console.log('The form is valid');
		    $scope.textDisplay = false;
		    console.log($scope.textDisplay);

		} else {
		    console.log('The form is invalid');
		}
	};

	$scope.restart = function(){
		$scope.textDisplay = true;
		$scope.userName = 'name2';
		$scope.job_title = 'job title';
		$scope.tedious_task='tedious task';
		$scope.dirty_task='dirty task';
		$scope.celebrity='celebrity';
		$scope.useless_skill='useless skill';
		$scope.adjective='adjective';
		$scope.obnoxiuous_celebrity = 'obnoxiuous celebrity';
		$scope.huge_number='a large number';
		$scope.gender="gender (male or female)"
		$scope.he="he";
		$scope.she="she";
		$scope.him="him";
		$scope.her="her";
		$scope.his="his";
		$scope.heOrShe = "he /or she";
		$scope.hisOrHer = "his /or her";
		$scope.himOrHer = "him /or her";

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