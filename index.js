const babel = require('babel-core');
console.log(
    'coo***888888o', 
    'boos'
);

const extend = require('extend');

const config = {
    presets: ['env'],
    plugins: ['transform-runtime'],
    sourceMap: undefined

    ,ast: false
};

module.exports = function (content, file, options){
    // console.log(file.fullname);
    const  conf = mergeConf( options );
    // console.log(conf);
    return babel.transform(content, conf).code;
}

function mergeConf({presets=[], plugins=[], sourceMap}){
    return extend({}, config, {
        sourceMap,
        presets: config.presets.concat(presets),
        plugins: config.plugins.concat(plugins)
    });
}