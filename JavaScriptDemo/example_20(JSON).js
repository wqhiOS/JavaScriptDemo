/*
20.1语法
*/

/***** 20.1.1简单值 *****/
//JSON字符串必须使用双引号，单引号会导致语法错误
//JSON：数字5 字符串"Hellow"

/***** 20.1.2对象 *****/
//JS中的对象字面量
var person = {
	name: "Nicholas",
	age:29
};
//上面的属性也可以加上引号
var object = {
	"name": "Nicholas",
	"age": 29
};
//JSON表示上述对象的方式：
// {
// 	"name": "Nicholas",
// 	"age":29
// }

//与JS对象字面量相比，JSON对象有两个地方不一样。首先没有生命变量，其次没有末尾的分号。JSON中属性值必须加引号

/*
20.2 解析与序列化
*/
/***** 20.2.1 JSON对象 *****/
var book = {
	title: "Professional JavaScript",
	authors: ["Nicholas C. Zakas"],
	edition: 3,
	year: 2011
};
var jsonText = JSON.stringify(book);
//在序列化JS对象时，所有函数及原型成员都会被有意忽略，不提现在结果中。此外，值为undefined的任何属性也都会被跳过。结果中最终都是值为有效JSON数据类型的实例属性。
console.log(jsonText);
var bookCopy = JSON.parse(jsonText);
console.log(bookCopy);

/***** 序列化选项 *****/
var book = {
	"title":"Professional JavaScript",
	"authors": ["Nicholas C. Zakas","WU"],
	edition: 3,
	year: 2011 //因为是JS对象，所以属性加不加“”无所谓，一般不加吧
};
// 第二个参数用来过滤
var jsonText = JSON.stringify(book,["title","authors"]);
console.log(jsonText);

// 第二个参数是函数，用来处理
var jsonText2 = JSON.stringify(book, function (key,value) {
	switch(key) {
		case "authors":
			return value.join(",")
		case "year":
			return 5000;
		case "edition":
			return undefined;//返回undefine 代表JSON会忽略，删除该属性
		default:
			return value;
	}
});
console.log(jsonText2)

//第三个参数:用于控制结果中的缩进和空白符。并且会插入换行符号。
var jsonText3 = JSON.stringify(book,null,4);
console.log(jsonText3);

// toJSON() 方法
//可以为任何对象添加toJSON方法。
var book2 = {
	title: "NBA",
	edition: 8,
	year: 2017,
	toJSON: function () {
		return null;
	}
};
var jsonText4 = JSON.stringify(book2);
console.log(jsonText4);

/***** 20.2.3 解析选项 *****/
var book3 = {
	title: "Professional JavaScript",
	authors: ["Nicholas C. Zakas,WU"],
	edition: 3,
	year: 2011,
	releaseDate: new Date(2011,11,1)
};
var jsonText4 = JSON.stringify(book3);

var bookCopy1 = JSON.parse(jsonText4,function(key,value) {
	if (key == "releaseDate") {
		return new Date(value);//将日期字符串转换为Date对象,因为只有对象才能调用Date的方法。 ·
	}else {
		return value;
	}
})

var bookCopy2 = JSON.parse(jsonText4);
console.log(bookCopy1);
console.log(bookCopy2);
console.log(bookCopy1.releaseDate.getFullYear());//不报错
console.log(bookCopy2.releaseDate.getFullYear());//报错







