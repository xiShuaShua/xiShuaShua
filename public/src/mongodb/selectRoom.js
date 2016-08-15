/**
 * Created by wangdanna on 16-8-9.
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

var selectData = function (db, callback) {

    var collection = db.collection('room');

    let whereStr = {};
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
