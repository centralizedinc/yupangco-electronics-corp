'use strict'

//DB connection
// =============================================================================
var mongoose = require('mongoose');
// var uri = 'mongodb://kbyango:Kyutkris24@cluster0-shard-00-00-4m91r.azure.mongodb.net:27017,cluster0-shard-00-01-4m91r.azure.mongodb.net:27017,cluster0-shard-00-02-4m91r.azure.mongodb.net:27017/chatbot?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
var uri = 'mongodb://heroku_x6bq6b9l:f0m69kg8ajtvl6k0hka2s1tgaf@ds129024.mlab.com:29024/heroku_x6bq6b9l'

mongoose.Promise = require('bluebird');

function connect(){
    mongoose.connect(process.env.MONGODB_URI || uri, { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
}

module.exports = {
    connect: connect,
    db : mongoose
};