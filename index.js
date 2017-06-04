// tooling
const postcss = require('postcss');

// plugins
var plugins = [
	require('./src/font-family.js'),
	require('./src/font-size.js'),
	require('./src/font-style.js'),
	require('./src/font-weight.js'),
	require('./src/line-height.js')
]

// plugin
module.exports = postcss.plugin('postcss-salt-typography', (opts) => {

	// options
	const prefix = '#';

	// @TODO merge a predefined set of default options with the one given by the user
	// @TODO validate the user input
	plugins.forEach((e) => {e.options = opts});

	// property pattern
	const propertyMatch = new RegExp(`^${ prefix }(font(?:-family|-weight|-size|-style)?|line-height)$`);

	// process a matched declaration
	const processMatchedDeclaration = (decl) =>
	{
		const property = decl.prop.match(propertyMatch)[1];
		const value = decl.value;

		plugins.forEach((e) =>
		{
			if (e.property == property)
			{
				decl.after(e.process(decl));
			}
		});

		decl.remove();
	}

	return (css) => {
		// walk each matching declaration
		css.walkDecls(propertyMatch, processMatchedDeclaration);
	};
});
