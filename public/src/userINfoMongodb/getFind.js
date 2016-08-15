var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

exports.findUser = function (req,res) {

    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var collection = db.collection('user');
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