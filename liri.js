request = require('request');
fs = require('fs');
var keys = require('../liri-node-app/keys');
var spotify = require('spotify');
//Executed (npm install twitter) in node.
//Node require command to access twitter.
var Twitter = require('twitter');
params = {
    screen_name: 'MBAlias6265',
    count: 2
    }

client = new Twitter(keys.twitterKeys);

//Get request for MBAlias6265 twitter account.
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    console.log(error);
    console.log(tweets);
});

  
//var client = new spotify ({
    //SPOTIFY_ID:'7b3868ab18ac4fe79809e7852f14565f',
    //SPOTIFY_SECRET:'6f3155929e894477a9598d727980b02f',
//spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
 // if ( err ) {
    //console.log('Error occurred: ' + err);
      //return;
   //}

    // Do something with 'data'
    //console.log(data);
//});
//-------------------------------------------------------------------
