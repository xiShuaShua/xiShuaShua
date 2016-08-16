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

   result.map(temp => {
    const whereStr = {"_id": temp._id};
    const rooms = temp.room;
    rooms.map(item => {
          const updateStr = {
            $set: {
                "room": [
                     {"time": item.time, "state": "0"},
                     {"time": item.time, "state": "0"},
                     {"time": item.time, "state": "0"},
                     {"time": item.time, "state": "0"},
                     {"time": item.time, "state": "0"},
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
    })
    return;
})
}

exports.init = function (req, res) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        selectData(db, function (result) {
              updateData(db, result, function (result) {
                  db.close();
              });
        });
    });
};
