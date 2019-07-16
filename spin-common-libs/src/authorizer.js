Object.assign(global, require('ffp-js'));

/**
 * @name isAuthorized
 * @param { Array } accessAuthList 
 * @param { Object } tokenInfo
 * @returns { Boolean } true || false
 * @description: `tokenInfo` 의 auth 가 `accessAuthList`에 해당하는지 검사
 */
exports.isAuthorized = (accessAuthList, tokenInfo) = go(
  accessAuthList,
  a => a.some(auth => auth === tokenInfo.auth)
)