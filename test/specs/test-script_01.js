
const assert  = require('assert');
var dbc       = require('../../config/db');
var db        = require('../../index');


describe('sample databse testing script', function () {

  it("should executes a SQL select query on mysql database and fetch the result set", function (done){
    var sql = 'SELECT * FROM user where user_name = "ABC"';
    db.execute(dbc.mysql, sql, function(results){
      console.log(results);
      assert.equal(results.rows[0].user_id, 1001)      //mocha style assertions
      done();
    });
  });

  it("should insert a SQL select statement on mysql database and fetch the result set", function (done){
    var sql = 'INSERT INTO user (user_id, user_name, user_email, user_role) VALUES (2001, “XYZ”, “xyz@test.com”, “Editor”)';

    db.execute(dbc.mysql, sql, function(){
      db.execute(dbc.mysql, 'SELECT * FROM user where user_id = 2001', function(results){
        console.log(results);
      });
      done();
    });
  });

});
