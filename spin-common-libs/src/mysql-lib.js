const mysql = require('serverless-mysql')({
    config: {
        host     : process.env.wtDbHost,
        database : process.env.wtDbDatabase,
        user     : process.env.wtDbUser,
        password : process.env.wtDbPassword
    }
});

exports.query = async (queryStr) => {
    let results = await mysql.query(queryStr);
    await mysql.end();
    return results;
};