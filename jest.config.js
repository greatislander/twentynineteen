/**
 * External dependencies
 */
const path = require( 'path' );

/**
 * Internal dependencies
 */
const jestE2EConfig = {
	preset: 'jest-puppeteer',
	setupTestFrameworkScriptFile: './node_modules/@wordpress/jest-puppeteer-axe/build/index.js',
	testMatch: [
		'**/__tests__/**/*.js',
		'**/?(*.)(spec|test).js',
		'**/test/*.js',
	],
};

module.exports = jestE2EConfig;
