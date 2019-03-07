const dynamoDbClient = require('serverless-dynamodb-client');

exports.call = function (action, params) {
    return dynamoDbClient.doc[action](params).promise();
}
exports.scan = async function (tableName, select, where, key, attr) {
  if (select == "*") select = null;
  const params = {
    TableName: tableName,
    ProjectionExpression: select,
    FilterExpression: where,
    ExpressionAttributeNames: key,
    ExpressionAttributeValues: attr
  };
  try {
    const result = await this.call("scan", params);
    return {status: true, data: result};
  } catch (e) {
    return {status: false, err: e};
  }
}