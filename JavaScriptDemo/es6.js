'use strict';

// 1.let
/*
1.let 用于代码块{}中。作用域为代码块 之前的var作用域只有函数
2.let 不可以重复定义。 var 重复定义就会覆盖。let是报错。不能重复定义
*/
{
	let a = 12;
	var b = 10;
}
// console.log(a); //报错
console.log('b='+b);//因为b的作用域是函数 而不是代码块，所以可以打印出来
