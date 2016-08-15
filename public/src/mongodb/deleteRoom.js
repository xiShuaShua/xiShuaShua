var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

var deleteData = function (db, callback) {
    var collection = db.collection('room');

    var deleteStr = {"_id": 2};

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