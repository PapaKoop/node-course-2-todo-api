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

  db.collection('User').find({name: "Dolores"}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  client.close();
});
