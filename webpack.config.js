const path = require('path');

module.exports = {
    entry: './web-extension/popup/popup.js',
    output: {
        path: path.resolve(__dirname, 'web-extension/popup/dist'),
        filename: 'build-react.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
