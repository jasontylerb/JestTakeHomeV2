//  src:
const user = require('./src/users')

// const user_id = 10001;
module.exports = {
	GithubUsersMOCK: {
		getTestedUserData: function (args, callback, headers, req) {
			return user.data[args];
		},
		getTestedUserLogin: function (args, callback, headers, req) {
			return user.data[args].login;
		},
		getTestedUserId: function (args, callback, headers, req) {
			return user.data[args].id;
		},
		getTestedUserNodeId: function (args, callback, headers, req) {
			return user.data[args].node_id;
		},
		getTestedUserAvatarUrl: function (args, callback, headers, req) {
			return user.data[args].avatar_url;
		},
		getTestedUserGravatarId: function (args, callback, headers, req) {
			return user.data[args].gravatar_id;
		},
		getTestedUserUrl: function (args, callback, headers, req) {
			return user.data[args].url;
		},
		getTestedUserHtmlUrl: function (args, callback, headers, req) {
			return user.data[args].html_url;
		},
		getTestedUserFollowersUrl: function (args, callback, headers, req) {
			return user.data[args].followers_url;
		},
		getTestedUserFollowingUrl: function (args, callback, headers, req) {
			return user.data[args].following_url;
		},
		getTestedUserGistsUrl: function (args, callback, headers, req) {
			return user.data[args].gists_url;
		},
		getTestedUserStarredUrl: function (args, callback, headers, req) {
			return user.data[args].starred_url;
		},
		getTestedUserSubscriptionsUrl: function (args, callback, headers, req) {
			return user.data[args].subscriptions_url;
		},
		getTestedUserOrganizationsUrl: function (args, callback, headers, req) {
			return user.data[args].organizations_url;
		},
		getTestedUserReposUrl: function (args, callback, headers, req) {
			return user.data[args].repos_url;
		},
		getTestedUserEventsUrl: function (args, callback, headers, req) {
			return user.data[args].events_url;
		},
		getTestedUserReceivedEventsUrl: function (args, callback, headers, req) {
			return user.data[args].received_events_url;
		},
		getTestedUserType: function (args, callback, headers, req) {
			return user.data[args].type;
		},
		getTestedUserSiteAdmin: function (args, callback, headers, req) {
			return user.data[args].site_admin;
		},
		getTestedUserName: function (args, callback, headers, req) {
			return user.data[args].name;
		},
		getTestedUserCompany: function (args, callback, headers, req) {
			return user.data[args].company;
		},
		getTestedUserBlog: function (args, callback, headers, req) {
			return user.data[args].blog;
		},
		getTestedUserLocation: function (args, callback, headers, req) {
			return user.data[args].location;
		},
		getTestedUserEmail: function (args, callback, headers, req) {
			return user.data[args].email;
		},
		getTestedUserHireable: function (args, callback, headers, req) {
			return user.data[args].hireable;
		},
		getTestedUserBio: function (args, callback, headers, req) {
			return user.data[args].bio;
		},
		getTestedUserTwitterUsername: function (args, callback, headers, req) {
			return user.data[args].twitter_username;
		},
		getTestedUserPublicRepos: function (args, callback, headers, req) {
			return user.data[args].public_repos;
		},
		getTestedUserPublicGists: function (args, callback, headers, req) {
			return user.data[args].public_gists;
		},
		getTestedUserFollowers: function (args, callback, headers, req) {
			return user.data[args].followers;
		},
		getTestedUserFollowing: function (args, callback, headers, req) {
			return user.data[args].following;
		},
		getTestedUserCreatedAt: function (args, callback, headers, req) {
			return user.data[args].created_at;
		},
		getTestedUserUpdatedAt: function (args, callback, headers, req) {
			return user.data[args].updated_at;
		},
		getTestedUserPrivateGists: function (args, callback, headers, req) {
			return user.data[args].private_gists;
		},
		getTestedUserTotalPrivateRepos: function (args, callback, headers, req) {
			return user.data[args].total_private_repos;
		},
		getTestedUserOwnedPrivateRepos: function (args, callback, headers, req) {
			return user.data[args].owned_private_repos;
		},
		getTestedUserDiskUsage: function (args, callback, headers, req) {
			return user.data[args].disk_usage;
		},
		getTestedUserCollaborators: function (args, callback, headers, req) {
			return user.data[args].collaborators;
		},
		getTestedUserTwoFactorAuthentication: function (args, callback, headers, req) {
			return user.data[args].two_factor_authentication;
		},
		getTestedUserPlan: function (args, callback, headers, req) {
			return user.data[args].plan;
		},
		getTestedUserPlanName: function (args, callback, headers, req) {
			return user.data[args].plan.name;
		},
		getTestedUserPlanSpace: function (args, callback, headers, req) {
			return user.data[args].plan.space;
		},
		getTestedUserPlanPrivateRepos: function (args, callback, headers, req) {
			return user.data[args].plan.private_repos;
		},
		getTestedUserPlanCollaborators: function (args, callback, headers, req) {
			return user.data[args].plan.collaborators;
		}
	}
}