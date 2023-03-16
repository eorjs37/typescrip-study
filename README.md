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

> 위와 같이 트랜스파일 하는 경우 person.js가 생성되며 기본적으로 ES2013으로 변환된다.  
> 그리고 식별자 중복이 뜬다는 오류가 뜰 경우 root에 tsconfig.json파일 생성하고 아래 코드를 적용한다.

```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```
