const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path  = require('path');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var extractPlugin = new ExtractTextWebpackPlugin({
    filename:'main.css'
})

var config = {
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
         publicPath:'/'
    },
    devServer:{
        historyApiFallback : true
    },
    module:{
        rules:[ {
            test:/\.(js|jsx)?$/,
            exclude:/node_modules/,
            use:[
                {
                    loader:"babel-loader",
                    
                }
            ]
           },{
               test:/\.html$/,
               use:[{
                   loader:"html-loader",
                   options:{minimize:true}
               }]
           },
           {
               test:/\.(png|svg|jpg|gif)$/,
               use:[ {
                   loader:'file-loader',
                   options:{
                       name:'[name].[ext]',
                       outputPath:'img/',
                       publicPath:'img/'
                   }
               }]
           },
           {
               test: /\.scss$/,
              use:extractPlugin.extract({
                  use:['css-loader','sass-loader']
              })
           }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./public/index.html",
            filename:"index.html"
        }),
       extractPlugin
    ]

}

module.exports = config;