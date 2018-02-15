const {MongoClient, ObjectID} = require('mongodb');
const test = require('assert');

// Connection url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Connect using MongoClient
MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db(dbName);
  console.log('Server connection successful');

  // db.collection('User').insertOne({
  //   name: 'Dolores',
  //   age: 59,
  //   location: 'Galesburg'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
