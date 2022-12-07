const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());


// connecting mongo Db
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mogpxeu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function run() {
    try {
        client.connect();
        console.log('mongodb connected')
    } catch (error) {
        console.log(error)
    }
}
run();

app.get('/', (req, res) => {
    res.send('dev portal server is running fine');
})














app.listen(port, () => {
    console.log(`server is running on ${port}`);
})