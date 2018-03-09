// give the entry point file - src/app.js
// output file and location - public/bundle.js

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test:   /\.js$/, // check to see if file ends in .js
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/, // get all the CSS files
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    devtool: 'cheap-module-eval-source-map'
};

// loaders exist per file type