'use strict';

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

const insertData = function (db,data, callback) {
    const collection = db.collection('users');

    collection.insert(data, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
};

exports.insertUser = function (req,res) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        const data = req.body;

        insertData(db,data,function (result) {
            db.close();
        });
    });
};