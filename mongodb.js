const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "TMApp";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable To Connect to DB");
    }
    console.log("Connected To DB");

    const db = client.db(databaseName);

    db.collection("User").insertOne({
      name: "preminda",
      age: "23",
    });
  }
);
