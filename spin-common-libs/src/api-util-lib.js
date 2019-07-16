const { match, join, pipe, entriesL, mapL, go, head } = require('ffp-js');
const { success, failure } = require('/opt/libs/response-lib');

exports.convertEvent2inputData = (event) => {
    return match(event)
        .case(a => a.pathParameters != null)(a => a.pathParameters)
        .case(a => a.queryStringParameters != null)(a => a.queryStringParameters)
        .case(a => a.body)(a => JSON.parse(a.body))
        .else(_ => false);
}

exports.getAuthorization = (event) => {
    try{
        let data = event.headers.Authorization;
        (!data) ? data = false : data;
        return data;
    } catch (e) {
        return false;
    }
}

exports.isUserAuth = (event, tokenInfo) => go(
    event,
    a => typeof(a) === 'Array'
        ? head(a)
        : a,
    b => b.email === tokenInfo.email || tokenInfo.auth !== 'influencer'
)

exports.queryStr = pipe(
    entriesL,
    mapL(([k, v])=> `${k}=${v}`),
    join('&'));