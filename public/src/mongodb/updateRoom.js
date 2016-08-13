var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';
var updateData = function (db, element, item, index, callback) {

    var collection = db.collection('room');
    var whereStr = {"_id": parseInt(element._id)};

    element.room.map(temp=> {
        if (temp.time === item.time) {
            var updateStr = {
                $set: {
                    "room": [
                        (index === 0) ? {"time": item.time, "state": "1"} : element.room[0],
                        (index === 1) ? {"time": item.time, "state": "1"} : element.room[1],
                        (index === 2)? {"time": item.time, "state": "1"}: element.room[2],
                        (index === 3)? {"time": item.time, "state": "1"} : element.room[3],
                        (index === 4)? {"time": item.time, "state": "1"} : element.room[4],
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
        }
        return;
    })
};
exports.update = function (req, res) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        const element = req.body.element;
        const item = req.body.item;
        const index = parseInt(req.body.index);
        console.log(index);

        updateData(db, element, item, index, function (result) {
            console.log(result);
            db.close();
        });
    });
};
