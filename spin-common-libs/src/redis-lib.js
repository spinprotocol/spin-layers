const redis = require('redis');
const client = redis.createClient(
  process.env.REDIS_PORT, 
  process.env.REDIS_HOST, 
  { no_ready_check: true }
);

const REDIS = {};

REDIS.get = k => new Promise((resolve, reject) => {
  client.get(k, (err, res) => {
    return (res) ? resolve(res) : reject(err);
  });
});

REDIS.set = (k, v) => new Promise((resolve, reject) => {
  return (!client.set(k, v)) ? resolve({ key: k, value: v }) : reject('Data setting failed.');
}); 

exports.REDIS = REDIS;