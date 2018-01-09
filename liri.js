
//require('dotenv').config({path: 'C:\Users\RetailAdmin\Documents\CWRUCodingBootcamp\Homeworks\Homework10\liri-node-app\.env'})
//require('dotenv').config()
var $ = require('jquery');
var request = require('request');
var fs = require('fs');
var keys = require('../liri-node-app/keys');
var Twitter = require('twitter');
var client = new Twitter(keys.twitterKeys);
//var spotify = require('spotify');
//Executed (npm install twitter) in node.
//Node require command to access twitter.



//Get request for MBAlias6265 twitter account.
  client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
    console.log(tweets);
 });

  
//var clientTwo = new Spotify({
    //SPOTIFY_ID:'7b3868ab18ac4fe79809e7852f14565f',
    //SPOTIFY_SECRET:'6f3155929e894477a9598d727980b02f',
//});
//spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    //if ( err ) {
        //console.log('Error occurred: ' + err);
       // return;
    //}

    // Do something with 'data'
    //console.log(data);
//});
