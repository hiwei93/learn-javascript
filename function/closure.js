'use strict';
/**
 * 闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。
 * 可参看：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures#词法作用域
 * 

function count() {
    var arr = [];
    var i = 0;
    for(i = 1; i <= 3; i++){
        console.log('out i = ' + i);
        arr.push(function(){
            console.log('in i = ' + i);
            return i * i;
        });
    }
    console.log('arr is ' + arr);
    console.log('after : i = ' + i);
    return arr;
}

var results = count();
console.log('results is ' + results);
console.log('results is Array ' + Array.isArray(results));
console.log('results[0] is ' + results[0]);
// console.log('results() is ' + results());
var f1 = results[0];
console.log('f1 is ' + f1);
console.log('f1() is ' + f1());
var f2 = results[1];
console.log('f2 is ' + f2);
console.log('f2() is ' + f2());
var f3 = results[2];
console.log('f3 is ' + f3);
console.log('f3() is ' + f3());


/**
 * 课程例子：计数器
 *
function counter(initial) {
    var x = initial || 0;
    return {
        inc : function(){
            x += 1;
            return x;
        }
    }
}

var c1 = counter();
console.log('c1 is ' + c1);
console.log('c1.inc is ' + c1.inc);
console.log(c1.inc());
console.log(c1.inc());

/**
 * 课程例子：函数实现运算（没有理解）
 */
//自定义数字0
var zero = function (f) {
    return function(x){
        return x;
    }
};

//自定义数字1
var one = function(f){
    return function(x){
        return f(x);
    }
}

//定义加法
function add(n, m){
    return function(f){
        return function(x){
            return m(f)(n(f)(x));
        }
    }
}

var two = add(one, one);
var three = add(one, two);

(one(function () {
    console.log('print 1 times');
}))();

(two(function () {
    console.log('print 2 times');
}))();

(three(function () {
    console.log('print 3 times');
}))();
