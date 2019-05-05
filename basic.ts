


let isDone : boolean = false;

let decLiteral: number = 6; //十进制

let hexLiteral: number = 0xf00d; //16进制

let binaryLiteral: number = 0b1010; //二进制

let octalLiteral: number = 0o744; //8进制



let name1: string = `Gene`;

let age : number = 37;
let sentence : string = `Hello, my name is ${name1}.
    I'll be ${age + 1} years old next month.`

console.log(sentence)


//数组
let list: number[] = [1, 2, 3];
//let list: Array<number> = [1, 2, 3];

//元组
let x:[string, number];
x = ['hello', 10];
console.log(x[0].substring(1));

//x[3] = 'world';
//console.log(x[5])
//console.log(x[5].toString());

//枚举
//从0开始为元素编号
enum Color {R = 1, G, B}
let c: Color = Color.G

let colorName: string = Color[2];
console.log(colorName)

//Any

// any允许在上面调用任何方法
let notSure: any = 4;
notSure = "maybe a string instead"
notSure = false;


let list1: any[] = [1, true, "free"];

list1[1] = 100;


//Void
//void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
    console.log("This is my warning message.");
}
//只能为它赋予undefined和null
let unusable: void = undefined;



//Null 和 Undefined

//默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
let u: undefined = undefined;
let n: null = null;



//Never
//表示的是那些永不存在的值的类型

//下面是一些返回never类型的函数：

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while(true) {

    }
}

//Object
//object表示非原始类型,也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null):void;

create({prop:0});
create(null)
//create(42)



//类型断言
let sv: any = "this is a string."
let strLength: number = (<string>sv).length

//as语法
strLength = (sv as string).length;
