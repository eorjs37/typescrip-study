// true/false를 가짐
let isDone:boolean = false

// 숫자를 사용할때는 number를 가짐
let decimal: number = 6;

// 문자열을 표현할때 string을 사용
let text: string = "text";
text = 'text2';

// 배열로 사용하고 싶을때 사용
let array:number[] = [1,2,3]
let array2:Array<number> = [1,2,3]


// 튜플 : 요소의 타입과 개수가 고정된 배열을 사용
let x:[string,number];

x = ["hello",1];


// 열거형 : 표준자료형 집합
enum USER {GUEST,ADMIN,MEMBER}
let m:USER = USER.MEMBER


// any: 알지못하는 타입일때는 any를 사용. 타입검사를 하지않음.
let notSure:any = 4;
notSure = "TEST";


//void : 어떤 타입도 존재할수없음
function warnUser():void{
	console.log("this is my warning message");

}

// null and undefined 은 기본적으로는 모든타입의 하위 타입이다. 그렇지만 strictNullChecks를 사용하면
// 오직 any와 각자 자신의 타입만 할당이 가능하다.
let u:undefined = undefined;
let nl:null = null;

