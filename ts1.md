### TypeScript 入门指南
引用自(http://mp.weixin.qq.com/s/Oyawvb5BD-OKvMuF2tQ0pw)
## 1. 前言
当前 ES6 已经越来越普及，新的 ES6 语法大大简化了 JavaScript 程序的表达方式，比如箭头函数、class、async/await、Proxy 等新特性，从此写 JavaScript 更成了一种享受。

但是在近一年半的实践中，发现多人维护一个大型项目时，除了使用 ES6 新特性更简单地实现功能之外，另一个重要的事情是如何保证程序的健壮性和可维护性，在这点上，完全无类型检查、表达方式极其灵活的 JavaScript 却显得有点吃力，尤其是当团队人员水平参差不齐时更为严重。

后来接触到了 TypeScript，它是 JavaScript 语言的超集，除了支持最新的 JavaScript 语言特性之外，还增加了非常有用的编译时类型检查特性，而代码又最终会编译成 JavaScript 来执行，非常适合原本使用 JavaScript 来开发的大型项目。

我在经过半年多的深入实践，总结了一些使用 TypeScript 的经验，写成了这一篇文章，希望帮助 TypeScript 初学者更轻松地学习。

## 2. 什么是 TypeScript
结合微软开发的开源代码编辑器 Visual Studio Code，使用TypeScript开发项目具有以下优点：

可以使用最新的 ES2017 语言特性。

非常精准的代码提示。

编辑代码时具有即时错误检查功能，可以避免诸如输错函数名这种明显的错误。

非常精准的代码重构功能。

非常方便的断点调试功能。

编辑器集成调试功能。

在使用 TypeScript 编写 Node.js 项目时，由于长期使用 JavaScript 而养成随便在对象上附加各种东西的坏习惯，刚使用 TypeScript 时可能会有点不适，另一个不可避免的问题是依赖的代码库不是使用 TypeScript 编写的，由于不能直接通过 import 引用这些模块，在 TypeScript 上使用时会造成一些困难。本文将对初学 TypeScript 时可能会关注的问题作简要的说明。

编写本文时 TypeScript 最新版本为 v2.3.4，Node.js 最新 LTS 版本为 v6.11.0，本文的所有示例代码将基于该环境来运行。

## 3. TypeScript 语言走马观花

在学习 TypeScript 前，你最好熟悉 ES6 语法，如果之前未接触过 ES6 可以参考我之前写过的文章《ES2015 & babel 实战：开发 npm 模块》 及 ES6 语法相关的教程 《ECMAScript 6 入门》。

可以使用 TypeScript 官方网站提供的 Playround 工具在线查看 TypeScript 编译为 JavaScript 后的代码，对初学者了解 TypeScript 尤为有用。

其实在 TypeScript 中是可以完全使用纯 JavaScript 语法的（当然如果这样的话就达不到使用 TypeScript 的目的，但是在项目重构为 TypeScript 的初期可以实现 TypeScript 与 JavaScript 并存，逐步替换），比如我们在 Playground 中输入以下代码：
```
function hello(msg) {    console.log("hello, " + msg);}hello('laolei');
```
可以看到输出的 JavaScript 代码也跟输入的一模一样。

简单来理解，TypeScript 中的 Type 指的就是在 JavaScript 语法的基础上，增加了静态类型检查，而为了让 TypeScript 起到其应有的作用，在编写程序时我们也加上必要的类型声明，比如：
```
function hello(msg: string): void {  console.log(`hello, ${msg}`);}hello('laolei');
```
上例中声明了函数的参数 msg 为 string 类型，而返回值为void（没有返回值），可以看到编译后的代码还是与前面例子一样，并没有变化。如果我们将函数调用部分改为hello(123)，将会看到参数123下面画了红线：
![Alt text](http://mmbiz.qpic.cn/mmbiz_png/TCHicQEF6XKBhWI93tRicdhv90xnhHr10jqeXgdLy9KHjP7UG5ZlRXiaKDR6B5GjZNdicqa6NhOj9XrPX3I0IRYmDQ/640?tp=webp&wxfrom=5&wx_lazy=1 "Optional title")
