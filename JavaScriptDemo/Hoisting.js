
/***** JavaScript变量提升 *****/
var v = 'hello world';
console.log(v);

(function () {
  console.log(v);
})();

(function () {
  console.log(v);
  var v = 'I love you';
})();
//上面的函数执行 会输出 undefined 为什么呢？
//由此推出 -》 Hoisting


/*
测试下面这段代码
结果是：1，2，2.
原因：var作用域是函数，不是块级作用域，所以，下面的x 作用域全部都相同。
*/
var x = 1;
console.log(x);
if (true) {
  var x =2;
  console.log(x);
}
console.log(x);

/*
对于上面作用域问题的解决方案：创建一个临时作用域。
ES6中使用let可以替代
*/
function foo() {
  var x = 1;
  if (x) {
    (function(){
      var x = 2;
    })();
  }
  console.log(x); //仍然是1.
}

/*
变量提升，很简单，就是把变量提升提到函数的top的地方。我需要说明的是，变量提升 只是提升变量的声明，并不会把赋值也提升上来。
let 没有变量提升。
var v = 'Hello world';
(function () {
  console.log(v);
  var v = 'I love you';
})();
所以上面这段代码 会 打印 undefined,因为他的实际代码是下面这样：
*/
var v = 'Hello world';
(function() {
  var v;
  console.log(v);
  v = 'I love you';
})();

/***** ES6 let 没有变量提示*****/
/*
下面代码不会打印undefined，而是直接报错 ：num is not defined
*/
// let num = 1;
// (function() {
//   console.log("num="+num);
//   let num = 2;
// })();


/***** 函数提升 *****/
/*
函数提升，是把整个函数都提到前面去
我们在写js code的时候，有2种写法，一种是函数表达式，另一种是函数声明方式。我们需要注意的是，只有函数声明形式才能被提升。
*/

/*
函数提升 成功
*/
function myTest() {
  foo();
  function foo() {
    alert("我来自foo");
  }
}
myTest();

/*
函数提升 失败
*/
function myTest2() {
  foo();
  var foo = function foo() {
    alert("我来自foo");
  }
}
myTest2();
