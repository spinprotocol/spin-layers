const AWS = require('aws-sdk');
const { go } = require('ffp-js')
const aws_ssm = new AWS.SSM({ region: 'ap-northeast-2' });

const SSM = {};

const getValue = (keyObj, callback) => {
    return aws_ssm.getParameter(keyObj).promise()
};

const takeParameterValue = parameterObj => {
    return !parameterObj
        ? 'Erorr Params'
        : parameterObj.Parameter.Value
};

SSM.getParamterStoreValue = name => getValue({
    Name: name,
    WithDecryption: false
});

SSM.getParamterStoreSecretValue = name => getValue({
    Name: name,
    WithDecryption: true
});

SSM.getParameter = path => go(
    path,
    SSM.getParamterStoreValue,
    takeParameterValue
);

SSM.getSecretParameter = path => go(
    path,
    SSM.getParamterStoreSecretValue,
    takeParameterValue
);

exports.SSM = SSM