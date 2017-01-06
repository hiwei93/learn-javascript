'use strict'

/**
 * javascript关键字 arguments
 *
function sum(a, b){
    if(arguments.length <= 2){
        return arguments[0] + arguments[1];
    } else {
        return arguments[0] + arguments[arguments.length - 1];
    }
}

/**
 * rest 参数
 */
function sum(a, b, ...rest){
    if(rest.length > 0){
        console.log('rest: ' + rest);
        return a + rest[rest.length - 1];
    } else {
        return a + b;
    }
}

console.log(sum(2, 3));

console.log(sum(2, 4, 5, 5));