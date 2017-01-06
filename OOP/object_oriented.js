/**
 * 参看[火狐开发者:Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
 * [Object.prototype](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
 */

/**
 * 创建原型继承
 *
// 原型对象
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function(){
        console.log(this.name + ' is running...');
    }
};

function createStudent (name) {
    // 基于Student原型创建一个新对象
    var s = Object.create(Student);
    // 初始化新对象
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run();
console.log(xiaoming.__proto__ === Student);
console.log(xiaoming.__proto__);

/**
 * 构造函数
 *
function Student (name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();
console.log(xiaoming.__proto__ === Student.prototype);
console.log(xiaoming.constructor);
console.log(Object.getPrototypeOf(xiaoming));
console.log(Student.prototype);
console.log(xiaoming.prototype);// 通过new创建出来的对象并没有 prototype 这一属性
console.log(xiaoming.__proto__);

/**
 * 让创建的对象共享一个hello函数
 *
function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

var xiaoming = new Student('小明');
xiaoming.hello();
var xiaohong = new Student('小红');
xiaohong.hello();
console.log(xiaoming.hello === xiaohong.hello);

/**
 *  封装所有的new操作，防止创建对象时忘记写new关键字
 */
function Student(props) {
    this.name = props.name || '匿名';
    this.grade = props.grade || 1;
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {});
}

var xiaoming = createStudent({
    name: '小明'
});

xiaoming.hello();
console.log(JSON.stringify(xiaoming));

/**
 * 练习：请利用构造函数定义Cat，并让所有的Cat对象有一个name属性，并共享一个方法say()，返回字符串'Hello, xxx!'：
 *
function Cat(name) {
    this.name = name;
}

Cat.prototype.say = function () {
    return 'Hello, ' + this.name +'!';
};

var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');

console.log(kitty.say());

/**
 * 
 */