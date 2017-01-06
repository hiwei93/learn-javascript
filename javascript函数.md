# javascript函数

## 一、函数定义

1.函数声明 (函数语句)
``` javascript
function name(param){ statements }
```
- name: 函数名；
- param: 函数参数，多个参数一`,`隔开；
- statements: 组成函数体的声明语句。

2.函数表达式 (function expression)
``` javascript
var name = function(param){ statements };
```
- name: 函数名；
- param: 函数参数，多个参数一`,`隔开；
- statements: 组成函数体的声明语句；
- 末尾要加`;`。

>说明：
1.函数默认是返回`undefined`的。想要返回一个其他的值，函数必须通过一个`return`语句指定返回值。
2.函数声明提升
对于以函数声明创建的函数，可以在函数声明之前使用函数:
``` javascript
hoisted(); // logs "foo"
function hoisted() {
  console.log("foo");
}
```
对于以函数表达式传件的函数，函数不会提升:
``` javascript
notHoisted(); // TypeError: notHoisted is not a function
var notHoisted = function() {
   console.log("bar");
};
```

### 1.arguments关键字

关键字`arguments`，只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
``` javascript
function foo(x) {
    alert(x); // 10
    for (var i=0; i<arguments.length; i++) {
        alert(arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);
```
>说明：
1.即使函数不定义任何参数，`arguments`还是可以拿到参数的值；
2.`arguments`最常用于判断传入参数的个数。

### 2.rest参数

ES6标准引入了rest参数，可以获得额外的参数：
``` javascript
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

```
>说明：
1.rest参数只能写在最后，前面用`...`标识；
2.如果传入的参数连正常定义的参数都没填满，rest参数会接收一个空数组（**注意不是undefined**）。

## 二、变量相关

### 1.变量作用域

JavaScript的函数在查找变量时从自身函数定义开始，从“内”向“外”查找，即如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。
``` javascript
'use strict';
function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        alert('x in bar() = ' + x); // 'A'
    }
    alert('x in foo() = ' + x); // 1
    bar();
}
```

### 2.变量提升

JavaScript的函数定义会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部。
**注：JavaScript引擎自动提升变量的声明，但不会提升变量的赋值。**
>说明：
在函数内部定义变量时，严格遵守*“在函数内部首先申明所有变量”*这一规则。最常见的做法是用一个var申明函数内部用到的所有变量：
``` javascript
function foo() {
    var
        x = 1, // x初始化为1
        y = x + 1, // y初始化为2
        z, i; // z和i为undefined
    // 其他语句:
    for (i=0; i<100; i++) {
        ...
    }
}
```

### 3.全局作用域

不在任何函数内定义的变量就具有全局作用域。
JavaScript默认有一个全局对象`window`，全局作用域的变量实际上被绑定到`window`的一个属性，
``` javascript
var course = 'Learn JavaScript';
alert(course); // 'Learn JavaScript'
alert(window.course); // 'Learn JavaScript'
```
``` javascript
function foo() {
    alert('foo');
}
foo(); // 直接调用foo()
window.foo(); // 通过window.foo()调用
```

#### 1.命名空间

全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。
可以将自己的所有变量和函数全部绑定到一个全局变量中，来解决冲突：
``` javascript
// 唯一的全局变量MYAPP:
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};
```

#### 2.局部作用域

JavaScript的变量作用域实际上是函数内部，在`for`循环等语句块中是无法定义具有局部作用域的变量的：
``` javascript
'use strict';

function foo() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
}
```
可以用`let`替代`var`可以申明一个块级作用域的变量：
``` javascript
'use strict';

function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    i += 1; // SyntaxError
}
```

##### 常量

用`const`来定义常量，`const`与`let`都具有块级作用域。
[const具体信息](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)

## 三、方法

在一个对象中绑定函数，称为这个对象的方法。

### 关键字`this`

* 在一个方法内部，`this`是一个特殊变量，它始终指向当前对象；
* 全局定义的函数，在strict模式下函数的`this`指向`undefined`；
* 在函数内部定义的函数，`this`指向`undefined`；

