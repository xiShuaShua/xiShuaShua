'use strict';

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

const selectData = function (db, callback) {
    const collection = db.collection('rooms');

    const whereStr = {};
    collection.find(whereStr).toArray(function (err, result) {
        if (err) {
            console.log('Error' + err);
            return;
        }
        callback(result);
    });
};

exports.findAll = function (req, res) {

    MongoClient.connect(DB_CONN_STR, function (err, db) {
        selectData(db, function (result) {
            db.close();
            res.json(result).end();
        });
    });
};
