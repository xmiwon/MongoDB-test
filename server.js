import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017/');

const dbName = 'fruitsDB';

const main = async() => {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('fruits');
  const insertResult = await collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit",
    },
    {
      name: "Orange",
      score: 6,
      review: "Kinda sour",
    },
    {
      name: "Banana",
      score: 9,
      review: "Great stuff",
    },
  ]);
  console.log('Inserted documents =>', insertResult);

  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

