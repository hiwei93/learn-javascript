'use strict';

/**
 * 一个参数，一个表达式
 *
var fun = x => x * x;

console.log('fun is ' + fun;
console.log('fun(2) is ' + fun(2));

/**
 * 多个参数，多个表达式
 *
var max = (x, y) => {
    if (x > y){
        return x;
    } else if (x < y){
        return y;
    } else {
        return 'x = y';
    }
}

console.log('max is ' + max(2, 5));
console.log('max is ' + max(2, 2));
console.log('max is ' + max(2, -5));

/**
 * 返回对象
 *
var animal = x => ({ name : x });

console.log('animal\'s name is ' + animal('cat').name);

/**
 * 箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj：
 */
var obj = {
    birth : 1993,
    getAge : function(){
        return (() => new Date().getFullYear() - this.birth)();
    }
}

console.log('the age in this year is ' + obj.getAge());