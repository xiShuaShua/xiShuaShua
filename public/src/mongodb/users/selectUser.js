'use strict';

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

exports.findUser = function (req,res) {

    MongoClient.connect(DB_CONN_STR, function (err, db) {
        const collection = db.collection('users');
        collection.find(req.body).toArray(function (err, result) {
            if (err) {
                console.log('Error' + err);
                return;
            }
            res.send(result).end();
            db.close();
        });
    });
};