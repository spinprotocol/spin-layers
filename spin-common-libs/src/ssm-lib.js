const AWS = require('aws-sdk');
const { go } = require('ffp-js')
const ssm = new AWS.SSM({ region: 'ap-northeast-2' });

const getValue = (keyObj, callback) => {
    return ssm.getParameter(keyObj).promise()
}

const takeParameterValue = parameterObj => {
    return !parameterObj
        ? 'Erorr Params'
        : parameterObj.Parameter.Value
}

exports.getParamterStoreValue = name => getValue({
    Name: name,
    WithDecryption: false
})

exports.getParamterStoreSecretValue = name => getValue({
    Name: name,
    WithDecryption: true
})

exports.getParameter = path => go(
    path,
    this.getParamterStoreValue,
    takeParameterValue
)

exports.getSecretParameter = path => go(
    path,
    this.getParamterStoreSecretValue,
    takeParameterValue
)