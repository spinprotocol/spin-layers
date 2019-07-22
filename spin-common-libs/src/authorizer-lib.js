Object.assign(global, require('ffp-js'));

/**
 * @name isAuthorized
 * @param { Array } accessAuthList 
 * @param { Object } tokenInfo
 * @returns { Boolean } true || false
 * @description: `tokenInfo` 의 auth 가 `accessAuthList`에 해당하는지 검사
 */
exports.isAuthorized = (tokenInfo, ...accessAuthList) => go(
  accessAuthList,
  flatL,
  takeAll,
  a => a.some(auth => auth === tokenInfo.auth)
)

exports.USER_ROLE = {
  all: ['influencer', 'admin', 'supplier'],
  influencer: ['influencer'],
  admin: ['admin'],
  supplier: ['supplier']
}