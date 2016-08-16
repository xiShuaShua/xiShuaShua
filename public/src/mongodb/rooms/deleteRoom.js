'use strict';

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

const deleteData = function (db, callback) {
    const collection = db.collection('rooms');
    const deleteStr = {"_id": 2};

    collection.remove(deleteStr, function (err, result) {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        callback(result);
    });
};

MongoClient.connect(DB_CONN_STR, function (err, db) {
    deleteData(db, function (result) {
        db.close();
    });
});
module.exports = deleteData;