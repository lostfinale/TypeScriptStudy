


//var声明

var a = 10;

function f() {
    var message = "Hello...."
    return message;
}

function f1() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f1();
g();


function f2() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;


    function g() {
        return a;
    }
}


//作用于规则

function f3(shuoldIn: boolean) {
    if (shuoldIn) {
        var x = 10;
    }
    return x;
}

console.log(f3(true));
console.log(f3(false));

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var cr = matrix[i];
        for (var i = 0; i < cr.length; i++) {
            sum += cr[i]
        }
    }
    return sum;
}


function timeout() {
    for (var i = 0; i < 10; i++){
        //结果 都是10
        //setTimeout(function(){console.log(i)}, 100 * i);

        //使用立即执行的函数表达式（IIFE）来捕获每次迭代时i的值
        (function(i){
            //setTimeout(function(){console.log(i)}, 100 * i)
        })(i);
    }
}

timeout();


//let声明
let hello = "Hello";

function ff1(input: boolean) {
    let a = 100;
    if (input) {
        let b = a + 1;
        return b;
    }
    //return b;
    return 0;
}

try {
    throw "oh no!";
}
catch(e) {
    console.log("oh well.")
}
//console.log(e)

function foo() {
    return aa;
}
// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
//foo();
let aa;

//重定义及屏蔽
function ff2(x) {
    var x;
    var x;
    if (true) {
        var x;
    }

    //let x = 10;
    //let x = 100;

}

function ff3(condition, x) {
    if(condition) {
        let x = 100;
        return x;
    }
    return x;
}

console.log(ff3(false, 0));
console.log(ff3(true, 0));


//在一个嵌套作用域里引入一个新名字的行为称做屏蔽。
function ff4(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var cr = matrix[i];
        for(let i = 0; i < cr.length; i++) {
            sum +=  cr[i];
        }
    }
    return sum;
}

//块级作用于变量的获取
function theCityThatAlwaysSleeps() {
    let getCity;
    if(true) {
        let city = "Bj";
        getCity = function(){
            return city;
        }
    }
    return getCity();
}

//当let声明出现在循环体里时拥有完全不同的行为。 不仅是在循环里引入了一个新的变量环境，而是针对 每次迭代都会创建这样一个新作用域。
function timeout2() {
    for (let i = 0; i < 10; i++){
        //setTimeout(function() {console.log(i); }, 100 * i);
    }
}
timeout2();


//const声明
const nlf = 9;
const kitty = {
    name:"xxx",
    nl : nlf,
}

//不允许再次赋值
/*kitty = {

}*/

kitty.name = "ccc";
kitty.nl = 10;


//解构
let input = [1, 2];
let [ff, ss] = input;
console.log("ff:" + ff);
console.log("ss:" + ss);
[ss,ff] = [ff, ss]

console.log("ff:" + ff);
console.log("ss:" + ss);

//todo 有问题
function aa1([f,s]:[number,number]) {
    console.log(f);
    console.log(s);
}

aa1([ss,ff]);


let [first, ...rest] = [1,2,3,4];
console.log(first);
console.log(rest);

let[, s1,,for1] = [1,2,3,4];
console.log(s1);
console.log(for1);

//对象解构
let o = {
    a1 : "foo",
    b1: 12,
    c1 :"bar"
};

let {a1, b1} = o;

console.log(a1);
console.log(b1);

//我们需要用括号将它括起来，因为Javascript通常会将以 { 起始的语句解析为一个块。
({a1, b1} = {a1 :"baz",b1:101});

console.log(a1);
console.log(b1);
let o1 = {
    a2 : "foo1",
    b1: 12,
    c1 :"bar"
};
let {a2, ...pass} = o1;
console.log(a2)
console.log(pass)

let total = pass.b1 + pass.c1.length
console.log(total)

//属性重命名
let {a1 : newName1, b1:newName2} = o;
console.log(newName1);
console.log(newName2);

let o2 = {
    a3:"fool",
    b3: 112,
    c1: "baa",
};

//如果你想指定它的类型， 仍然需要在其后写上完整的模式。
let {a3,b3}:{a3:string,b3:number} = o2;



//默认值
function keepWholeObject(wholeObject:{a:string, b?:number}) {
    let {a, b = 1001} = wholeObject;
}

//函数声明
type C = {a:string, b?:number}
function f10({a,b}:C): void {

}
f10({a:"c"})

function f12({a="", b = 0}= {}): void {

}
f12();


function f13({a, b = 0} = {a:""}): void {

}

f13({a:"yes"});
f13();


//展开

let x1 = [1, 2];
let y1 = [3, 4];
let z1 = [0, ...x1, ...y1, 5];
console.log(z1)

//展开对象后面的属性会覆盖前面的属性
let defaults = {food: "spicy", price:"$$", ambiance: "noisy"};
let search = {...defaults, food:"rich"};

//首先，它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法
