
//require('dotenv').config({path: 'C:\Users\RetailAdmin\Documents\CWRUCodingBootcamp\Homeworks\Homework10\liri-node-app\.env'})
require('dotenv').config()
var $ = require('jquery');

//Executed (npm install twitter) in node.
//Node require command to access twitter.
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.twitter_consumer_key,
    consumer_secret: process.env.twitter_consumer_secret,
    access_token_key: process.env.twitter_access_token_key,
    access_token_secret: process.env.twitter_access_token_secret
  });


  client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
    console.log(tweets);
 });

  
//var spotify = new Spotify(keys.spotify);
