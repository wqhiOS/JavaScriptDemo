/*
	6.1 理解对象
*/
// 创建自定义对象的最简单的方式
var person1 = new Object();
person1.name = "Nicholas";
person1.age = 29;
person1.job = "Software Engineer";
person1.sayName = function() {
	console.log(this.name);
};
person1.sayName();

// 把上面的对象用字面量语法可以写成：
// 这个例子中的person对象与前面例子中的person对象是一样的。
var person2 = {
	name: "Nicholas",
	age: 29,
	job: "Software Engineer",
	sayName: function () {
		console.log(this.name);
	}
}

/***** 6.1.1 属性类型 *****/
//ECMAScript中有两种属性：数据属性和访问器属性
//1.数据属性：数据属性包含一个数据值的位置。在这个位置可以读取和写入值。
//数据属性有4个描述其行为的特性：[[Configurable]],[[Enumerable]],[[Writable]],[[Value]]
//要修改属性默认的特性，必须使用Object.defineProperty()方法
var person3 = {};
Object.defineProperty(person3,"name",{
	writable: false,
	value: "Nicholas"
});
console.log(person3.name);
person3.name = "Greg";
console.log(person3.name);

var person4 = {};
Object.defineProperty(person4, "name", {
	configurable: false,
	value: "Nicholas"
});
//可以多次调用Object.defineProperty()方法修改同一个属性，但在把configurable特性设置为false之后就会有限制。
//2.访问器属性:访问器属性不包含数据值，他们包含一对儿getter和setter函数（不过这两个属性都不是必须的）
//访问器属性有4个描述其行为的特性：[[Configurable]],[[Enumerable]],[[Get]],[[Set]]
var book = {
	_year: 2004,
	edition: 1
};
Object.defineProperty(book, "year",{
	get: function() {
		return this._year;
	},//如果只指定get，意味着属性是不能写的。
	set: function(newValue) {
		if (newValue > 2004) {
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}
});
book.year = 2005;
console.log(book.edition);
book.year = 2003;
console.log(book.edition,book.year);

/***** 6.1.2 定义多个属性 *****/
var book2 = {};
Object.defineProperties(book2,{
	_year:{
		writable: true,
		value: 2004
	},
	edition: {
		writable: true,
		value: 1
	},
	year: {
		get: function () {
			return this._year;
		},
		set: function (newValue) {
			if (newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
})

/*读取属性的特性*/
var descriptor = Object.getOwnPropertyDescriptor(book2, "_year");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(descriptor.get);
var descriptor2 = Object.getOwnPropertyDescriptor(book2, "year");
console.log(descriptor2.value);
console.log(descriptor2.configurable);
console.log(descriptor2.get);

/*
	6.2 创建对象
*/
/***** 6.2.1 工厂对象 *****/
//工厂对象虽然解决了创建多个相似对象的问题，但是没有解决对象识别的问题（即怎么知道一个对象的类型！）
function createPerson(name,age,job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function () {
		console.log(this.name);
	}
	return o;
}
var person5 = createPerson("Nicholas",29,"Software Engineer");
var perosn6 = createPerson("Greg",27,"Doctor");




