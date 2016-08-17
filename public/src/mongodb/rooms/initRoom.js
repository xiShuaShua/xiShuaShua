const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

var selectData = function (db, callback) {

    var collection = db.collection('rooms');

    let whereStr = {};
    collection.find(whereStr).toArray(function (err, result) {
        if (err) {
            console.log('Error' + err);
            return;
        }
        callback(result);
    });
};

var updateData = function (db, result, callback) {
    var collection = db.collection('rooms');
    const whereStr = {};
    const updateStr ={
        $set: {
            "room": [
                {"time": "17:00-18:00", "state": "0"},
                {"time": "18:00-19:00", "state": "0"},
                {"time": "19:00-20:00", "state": "0"},
                {"time": "20:00-21:00", "state": "0"},
                {"time": "21:00-22:00", "state": "0"},
            ]
        }

    };

    collection.updateMany(whereStr, updateStr, {safe: true}, function (err, result) {
        if (err) {
            console.log('Error' + err);
            return;
        }
        callback(result);
    });
};

exports.init = function (req, res) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        selectData(db, function (result) {
            updateData(db, result, function (result) {
                db.close();
                res.send("更新数据库成功");
            });
        });
    });
};
