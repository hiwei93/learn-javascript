'use strtic'
/**
 * Promise 链式调用
 */
new Promise(function (resolve, reject) {
    console.log('start new Promise...');
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        } else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + 'seconds');
        }
    }, timeOut * 1000);
}).then(function (r) {
    console.log('Done: ' + r);
}).catch(function (reason) {
    console.log('Failed: ' + reason);
});

/**
 * Promise 串行异步操作
 * Promise.then().then().then()....
 */

/**
 * Promise 并行异步操作
 * Promise.all()
 */

/**
 * Promise.race() 异步容错
 */