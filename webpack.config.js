var webpack = require('webpack');
var ResolverPlugin = require("webpack/lib/ResolverPlugin");
var path = require('path');

var node_modules = path.resolve(__dirname,'node_modules');
var pathToAngular = path.resolve(node_modules,'angular/angular.js');

var APP  = __dirname + '/src';

module.exports = {

    resolveLoader: {
        root: path.join(__dirname,'node_modules')
    },
    context  : APP,
    entry : {
        app : ['webpack/hot/dev-server', './app.js']
    },
    devtool: 'source-map',
    output: {
        path: APP,
        filename: 'bundle.js'
    },

    devServer: {
        contentBase : './dist',
        colors:true,
        histroryApiFallback :true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        loaders:[

            {test: /\.js$/, loader: 'ng-annotate!babel?presets[]=es2015', exclude: /node_modules/},

            {test: /[\/]angular\.js$/, loader: "exports?angular" },
            {test: /\.tpl\.html$/, loader: 'raw'},
            {test: /\.jpg$/, loader: 'file-loader'},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.tpl\.html$/, loader: 'raw'}

        ]
    },
    resolve:{
        alias:{
            angular : __dirname+'/node_modules/angular/angular'
        }
    }

};