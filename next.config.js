module.exports = {
  webpack: (config) => {
		config.module.rules.push({
			test: /\.(png)$/,
			loader: 'file-loader',
			options: {
				publicPath: `/_next/static/files`,
				outputPath: 'static/files'
			}
		});		

    return config;
  },
};
