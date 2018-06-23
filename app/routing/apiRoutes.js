// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 


var friendsData = require("../data/friends.js");


///////////////////////////////////////
// Routing for api 
//////////////////////////////////////

module.exports = function(app) {


	// route for api (json data)
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});




	// post route 
	app.post("/api/friends", function(req, res) {
		// console.log("friendsData: ",friendsData);
		var newFriend = req.body;
		console.log("newFriend: ", newFriend);
		var friendListScoreCard = [];

		for (i = 0; i < friendsData.length; i++) {
			var scoreDiff = 0;
			for (j = 0; j < 10; j++) {
				var userScoreCard = newFriend['scores[]'];
				// console.log("userScoreCard: ", userScoreCard);
				var friendScoreCard = friendsData[i].scores;
				// console.log("friendScoreCard: ", friendScoreCard);

				scoreDiff += Math.abs(parseInt(userScoreCard[j]) - friendsData[i].scores[j]);
				// console.log("scoreDiff: ", scoreDiff);

			}
			friendListScoreCard.push(scoreDiff);
			// console.log("friendListScoreCard_1: ", friendListScoreCard);

		}
		var min = Math.min.apply(null, friendListScoreCard);
		// var max = Math.max.apply(null, friendListScoreCard);
		for (k = 0; k < friendListScoreCard.length; k++) {



			if (friendListScoreCard[k] == min) {
				var newFriendName = friendsData[k].name;
				var newFriendPhoto = friendsData[k].photo;
				var bestFriend  = {
					newFriendName: newFriendName,
					newFriendPhoto: newFriendPhoto
				}
				console.log("bestFriend: ", bestFriend);
				res.send(bestFriend);
				// res.json(newFriend);

			};
		};
		// friendsData.push(newFriend);

	});
};

