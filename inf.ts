


//接口

function printLabel(lo:{label:string}) {
    console.log(lo.label);
}

let lo = {size:10, label:"size 10 Object"};
printLabel(lo);

interface LV {
    label: string;
}

function printLabel2(lv:LV) {
    console.log(lv.label);
}

let lv2 = {size:10, label:"size 10 Object"};

printLabel2(lv2);



//可选属性
interface SC {
    color?:string,
    width?:number,
}

function createSquare(config:SC):{color:string;area:number} {
    let newSquare = {color:"write", area:100};
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;

}

let mySquare = createSquare({color:"black"});



//只读属性
interface Point {
    readonly x: number;
    readonly y:number;
}

let p1:Point = {x:10, y:20};

let a12 : number[] = [1,2,3,4];
let ro:ReadonlyArray<number> = a12;
//ro[0] = 12;
//a12 = ro;
a12 = ro as number[];


//额外的属性检查

//使用类型断
let mySquare2 = createSquare({ width: 100, coluor: "read" } as SC);



//添加一个字符串索引签名
interface SC2 {
    color?:string,
    width?:number,
    [propName: string]: any;
}

function createSquare2(config:SC2):{color:string;area:number} {
    let newSquare = {color:"write", area:100};
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;

}

let mySquare3 = createSquare2({ width: 100, coluor: "read" } );

//将这个对象赋值给一个另一个变量： 因为 squareOptions不会经过额外属性检查，所以编译器不会报错。
let sos = {colour:"red", width:100};
let mySquare4 = createSquare(sos);



//函数类型
interface SearchFunc {
    (source: string, subString: string):boolean;
}

let mySearch:SearchFunc;
mySearch = function (source:string, subString:string) {
    let result = source.search(subString);
    return result > -1;
}

//函数的参数名不需要与接口里定义的名字相匹配
mySearch = function(src:string,sub:string): boolean {
    let ret = src.search(sub);
    return ret > -1;
}

//不想指定类型，TypeScript的类型系统会推断出参数类型
//函数的返回值类型是通过其返回值推断出来的
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}



//可索引类型
interface SA {
    [index:number]:string;
}

let sa1 : SA;
sa1 = ["z","b"];
let ms:string = sa1[0];

class Animal {
    name:string;
}

class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    //[x:number]:Animal;
    [x:string]:Dog;
}

interface ND {
    [index:string]:number;
    length:number;
    //name:string;// 错误，`name`的类型与索引类型返回值的类型不匹配
}

interface RSA {
    readonly [index:number]:string;
}
let myArray : RSA =["Alice", "Bob"];
//myArray[2] = "ZZZ"; //error!




//类类型
//实现接口
interface ClockInterface {
    ct : Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    ct: Date;
    constructor(h:number, m:number) {

    }

    setTime(d: Date) {
        this.ct = d;
    }
}


//类静态部分与实例部分的区别
interface ClockConstructor {
    new (hour: number, minute: number):ClockInterface1;
}

interface ClockInterface1 {
    tick();
}



function createClock(ctor:ClockConstructor, hour:number, minute:number): ClockInterface1 {
    return new ctor(hour, minute);
}


class DigitalClock implements ClockInterface1 {
    constructor(h:number, m:number){}
    tick(){
        console.log("beep  beep");
    }
}

class AnalogClock implements ClockInterface1 {
    constructor(h:number, m:number) {}
    tick() {
        console.log("tick tick");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 3, 32);
