/**
 * Created by jinliang on 16/7/17.
 */
/**
 *  nodejs 处理文件 异步处理文件
 * @type {exports|module.exports}
 */

var fs = require('fs');
fs.readFile('/Users/jinliang/Downloads/widget/MonitorDialog.java','utf-8',function(err,data){

    if(err){

        console.log(err);
    }else{
        console.log(data);
    }

});


console.log('-------- 读取文件结束--------');