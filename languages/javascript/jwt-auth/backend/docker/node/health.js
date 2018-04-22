
const database = process.env.MONGO_URL;

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(database, function (err, db) {
    if (err) {
        console.log(1); //error
        return;
    }

    db.command({ ping: 1 }, function (err, result) {
        if (err) {
            console.log(1); //error
            db.close();
            return;
        }

        const {ok} = result;
        if (ok === 1) {
            console.log(0);
            db.close();
            return;
        }

        db.close();
        console.log(1);
    });
});
