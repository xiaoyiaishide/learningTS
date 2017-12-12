//接口：接口能够描述JavaScript中对象，函数拥有的各种各样的外形。

//一个简单的伪接口，描述一下接口是如何工作的
function sayName(animal: {name: string}) {
	console.log(animal.name);
}
var cat = {name: 'tom'};
sayName(cat);

//第一个接口
interface Animal {
	name: string;
}

function sayName1(animal: Animal) {
	console.log(animal.name);
}

let cat1 = {name: 'tom'};
sayName1(cat1);

//接口中的属性不是必须的
interface People{
	name: string;
	couple?: string;//可选属性，可以对接口进行预定义，还可以避免属性检查的错误
}

function getPeople(person: People): {name: string; couple: string} {
	let liuyi = {name: 'liuyi', couple:'nana'};
	if(person.name){
		liuyi.name = person.name;
	}
	if(person.couple){
		liuyi.couple = person.couple;
	}
	return liuyi;
}

let lala = getPeople({name:'lalala'})

//只读属性，如果你通过接口创建了一个对象字面量，其属性不能再被修改
interface Point{
	readonly x: number;
	readonly y: number;
}

let point = {1,2}
point.x = 3;//error

//ReadonlyArray<T>只读数组类型
let a = [1, 2, 3];
let a1: ReadonlyArray<number> = a;
a1 = 2;//报错

var s: [] = a1;//报错，就算把只读数组赋值给一个普通数组也是不可以的

//但是可以使用数组断言才能进行赋值

var s1 = [];
s1 = a1 as number[];


//函数类型
 interface SearchFunc{
 	(source: string, substring: string):number;
 }

let mySearch: SearchFunc;
mySearch = function(source: string,substring: string):number {
	let result = source.search(substring);
	return result;
}

//接口继承
interface Shape {
	color: string;
}

interface Square extends Shape {
	sideLength: number;
}

let square = <Square>{};

//多继承

interface Shape {
	color: string;
}

interface PenStroke {
	penWidth: number;	
}

interface Square extends Shape, PenStroke {
	sideLength: number;
}

let square1 = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


//类
class Greeter {
	greeting: string;
	//类的构造器
	constructor(message: string){
		this.greeting = message;
	}
	greet(){
		return "Hello,"+this.greeting;
	}
}
let greeter = new Greeter("world");

//继承类
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();