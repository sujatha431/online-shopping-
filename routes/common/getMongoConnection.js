var {MongoClient} = require("mongodb");
const dbUrl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(dbUrl);

var mongoDbRef = {
    getMongoDbRef(data, type, collectionName) {
        return getDbConnection(data, type, collectionName);
    }
}

async function getDbConnection(userData, operationType, collectionName) {
    // Use connect method to connect to the server
    await mongoClient.connect(); // connection to the mongo server
    const db = mongoClient.db("onlineShoppingDb");
    const collection = db.collection(collectionName);
    if (operationType == 'find') {
        return collection.find({accountId: userData.accountId}).toArray();
    } else if (operationType == 'insert') {
        return collection.insertOne(userData);
    } else if (operationType == 'findProducts') {
        var userFilter = userData;
        var queryObj = {};
        if (userFilter.category && userFilter.category.length) {
            queryObj.category = {$in: userFilter.category};
        }
        if (userFilter.price) {
            queryObj.price = {$gt: 0, $lt: parseInt(userFilter.price)}
        }
        console.log(queryObj);
        return collection.find(queryObj).toArray();
    }
}

 module.exports = mongoDbRef;