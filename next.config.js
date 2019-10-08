const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
	withTypescript(
		withCSS(
			withSass({
				cssModules: false,
				cssLoaderOptions: {
					url: false
				},
				webpack(config, options) {
					config.module.rules.push({
						test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
						use: {
							loader: 'url-loader',
							options: {
								limit: 100000
							}
						}
					});
					config.module.rules.push({
						test: /\.(graphql|graphqls|gql)$/,
						exclude: /node_modules/,
						loader: 'graphql-tag/loader'
					});

					if (config.mode === 'production') {
						if (Array.isArray(config.optimization.minimizer)) {
							config.optimization.minimizer.push(
								new OptimizeCSSAssetsPlugin({
									cssProcessor: require('cssnano')
								})
							)
						}
					}

					return config
				}
			})
		)
	)
);
