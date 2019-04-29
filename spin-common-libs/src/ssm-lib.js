const AWS = require('aws-sdk');
const ssm = new AWS.SSM({ region: 'ap-northeast-2' });
const kms = new AWS.KMS({ region: 'ap-northeast-2' });
// const Buffer = require('buffer')

const getValue = (keyObj, callback) => {
    return ssm.getParameter(keyObj).promise()
}

const decryptSecureValue = key => {
    return kms.decrypt(key).promise()
}

exports.getParamterStoreValue = name => getValue({
    Name: name,
    WithDecryption: false
}) 
