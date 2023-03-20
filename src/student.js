"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person2_1 = require("./person2");
class Student extends person2_1.Person2 {
    study() {
        return `${this.name} is studying`;
    }
}
const stu = new Student("CHoi");
console.log(stu.sayHello());
console.log(stu.study());
