Object.assign(global, require('ffp-js'));

const AUTH = {};

/**
 * @name isAuthorized
 * @param { Array } accessAuthList 
 * @param { Object } tokenInfo
 * @returns { Boolean } true || false
 * @description: `tokenInfo` 의 auth 가 `accessAuthList`에 해당하는지 검사
 */
AUTH.isAuthorized = (tokenInfo, ...accessAuthList) => go(
  accessAuthList,
  flatL,
  takeAll,
  a => a.some(auth => auth === tokenInfo.auth)
);

AUTH.USER_ROLE = {
  all: ['influencer', 'admin', 'supplier', 'master', 'womanstalk', 'test'],
  influencer: ['influencer', 'test'],
  admin: ['admin', 'test'],
  supplier: ['supplier', 'test'],
  master: ['master', 'test'],
  womanstalk: ['womanstalk', 'test']
};
exports.AUTH = AUTH
