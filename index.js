// tooling
const postcss = require('postcss');

// plugins
const plugins = [
	require('./src/font-size.js')
];

// properties
const config = {};


// plugin
module.exports = postcss.plugin('postcss-salt-typography', (opts) => {
	// options
	const prefix = opts && 'prefix' in opts ? opts.prefix : '';
	const skip = opts && 'skip' in opts ? opts.skip : '*';

	// property pattern
	const propertyMatch = new RegExp(`^(font(?:-family|-weight|-size|-style)?|line-height)$`);

	// process a matched declaration
	const processMatchedDeclaration = (decl) =>
	{
		const property = decl.prop;
		const value = decl.value;

		switch (property)
		{
			case 'font':
				break;

			case 'font-family':
				break;
			default:

		}

		console.log('property', property);
		console.log('value', value);
	}

	return (css) => {
		// walk each matching declaration
		css.walkDecls(propertyMatch, processMatchedDeclaration);
	};
});
