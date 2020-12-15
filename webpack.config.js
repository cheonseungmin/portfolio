module.exports = {
    entry: '.\\jsx\\index\\App.jsx',
    output: {
        path: __dirname,
        filename: '.\\js\\index.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules)/,
                use: ['babel-loader']
            }
        ]
    }
}