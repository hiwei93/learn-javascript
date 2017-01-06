// 构造函数
function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
}

// 拓展Student
// 拓展后的原型链为：new PrimaryStudent() ----> PrimaryStudent.prototype ----> Object.prototype ----> null
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

/**
 * 原型继承
 *
// 更改原型链为：new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null、
// 中间对象：空函数 F
function F() {
}

F.prototype = Student.prototype;
console.log(F.prototype.constructor);

console.log(PrimaryStudent.prototype);
PrimaryStudent.prototype = new F();
console.log(PrimaryStudent.prototype.constructor);
console.log(PrimaryStudent.prototype);

PrimaryStudent.prototype.constructor = PrimaryStudent;

PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};


/**
 * 封装继承动作
 */
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

inherits(PrimaryStudent, Student);

PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});

console.log(xiaoming.name + " || " + xiaoming.getGrade());
xiaoming.hello();