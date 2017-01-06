'use strict';

/**
 * 利用apply(); 动态改变函数行为
 * 统计以供调用了多少次parseInt();
 */

var count = 0;
var oldParseInt = parseInt; //保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments);
};

parseInt('10');
parseInt('20');

console.log('count: ' + count);
