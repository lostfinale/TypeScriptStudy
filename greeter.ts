class Greeter1 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter1: Greeter1;
greeter1 = new Greeter1("world");
console.log(greeter1.greet());