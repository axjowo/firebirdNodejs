var Firebird = require("node-firebird")

var options = {};

options.host = 'firebird';
options.port = 3050;
options.database = 'test';
options.user = 'sysdba';
options.password = 'masterkey';

Firebird.attach(options, function(err, db) {
    if (err)
        throw err;

    // db = DATABASE
    // db.query('CREATE TABLE test (id int)', function(err, result) {
    //     // IMPORTANT: close the connection
    //     console.log(result)
    //     console.log(err)
    //     // db.detach();
    // })
    db.query('INSERT INTO test (id) values (1)', function(err, result) {
        // IMPORTANT: close the connection
        console.log(result)
        console.log(err)
        db.detach();
    })
    db.query('SELECT * FROM test', function(err, result) {
        // IMPORTANT: close the connection
        console.log(result)
        console.log(err)
        db.detach();
    })

});