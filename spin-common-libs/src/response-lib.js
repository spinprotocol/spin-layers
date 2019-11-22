const { curry, go, tap, log } = require('ffp-js')
exports.success = curry((headers, body) => buildResponse(200, body, headers));
exports.failure = curry((headers, body) => buildResponse(500, body, headers));

const accessOriginList =
  [
      'http://localhost:8080',
      'https://dev.spin-protocol.com',
      'https://staging.spin-protocol.com',
      'https://spinprotocol.com',
      'http://dalpumae20181.godomall.com',
      'http://dev.www.womanstalk.co.kr',
      'https://www.womanstalk.co.kr'
  ];

const accessHostList =
  [
      'localhost:3000',
      'localhost:3001',
      'localhost:3002',
      'localhost:3003',
      'localhost:3004',
      'localhost:3005',
      'localhost:3006',
      'localhost:3007',
      'api.dev.spin-protocol.com',
      'api.staging.spin-protocol.com',
      'api.spinprotocol.com',
      'hq6tste8th.execute-api.ap-northeast-2.amazonaws.com/dev',
      'hq6tste8th.execute-api.ap-northeast-2.amazonaws.com/staging',
      'hq6tste8th.execute-api.ap-northeast-2.amazonaws.com/prod',
  ]

function buildResponse(statusCode, body, headers) {
    return go(
      accessOriginList,
      list => !headers
        ?  ({
          statusCode: 200,
          body: 'access schedule'
        })
        : go(
          list,
          list => list.some(a => a === headers.origin),
          bool => !bool && !accessHostList.some(a => a === headers.Host)
            ? ({
              statusCode: 405,
              body: 'not allowed access'
          })
          : ({
              statusCode: statusCode,
              headers: {
                  "Access-Control-Allow-Origin": headers.origin,
                  "Access-Control-Allow-Credentials": true,
              },
              body: JSON.stringify(body)
          })
        )
    )
}
