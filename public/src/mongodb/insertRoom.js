var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

var insertData = function (db, data, callback) {
    var collection = db.collection('room');

    collection.insert(data, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
};

exports.save = function (req, res) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let data = req.body;
        console.log(req.body);

        insertData(db, data, function (result) {
            db.close();
        });
    });
};
