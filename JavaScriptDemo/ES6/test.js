'use strict';
class Person {
  constructor(name='sb', age=0) {
    this.name = name;
    this.age = age;
  }
}
var p = new Person("T-Mac",37);
console.log(p.name);
