const wtDB = require('../wtdb-credentials');
const mysql = require('serverless-mysql')({
    config: {
        host     : wtDB.host,
        database : wtDB.database,
        user     : wtDB.user,
        password : wtDB.password
    }
});

exports.query = async (queryStr) => {
    let results = await mysql.query(queryStr);
    await mysql.quit();
    return results;
};