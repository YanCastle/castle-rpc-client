const webpack = require('webpack');
const path = require('path')
const fs = require('fs')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

function foreachdir(url) {
    let fslist = []
    if (fs.existsSync(url))
        if (fs.lstatSync(url).isDirectory()) {
            let dirfiles = fs.readdirSync(url)
            for (let i = 0; i < dirfiles.length; i++) {
                let p = path.join(url, dirfiles[i])
                if ((fs.lstatSync(p)).isDirectory()) {
                    fslist.push(...foreachdir(p))
                } else {
                    fslist.push(p)
                }
            }
        } else {
            fslist.push(url)
        }
    return fslist
}
module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {}
    },
    externals: {
        RPCClient: {
            root: 'RPCClient',
            commonjs: 'RPCClient',
            commonjs2: 'RPCClient',
            amd: 'RPCClient'
        }
    },
    output: {
        path: path.resolve('dist'),
        filename: "[name].min.js",
        // chunkCallbackName: "chunk[id].js",
        publicPath: "/"
    },
    plugins: [],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    }
}