# Automated Accessibility Tests

You can run [Axe](https://deque.com/axe) tests against this theme for automated accessibility feedback.

## Requirements

- A local WordPress install (>= 5.0.3)
- This branch of Twenty Nineteen installed and active
- The Gutenberg plugin installed from GitHub (>= 4.9.0)

_NOTE: Gutenberg must be installed from GitHub in order to access the dependencies for Axe testing, which have not yet been published to NPM._

## Setup

1. Run `yarn` to install the `@wordpress/scripts` package and other related dependencies (`npm install` isn't working for this, see [Slack discussion](https://wordpress.slack.com/archives/CEKKABGJD/p1548424062027300)).
2. Add more test cases. `/test/post.test.js` is included as an example. See `jest.config.js` for valid naming patterns and locations for test cases.

## Running

```
$ npm run test:axe
```

Tests will be run against http://one.wordpress.test by default. If you'd like to run your tests against a different WordPress install, you can use the `WP_BASE_URL` environment variable:

```
$ WP_BASE_URL=https://custom.test npm run test:axe
```

## Contributors

[@aduth](https://github.com/aduth)
[@dylanb](https://github.com/dylanb)
[@greatislander](https://github.com/greatislander)
[@gziolo](https://github.com/gziolo)
[@joemcgill](https://github.com/joemcgill)
[@ryelle](https://github.com/ryelle)
[@stephenmathieson](https://github.com/stephenmathieson)