#### 1.apply

可以用函数本身的apply方法来改变this的指向；
``` javascript
fun.apply(thisArg[, argsArray]);
```
-- thisArg: 需要绑定的this变量；
-- argsArray: 表示函数本身的参数，是一个Array对象；

##### 装饰器

利用apply()，我们还可以动态改变函数的行为。
比如：统计一下代码一共调用了多少次parseInt()：
``` javascript
var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
count; // 3
```

#### 2.call

该方法的作用和apply()方法类似，区别是call()把参数按顺序传入，而apply把参数打包成Array再传入。
``` javascript
fun.call(thisArg[, arg1[, arg2[, ...]]])
```
-- thisArg: 需要绑定的this变量；
-- argsArray: 表示函数本身的参数，是一个参数列表；

## 四、高阶函数（Higher-order function）

高阶函数，就是让函数的参数能够接收别的函数。

### 1.Array的map方法

map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。
``` javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
/* roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9] */
```
>说明：该方法返回一个新的Array，原Array不发生变化。

### 2.Array的reduce方法

reduce() 把结果继续和序列的下一个元素做累积计算，其效果就是：
``` javascript
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
```


### 3.Array的filter方法

把Array的某些元素过滤掉，然后返回剩下的元素。
filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
>例如，在一个Array中，删掉偶数，只保留奇数，可以这么写：
``` javascript
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]
```

### 4.Array的排序算法sort；

sort 排序可能是不稳定的。
>说明：
- Array的sort()方法默认按照字符串的ASCII码进行排序；
- Array的sort()方法默认把所有元素先转换为String再排序；
所以会出现'10'排在了'2'的前面，因为字符'1'比字符'2'的ASCII码小。

sort()方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序。
>说明：sort()方法会直接对Array进行修改。

## 五、闭包（Consure）

一种简单的理解闭包的方式：[连接](http://www.cnblogs.com/onepixel/p/5062456.html)
一个最简单的闭包例子：
``` javascript
function A(){ function B(){ console.log("Hello Closure!"); } return B; } var c = A(); c();//Hello Closure!
```
上面代码翻译成自然语言如下：
- 1.定义了一个普通函数A
- 2.在A中定义了普通函数B
- 3.在A中返回B（确切的讲，在A中返回B的引用）
- 4.执行A(),把A的返回结果赋值给变量 c
-5. 执行 c()
把这5步操作总结成一句扯淡的话就是：
函数A的内部函数B被函数A外的一个变量c引用。
>说明：
1.在上述例子中，B定义在A中，因此B依赖于A,而外部变量 c 又引用了B, 所以A间接的被 c 引用，也就是说，A不会被GC回收，会一直保存在内存中。
2.因此返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
[相关例子](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143449934543461c9d5dfeeb848f5b72bd012e1113d15000#0)

另外一种：
闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。
>说明：该理解方向包含“作用域和函数堆栈”的相关知识，具体可参看[重新介绍javascript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript#闭包)；和[函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#作用域和函数堆栈(Scope_and_Function_stack))中的作用域和闭包的相关知识。

### 立即执行的匿名函数

``` javascript
(function (x) {
    return x * x;
})(3);
```

## 六、箭头函数（Arrow Function）

箭头函数定义：
``` javascript
([param] [, param]) => { statements }
```
>说明：
1.表达式包含多条语句时，不可省略`{}`和`return`；
2.返回一个对象时需要将对象用`()`包裹：
``` javascript
x => ({ foo: x })
```

### 关键字this

1.箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者；
2.由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略。

## 七、生成器（Generator）

generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次：
``` javascript
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
```
>说明：调用该方法会返回一个generator对象，调用generator对象有两个方法：
1.调用generator对象的next()方法；
2.直接用for ... of循环迭代generator对象。

生成器可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，利用这一点，写一个generator就可以实现需要用面向对象才能实现的功能。
>个人理解：与闭包有着相似之处，均可以实现自己的私有属性。
