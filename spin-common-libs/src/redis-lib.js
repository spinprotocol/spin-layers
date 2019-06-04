const redis = require('redis');
const client = redis.createClient(
  process.env.REDIS_PORT, 
  process.env.REDIS_HOST, 
  { no_ready_check: true }
);

const REDIS = {};
REDIS.CLIENT = client;

REDIS.get = k => new Promise((resolve, reject) => {
  client.get(k, (err, res) => {
    return (res) ? resolve(res) : reject(err);
  });
});

REDIS.set = (k, v) => {
  client.set(k, v);
}

exports.REDIS = REDIS;
exports.REDIS.CLIENT = REDIS.CLIENT;