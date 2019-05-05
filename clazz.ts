


//类
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

console.log(greeter.greet());

//继承
class Animal1 {

    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}.`);
    }

}

class Dog1 extends Animal1 {
    bark(){
        console.log("Woof! Woof!");
    }
}

const dog1 = new Dog1();
dog1.bark();
dog1.move(10)
dog1.bark();

class Animal2 {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

//派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
//而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。
class Snake2 extends Animal2 {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...")
        super.move(distanceInMeters);
    }


}

class Horse extends Animal2 {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log("Galloping...")
        super.move(distanceInMeters);
    }
}

let sam2 = new Snake2("Sammy the Python");
let tom2: Animal2 = new Horse("Tommy the Palomina");
sam2.move();
tom2.move(34);

//公共，私有与受保护的修饰符
//public
//private
class Animal3 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

// 错误: 'name' 是私有的.
//new Animal3("Cat").name;

// 如果其中一个类型里包含一个 private成员，
// 那么只有当另外一个类型中也存在这样一个 private成员，
// 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。
// 对于 protected成员也使用这个规则。

class Rhino3 extends Animal3 {
    constructor() {
        super("Rhino");
    }
}

class Employee3 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal3 = new Animal3("Goat");
let rhino3 = new Rhino3();
let employee3 = new Employee3("Bob");

animal3 = rhino3;
// // 错误: Animal 与 Employee 不兼容.
//animal3 = employee3;

//理解protected
//protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。

class Person {
    protected name: string;

    //构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
    protected constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//错误
//console.log(howard.name);
// 错误: 'Person' 的构造函数是被保护的.
//let john = new Person("John"):



//readonly修饰符
//只读属性必须在声明时或构造函数里被初始化。
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-pice suit";//错误! name 是只读的.


//参数属性
class Octopus1 {
    readonly numberOfLegs: number = 8;
    //声明和赋值合并成一处
    constructor(private readonly name: string) {
    }
}


//存取器 getter setter
//存取器要求你将编译器设置为输出ECMAScript 5或更高。
// 不支持降级到ECMAScript 3。
// 其次，只带有 get不带有 set的存取器自动被推断为 readonly。
class Employee4 {
    fullName: string;
}

let employee4 = new Employee4();
employee4.fullName = "Bob Smith";
if(employee4.fullName) {
    console.log(employee4.fullName);
}
let passcode = "secret passcode";
class Employee5 {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if(passcode && passcode == "secret passcode") {
            this._fullName = newName;
        } else {
            console.log("Error: unauthorized update of employee!");
        }

    }
}

let employee5 = new Employee5();

employee5.fullName = "Bob Smith";
if (employee5.fullName) {
    alert(employee5.fullName);
}

//静态属性
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }

}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

//抽象类
//抽象类做为其它派生类的基类使用。
// 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。
// abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
abstract class Animal5 {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earch...")
    }
}

abstract class Department {
    constructor(public name: string) {

    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void;//必须在派生类中实现
}


class AccDepartment extends Department {
    constructor() {
        //在派生类的构造函数中必须调用 super()
        super("Accounting and Auditing");
    }


    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }

}

let dep: Department;
//dep = new Department("");//错误: 不能创建一个抽象类的实例
dep = new AccDepartment();
dep.printMeeting();
dep.printName();
//dep.generateReports();// 错误: 方法在声明的抽象类中不存在



//高级技巧
//构造函数


//把类当做接口使用
class Point1 {
    zc: number;
    cb: number;
}

interface Point3d1 extends Point1 {
    ca: number;
}

let point3d2: Point3d1;
point3d2 = {zc:1,cb:2,ca:3};