import { Person2 } from "./person2";

class Student extends Person2 {
  study(): string {
    return `${this.name} is studying`;
  }
}

const stu = new Student("CHoi");
console.log(stu.sayHello());
console.log(stu.study());
