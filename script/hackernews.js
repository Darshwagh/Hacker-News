    
var app = angular.module("mystories", []);
	app.controller("topstoriesCtrl", function ($scope, $http) {
			$scope.Stories=[];
			$scope.init = function (){
			$http.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(function(responseData) {
                    story_ids = responseData.data;
					for (var i = 0; i < 15; i++)
					{					
					$http.get('https://hacker-news.firebaseio.com/v0/item/'+ story_ids[i] +'.json').then( function (response){
                   	$scope.Stories.push(response.data); 
                    $scope.d = ((new Date(response.data.time)).getHours());
	                	 });
					}
                });

			}

    });
    

	