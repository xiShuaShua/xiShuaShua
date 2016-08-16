'use strict';

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

const updateData = function (db, element, item, index, callback) {
    const collection = db.collection('rooms');
    const whereStr = {"_id": parseInt(element._id)};

    element.room.map(temp=> {
        if (temp.time === item.time) {
            const updateStr = {
                $set: {
                    "room": [
                        (index === 0) ? {"time": item.time, "state": "1"} : element.room[0],
                        (index === 1) ? {"time": item.time, "state": "1"} : element.room[1],
                        (index === 2) ? {"time": item.time, "state": "1"} : element.room[2],
                        (index === 3) ? {"time": item.time, "state": "1"} : element.room[3],
                        (index === 4) ? {"time": item.time, "state": "1"} : element.room[4],
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
    })
};
exports.update = function (req, res) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        const element = req.body.element;
        const item = req.body.item;
        const index = parseInt(req.body.index);

        updateData(db, element, item, index, function (result) {
            db.close();
        });
    });
};
