var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addGame =  function(gameData){
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
    if(parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)){
      gameObj.won = true;
    } else {
      gameObj.won = false;
    };

    return $http ({
    	method: 'POST',
    	url : url,
    	data: gameObj  // why dont i need an object {} around game object for posts?
    });

	this.getTeam =  function (team){

		var url = 'https://api.parse.com/1/classes/' + team
		var dfd = $q.defer()
		$http ({
			method: 'GET',
			url: url
		}).then (function(data){
			results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				if (results[i].won);
				wins ++;
			} else {
				losses ++;
			}

			console.log(rsponse)
			dfd.resolve(response)
		)}; 
	} return dfd.promise;

});



		