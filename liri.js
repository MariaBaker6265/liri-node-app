'use strict';
var fs = require('fs');
var keys = require('../liri-node-app/keys');
var spotify = require('node-spotify-api');
var request = require('request');
//Executed (npm install twitter) in node.
//Node require command to access twitter.
var Twitter = require('twitter');
var params = {
    screen_name: 'MBAlias6265',
    count: 2
    };
console.log(keys.twitterKeys);
var client = new Twitter(keys.twitterKeys);

//Get request for MBAlias6265 twitter account.
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    console.log(error);
    console.log(tweets);
});
//==========================================================================
  
var client = new spotify (keys.spotifyKeys)

    client.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
    console.log('Error occurred: ' + err);
      return;
   };

    //Do something with 'data'
    console.log(data);
});