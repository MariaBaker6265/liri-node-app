'use strict';
var fs = require('fs');
var keys = require('../liri-node-app/keys');
var spotify = require('spotify');
var request = require('request');
//Executed (npm install twitter) in node.
//Node require command to access twitter.
var Twitter = require('twitter');
var params = {
    screen_name: 'MBAlias6265',
    count: 2
    };

var client = new Twitter(keys.twitterKeys);

//Get request for MBAlias6265 twitter account.
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    console.log(error);
    console.log(tweets);
});
//==========================================================================
  
var client = new spotify ({
    id:'7b3868ab18ac4fe79809e7852f14565f',
    secret:'6f3155929e894477a9598d727980b02f'
})

    client.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
    console.log('Error occurred: ' + err);
      return;
   };

    //Do something with 'data'
    console.log(data);
});