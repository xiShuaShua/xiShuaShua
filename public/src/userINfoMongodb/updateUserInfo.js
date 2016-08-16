const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

const updateData = function (db, userName, newPassword, callback) {
    const collection = db.collection('user');
    const whereStr = {"name": userName};
    const updateStr = {
        $set: {
            "password": newPassword,
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
    exports.update = function (req, res) {

        MongoClient.connect(DB_CONN_STR, function (err, db) {
            const userName = req.body.name;
            const newPassword = req.body.password;
            console.log(userName + '1111' + newPassword);

            updateData(db, userName, newPassword, function (result) {
                db.close();
            });
        });
    };
