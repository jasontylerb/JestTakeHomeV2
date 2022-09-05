const help = require('../helpers/asyncAwait');
const userStructure = require('./requirements_schema/user');
const reqs = require('../githubby');

let userAtTest = '5502060';

test(`User's profile contains login *requried field`, () => {
	expect(
		reqs.GithubUsersMOCK.getTestedUserData(userAtTest)
	).toEqual(
		expect.objectContaining(
			{login: expect.any(String)}
		)
	)
});

test(`User's profile contains id *requried field`, () => {
	expect(
		reqs.GithubUsersMOCK.getTestedUserData(userAtTest)
	).toEqual(
		expect.objectContaining(
			{id: expect.any(Number)}
		)
	)
});

test(`User id is an integer and not a string`, () => {
	expect(
		reqs.GithubUsersMOCK.getTestedUserId(userAtTest)
	).toBeGreaterThan(0)
});

test(`User's profile contains avatar_url *requried field`, () => {
	expect(
		reqs.GithubUsersMOCK.getTestedUserData(userAtTest)
	).toEqual(
		expect.objectContaining(
			{avatar_url: expect.any(String)}
		)
	)
});

test(`Destination path for user's avatar_url`, () => {
	expect(
		reqs.GithubUsersMOCK.getTestedUserAvatarUrl(userAtTest)
	).toEqual(
		expect.stringContaining(
			`${userStructure.avatar_url.pathPrefix}`
		)
	)
});

test(`File type for user's avatar_url is NOT of invalid, unallowed type`, () => {
	expect(
		reqs.GithubUsersMOCK.getTestedUserAvatarUrl(userAtTest)
	).not.toEqual(
		expect.stringContaining(`.txt`)
	)
});

test(`File type for user's avatar_url is of valid, allowed type`, () => {
	expect(
		reqs.GithubUsersMOCK.getTestedUserAvatarUrl(userAtTest)
	).toMatch(
		new RegExp(userStructure.avatar_url.pathSufix.join('|'))
	)
});

test(`User is set up under under the 'Free' plan`, () => {
	expect.assertions(1)
		expect(
			reqs.GithubUsersMOCK.getTestedUserPlan(userAtTest).name
		).toBe('Free');
});

test(`Free plan user's type is 'User'`, () => {
	expect.assertions(1)
		expect(
			reqs.GithubUsersMOCK.getTestedUserType(userAtTest)
		).toBe('User');
});

test(`'Free' plan user is not a vendor contractor, company name is not 'Github'`, () => {
	expect(
		reqs.GithubUsersMOCK.getTestedUserCompany(userAtTest)
	).not.toBe('Github');
});

test(`Non-employee user is not site admin`, () => {
	expect.assertions(2)
	function checkForEmployeePlan(){
		expect(
			reqs.GithubUsersMOCK.getTestedUserPlan(userAtTest).name
		).not.toBe('Employee');
	}
	function checkForSiteAdmin(){
		expect(
			reqs.GithubUsersMOCK.getTestedUserSiteAdmin(userAtTest)
		).toBeFalsy()
	}

	help.twoAssertions(checkForEmployeePlan, checkForSiteAdmin)
});

test(`Non-employee user may have zero to many private repos`, () => {
	expect.assertions(2)
	function checkForEmployeePlan(){
		expect(
			reqs.GithubUsersMOCK.getTestedUserPlan(userAtTest).name
		).not.toBe('Employee');
	}
	function checkForSiteAdmin(){
		expect(
			reqs.GithubUsersMOCK.getTestedUserPlan(userAtTest).private_repos
		).toBeGreaterThanOrEqual(0)
	}

	help.twoAssertions(checkForEmployeePlan, checkForSiteAdmin)
});