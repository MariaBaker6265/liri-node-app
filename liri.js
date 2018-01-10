//import { print } from 'util';

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
    count: 20
    };
console.log(keys.twitterKeys);
var client1 = new Twitter(keys.twitterKeys);
function myTweets(){
//Get request for MBAlias6265 twitter account.
client1.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error && response.statusCode === 200) {
     //console.log(tweets);
    console.log(JSON.stringify(tweets, ['created_at', 'text']))};
    if (error) {
       ( console.log("Error" + error))};   
    });
}

myTweets();
//==========================================================================
  
var client2 = new spotify (keys.spotifyKeys)

    client2.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
    console.log('Error occurred: ' + err);
      return;
   };

    //Do something with 'data'
    console.log(data);
});
//===========================================================================



