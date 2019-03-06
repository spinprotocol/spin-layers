const { match, log } = require('ffp-js');

exports.convertEvent2inputData = function (event) {
    return match(event)
        .case(a => a.pathParameters != null)(a => a.pathParameters)
        .case(a => a.queryStringParameters != null)(a => a.queryStringParameters)
        .case(a => a.body)(a => JSON.parse(a.body))
        .else(_ => false);
}

exports.getAuthorization = function (event) {
    try{
        let data = event.headers.Authorization;
        (!data) ? data = false : data;
        return data;
    } catch (e) {
        return false;
    }
}
