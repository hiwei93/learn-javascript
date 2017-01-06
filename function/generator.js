'use strict';

/**
 * generator 实现斐波那契数列
 *
function* fib(max){
    var
        t,
        a = 0,
        b = 1;

    for(let n = 0; n < max; n++){
        yield a;
        t = a + b;
        a = b;
        b = t;
    }

    return a;
}

var f = fib(5);

console.log('fib() is ' + f);

// for (var x of f){
//     console.log(x);
// }

console.log((f.next()).value);
console.log((f.next()).value);
console.log((f.next()).value);
console.log((f.next()).value);
console.log((f.next()).value);
console.log((f.next()).value);
console.log((f.next()).value);
console.log((f.next()).value);

/**
 * 教程练习：要生成一个自增的ID
 */
/**  generator 方法 *
function* nextId() {
    var current_id = 0;
    
    while(current_id < 1000){
        yield current_id;
        current_id++;
    }
}

var id = nextId();
// console.log((id.next()).value);
// console.log((id.next()).value);

for(var x of id){
    console.log(x);
}

/** 闭包方法 */
function nextId() {
    var current_id = -1;
    return function(){
        current_id++;
        return current_id;
     }    
}

var id = nextId();
for(let i = 0; i < 100; i++){
    console.log(id());
}
