const config = require('./config')

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		title: config.siteTitle,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: config.manifestName,
				short_name: config.manifestShortName,
				start_url: config.manifestStartUrl,
				background_color: config.manifestBackgroundColor,
				theme_color: config.manifestThemeColor,
				display: config.manifestDisplay,
				icon: config.manifestIcon,
			},
		},
		'gatsby-transformer-remark',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-plugin-sass',
		'gatsby-plugin-offline',
	],
}
