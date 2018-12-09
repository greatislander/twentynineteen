const { loadPage } = require( 'axe-puppeteer' );
const { WP_BASE_URL } = require( './support/config' );

describe( 'a11y', () => {
	it( 'runs sample test', async () => {
		const axeBuilder = await loadPage( browser, WP_BASE_URL );
		const results = await axeBuilder.analyze();
		expect( results.violations.length ).toBe( 0 );
	} );
} );
