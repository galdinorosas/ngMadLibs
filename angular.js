// Angular module with depended ngAnimate module initialized.
angular.module('myApp', ['ngAnimate'])
    // Controller initialized with defining $scope and $timeout 
    // services as function parameters.
    .controller('firstCtrl', function($scope, $timeout) {

        $scope.userName = "";
        $scope.job_title = "";
        $scope.tedious_task = "";
        $scope.dirty_task = "";
        $scope.celebrity = "";
        $scope.useless_skill = "";
        $scope.adjective = "";
        $scope.obnoxiuous_celebrity = "";
        $scope.huge_number = "";
        $scope.gender = "";
        $scope.he = "he";
        $scope.she = "she";
        $scope.him = "him";
        $scope.her = "her";
        $scope.his = "his";
        $scope.textDisplay = true;
        $scope.inputDisplay = true;

        // Submit function which hides the input display and shows the text display
        // after a 1 second delay.
        $scope.submit = function() {
            if ($scope.myForm.$valid) {
                console.log('The form is valid');
                $scope.inputDisplay = false;

                $timeout(function() {
                    $scope.textDisplay = false;
                }, 1000);

                console.log($scope.textDisplay);

            } else {
                console.log('The form is invalid');
            }
        };

        // Restart function, sends the user to the initial input screen with
        // previously user typed values wiped.
        $scope.restart = function() {
            $scope.textDisplay = true;
            $timeout(function() {
                $scope.inputDisplay = true;
                $scope.userName = "";
                $scope.job_title = "";
                $scope.tedious_task = "";
                $scope.dirty_task = "";
                $scope.celebrity = "";
                $scope.useless_skill = "";
                $scope.adjective = "";
                $scope.obnoxiuous_celebrity = "";
                $scope.huge_number = "";
                $scope.gender = "";
                $scope.he = "he";
                $scope.she = "she";
                $scope.him = "him";
                $scope.her = "her";
                $scope.his = "his";
            }, 1000);

        };

        // Go back button that lets the user go back to the input screen
        // with the previously input values still present.
        $scope.goBack = function() {
            $scope.textDisplay = true;
            $timeout(function() {

                $scope.inputDisplay = true;
            }, 1000);

        };



    });
