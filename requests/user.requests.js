const authenticatedUsers = require('../src/users.js').authenticated;

function getTestedUserProfile(userId) {
	let userProfile = authenticatedUsers[userId]
	return userProfile;
}
function getTestedUserAvatarUrl(userId) {
	let userAvatarUrl = authenticatedUsers[userId].avatar_url
	return userAvatarUrl;
}

module.exports = {getTestedUserProfile, getTestedUserAvatarUrl} 