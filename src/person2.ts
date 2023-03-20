export class Person2 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return `Hello, ${this.name}`;
  }
}
