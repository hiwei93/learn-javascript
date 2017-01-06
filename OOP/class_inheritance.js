/**
 * Class关键字
 * 参看[jvascript类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
 */
class Student {
    constructor(porps) {
        this.name = porps.name;
    }

    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}

/**
 * class继承通过extends来实现
 */
class PrimaryStudent extends Student {
    constructor(porps) {
        super(porps);// 记得用super调用父类的构造方法!
        this.grade = porps.grade;
    }

    myGrade() {
        console.log('I am at grade ' + this.grade);
    }
}

var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 1
});
xiaoming.hello();
xiaoming.myGrade();