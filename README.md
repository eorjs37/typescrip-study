# typescript-study

## 전역 typescript

```javascript
npm install -g typescript
```

## TypeScript 컴파일

> 먼저 person.ts를 만들어보자

```typescript
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return "Hello, " + this.name;
  }
}

const person = new Person("Lee");

console.log(person.sayHello());
```

> 다음으로 ts를 js으로 트랜스파일 해보자.

```bash
tsc src/person.ts
```

## tsc init

> tsc 옵션 설정 파일을 생성 하도록 하자.
> 명령어 사용후 tsconfig.json이 생성되는것을 확인 할 수 있다.

```bash
tsc --init
```

## js 트랜스 파일 후 식별자 중복이 오류가 뜨는 경우

> 위와 같이 트랜스파일 하는 경우 person.js가 생성되며 기본적으로 ES2013으로 변환된다.
> 그리고 식별자 중복이 뜬다는 오류가 뜰 경우 root에 tsconfig.json파일 생성하고 아래 코드를 적용한다.

```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

## Person2를 상속 받는 Student 만들기

```typescript
//person2.ts
export class Person2 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return `Hello, ${this.name}`;
  }
}
```

```typescript
//student.ts
import { Person2 } from "./person2";

class Student extends Person2 {
  study(): string {
    return `${this.name} is studying`;
  }
}

const stu = new Student("CHoi");
console.log(stu.sayHello());
console.log(stu.study());
```

tsc 명령어를 통해 js으로 트랜스파일링 후 person.js를 실행시킨다.


## null and undefined
```
기본적으로는 null 과 undefined는 모든타입의 하위타입이다. 즉 number,string은 가진 변수에 null,undefined를 할당할 수 있다.
하지만 strictNullChecks를 설정하면, null,undefined는 오직 any와 각자 자신들 타입에만 할당 가능하다.
```