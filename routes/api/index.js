const router = require('express').Router();
const apiRoutes = require('.');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> Error 404: Page not found</h1>');
})

module.exports = router;

const { MongoClient } = require("mongodb");
const username = encodeURIComponent("meganbeek98");
const password = encodeURIComponent("password7");
const cluster = "Cluster0";
const authSource = "";
const authMechanism = "";
let uri =
  `mongodb+srv://${"meganbeek98"}:${"password7"}@${"Cluster0"}/?authSource=${""}&authMechanism=${""}`;
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("social-network");
    const thoughtsColl = database.collection("thoughts");
    const cursor = thoughtsColl.find();
    await cursor.forEach(doc => console.dir(doc));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// mongodb+srv://meganbeek98:password7@cluster0.rau6hku.mongodb.net/social-network?retryWrites=true&w=majority