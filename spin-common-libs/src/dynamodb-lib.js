const AWS = require('aws-sdk');
const { go } = require('ffp-js');

exports.call = function (action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    return dynamoDb[action](params).promise();
}

exports.scan = async function (tableName, select, where, key, attr) {
    if (select === '*') select = null;
    const params = {
        TableName: tableName,
        ProjectionExpression: select,
        FilterExpression: where,
        ExpressionAttributeNames: key,
        ExpressionAttributeValues: attr
    };
    try {
        const result = await this.call('scan', params);
        return {status: true, data: result};
    } catch (e) {
        return {status: false, err: e};
    }
}

exports.getAllItems = params => go(
    params,
    a => this.call('scan', a),
    result => result.Items
);

exports.getItem = params => go(
    params,
    a => this.call("get", a),
    result => result.Item
);

exports.createItem = params => go(
    params,
    a => this.call("put", a)
);

exports.updateItem = params => go(
    params,
    a => this.call("update", a)
);

exports.deleteItem = params => go(
    params,
    a => this.call("delete", a)
);