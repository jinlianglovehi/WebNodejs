/**
 * Created by jinliang on 16/7/17.
 */

/**
 *  读取文件  同步处理
 * @type {exports|module.exports}
 */

    console.log('------------- 读取文件开始-----------');

var fs = require('fs');

var data = fs.readFileSync('/Users/jinliang/Downloads/widget/MonitorDialog.java','utf-8');

console.log(''+data);
console.log('------------读取结束------------');