//import { MongoClient } from "mongodb";
const { MongoClient, ConnectionCheckedInEvent } = require("mongodb");

var url = 'mongodb+srv://dbUser:a6qsxUg6akKH8XzE@cluster0.6ngci.mongodb.net/geoquiz?retryWrites=true&w=majority'
var options = {
    useUnifiedTopology: true,
};

var db = null;
var client = null;

async function connect() {
    if (db == null) {
        client = await MongoClient.connect(url, options)
        db = await client.db('countries')
    }
    return db
}

async function getCountry(countryName) {
    var conn = await connect();
    var query = {}
    query[countryName] = { $exists : true }
    console.log(query)
    var country = await conn.collection('countries').findOne(query)
    return country
}
