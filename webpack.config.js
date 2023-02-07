// allows us to prepare our personalized project

const path = require('path'); // let us know where we are working
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // to know where we are working
        filename: 'bundle.js',
        publicPath : '/' //Specifying the home page
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'], // files we are gona work with
        alias: { // this alias allow us to put this elements as a reference in the components
            'components': path.resolve(__dirname, 'src/components/'),
            'containers': path.resolve(__dirname, 'src/containers/'),
            'context': path.resolve(__dirname, 'src/context/'),
            'pages': path.resolve(__dirname, 'src/pages/'),
            'styles': path.resolve(__dirname, 'src/styles/'),
            'hooks': path.resolve(__dirname, 'src/hooks/'),
            'icons': path.resolve(__dirname, 'src/assets/icons/'),
            'logos': path.resolve(__dirname, 'src/assets/logos/')
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // RegEx to detect and identify the js and jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [    
                    {
                        loader: 'html-loader' 
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jp(e*)g|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [ // Bringing installed plugins
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        
    }
} 