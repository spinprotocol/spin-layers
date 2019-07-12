const { getParamterStoreSecretValue } = require('/opt/libs/ssm-lib')

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

const { PostgreSQL } = require('mql2');
const { CONNECT } = PostgreSQL;

const POOL = CONNECT(config);

exports.POOL = POOL;