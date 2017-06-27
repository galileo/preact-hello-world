const path = require('path')

module.exports = {
    "entry": [
        "webpack-dev-server/client?http://0.0.0.0:80",
        "./src"
    ],
    "output": {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },

    // transformations
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-2'],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h'}]
                    ]
                }
            }
        ]
    },

    // sourcemaps
    devtool: 'source-map',

    // server
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        historyApiFallback: true
    }
}
