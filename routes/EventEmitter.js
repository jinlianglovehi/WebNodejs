/**
 *
 * @type {*|EventEmitter}
 *
 *   nodejs 的事件机制
 */
var EventEmitter = require('events').EventEmitter;

// 注册时间
var event = new EventEmitter() ;
event.on('some',function(){
    console.log('-----事件执行-----');
});
// 时间的延迟处理.
setTimeout(function(){
    event.emit('some')
},1000);


var  Evment = require('events').EventEmitter;

