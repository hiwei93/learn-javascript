'use strict'
/**
 * 正则表达式
 */

/**
 * test()方法
 *
var reg1 = /^\d{3}\-\d{3,8}$/;
console.log(reg1.test('012-1234'));

/**
 * 切分字符串
 *
var str = 'a;b ,c d   e';
var reg1 = /\s+/;
var reg2 = /[\s\,]+/;
var reg3 = /[\s\,\;]+/;
var result = str.split(reg3);
console.log(result);

/**
 * 分组：字符描述`()` && exec()方法
 *
var reg = /^(\d{3})\-(\d{3,8})$/;
var str = '010-12345';
var result = reg.exec(str);
console.log(result);

/**
 * 全局搜索
 *
var reg = /[a-zA-Z]+Script/g;
var str = 'JavaScript, VBScript, JScript and ECMAScript';
reg.exec(str);
console.log(reg.lastIndex);
reg.exec(str);
console.log(reg.lastIndex);
reg.exec(str);
console.log(reg.lastIndex);
reg.exec(str);
console.log(reg.lastIndex);
reg.exec(str);
console.log(reg.lastIndex);

/**
 * 练习：写一个验证Email地址的正则表达式
 * 可以参考文章http://www.codeceo.com/article/most-complex-email-regex.html
 * 和网站：http://emailregex.com
 */
// var reg = /^[a-zA-Z0-9/.]+@[a-zA-Z0-9]{3,12}\.[a-zA-Z]{3}$/;
var reg = /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
var email = 'bill%gates@ms.com';
var result = reg.test(email);
console.log(result);

/**
 * 练习：可以验证并提取出带名字的Email地址
 *
var reg = /^\<([a-zA-Z\s]+)\>\s+([a-zA-Z0-9/.]+@[a-zA-Z0-9]{3,12}\.[a-zA-Z]{3})$/;
// /^\<(.+)>\s+([a-zA-Z0-9]+\@[a-zA-Z0-9]+.[a-zA-Z0-9]+)$/;
var email = '<Tom Paris> tom@voyager.org';
var result = reg.exec(email);
console.log(result);*/