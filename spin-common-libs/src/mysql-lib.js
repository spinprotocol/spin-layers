const wtDBInfo = require('../config/wtdb_info');
const mysql = require('serverless-mysql')({
    config: {
        host     : wtDBInfo.host,
        database : wtDBInfo.database,
        user     : wtDBInfo.user,
        password : wtDBInfo.password
    }
});

exports.query = async (queryStr) => {
    let results = await mysql.query(queryStr);
    await mysql.end();
    return results;
};