
var mongoose    = require('mongoose');

const express = require('express');
const app = express();

const db1_Router = require('./dbtest/db1');

//app.use(logger('dev', {}));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({
//  extended: true
//}));


app.use('/db1',db1_Router);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Example skill server listening on port 3000!');
});

var database;
var UserSchema;
var Usermodel;

var databaseUrl = "mongodb://blank:lhs90250@localhost:27017/fatimachat";

mongoose.connect(databaseUrl);
database = mongoose.connection;

database.on('error', console.error.bind(console,'mongoose connection error'));
database.on('open', function() {
  console.log('db connecting ok');

})

database.on('disconnected', function() {
  console.log('db reconnecting...')
  //setInterval(connectDB, 5000);
})
