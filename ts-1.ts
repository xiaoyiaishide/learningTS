//基础类型

//1.布尔，boolean
let isDone: boolean = true;

//2.数字，所有的数字都是浮点数，支持二进制，八进制，十进制，十六进制
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//3.字符串，还可以使用模板字符串 `` 并且使用${}这种形式插入表达式
let name: string = "typeScript";
let age: number = 27;
let sayName: string = `My name is ${name},I'm ${age+1} years old in next year`;

//4.数组，两种定义数组的方式：数组直接量[]和数组泛型Array<元素类型>
let arr1: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];

//5.元祖Tuple，元组类型表示定义一个已知元素类型数量的数组，数组中的元素的类型不一定要相同
let arr3: [number, string] = [1,'hello'];//正确
let arr4: [number, string] = ['hello',2];//错误

//如果使用其他值赋给越界元素，只能使用联合类型
arr3[2] = 'world';//正确
arr4[2] = true;//错误，联合类型中没有布尔类型

//6.枚举，枚举类型可以为一组数值赋予一个名字
enum Color {Red=1, Green=2, Blue=3}
let c: Color = Color.Red;//c:1

//7.Any，定义成Any类型的值会跟着被赋予的值动态改变类型
let anyValue: any = 'anyValue';//anyValue为字符串
anyValue = 100;//anyValue为数字

let arr: any[] = [1, 'aa', true];//还可以对不确定元素类型的数组进行赋值

//8.void，与Any相反，它没有任何类型。当一个函数没有返回值的时候通常会看到返回值的类型
function testVoid(): void{
	console.log('test void!');
}
//如果想声明变量为void类型，只能为这个变量赋给null和undefined
let testVoid: void = null;
let testVoid1: void = undefined;

//9.Undefined和Null，只能赋给void类型和自己本身类型的变量
let nullTest: null = null;
let nullTest: undefined = undefined;

//10.Never，表示那些永远不可能存在的类型，never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

//类型断言，清楚的知道需要什么类型的变量，类似于强制类型转换
//1.尖括号语法
let strValue = "hello world";
let strLength:number = (<string>strValue).length;
//2.as语法


//变量声明

//1.let 块级作用域

function letTest(){
	for(var i=10; i<20; i++){
		console.log(i);
	}
	return i;//i取不到
}
//不能在同一个块级作用域重复定义同名变量、
function letTest() {
	let a = 1;
	let a = 2;//报错
}

//2.const 声明常量的方式，赋值之后不可改变

const a = 1;
const a = 2;//报错

//解构

//数组解构
let input = [1, 2];
input = [first, second];//first:1, second:2

//用于函数
function f([first, second]: [number, number]){
	console.log(first);
	console.log(second);
}
f(input);


//使用...表示数组中剩余元素
let [first, ...rest] = [1, 2, 3, 4]
console.log(first);//1
console.log(rest);//[2, 3, 4]

//对象解构
let o = {
	a: 'foo',
	b: 12,
	c: "bar"
};
let {a, b} = o;//从对象o中取出属性a和b，并定义一个新的对象





