'use strict';
/**
 * Higher-order function 高阶函数
 *

// 这是教程的一个例子
function add(x, y, f){
    return f(x) + f(y);
}

console.log(add(-5, -6, Math.abs));

/**
 * Array 的 map 方法
 *
function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.map(pow));
console.log(arr);

/**
 * Array 的 reduce 方法
 *
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var total = arr.reduce(function (x, y) {
    return x + y;
});

console.log(total);

/**
 * 作业
 */
/** 作业 1：利用reduce()求积： *
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var product = arr.reduce(function(x, y) {
    return x * y;
});

console.log(product);

/** 作业 2：不要使用JavaScript内置的parseInt()函数，利用map和reduce将字符串转化为Number： 
 * 提示：利用js变量弱类型转换 
 *      console.log(typeof(+"123")); 
 *      或者 console.log(typeof("123" - 0));
*
var str = '1234';
var arr = [];
for (let i = 0; i < str.length; i++) {
    arr.push( str[i] );
}

console.log(arr);

var newint = arr.map(function (x){
    return x - 0;
}).reduce(function(x, y){
    return x * 10 + y;
});

console.log(newint);

/**
 * Array 的 filter 方法
 *
//在一个Array中，删掉偶数，只保留奇数，
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var odds = arr.filter(function (x) {
    return x % 2 !== 0;
});

console.log(odds);

/**
 * 练习：筛选素数
 * 可以参考：论文-https://iluxonchik.github.io/regular-expression-check-if-number-is-prime/
 *

var arr = [];

for (let x = 1; x < 100; x++) {
    arr.push(x);
}

function isPrime(n) {
    var re = /^.?$|^(..+?)\1+$/;
    return !re.test('1'.repeat(n));
}

var prime = arr.filter(isPrime);

console.log(prime);

/**
 * Array 的 sort 方法
 */
var arr = [4, 2, 5, 1, 3];

var ascending = arr.sort(function (a, b){
    return a - b;
});

console.log('arr = ' + arr);
console.log('ascending = ' + ascending);