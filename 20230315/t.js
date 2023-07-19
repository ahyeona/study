// 상수객체 선언
const obj = {
  a: "나는 객체야",
  // 익명함수 : 이름이 없는 함수
  push: function (num) {
    console.log("나는 obj 객체 안 push라는 키값에 있는 함수야.");
    console.log(num + "를 매개변수로 받았어");
  },
};

// 상수 객체의 값 수정, 추가 가능
obj.a = "수정";

console.log(obj);

// obj = {
//     a : ".."
// }
// const로 정의한 객체 obj를 다시 선언하려고 하니까 타입에러 발생
// Uncaught TypeError: Assignment to constant variable.

let arr = ["0", "1", "2", "3", "4", "5", "6", "2", "20"];

//  indexOf
let a1 = arr.indexOf("2");
console.log(a1); // 1

let a2 = arr.find(function (item) {
  return item === "6";
});
console.log("find함수");
console.log(a2); // "6" --> "6"을 반환해줌

function arrF(item) {
  console.log("arrF : " + item);
  return item === "2";
}

// findIndex
let a3 = arr.findIndex(arrF);
console.log(a3); // 1 반환

// function fun(item) {
//     let x = arrF(item);
//     console.log("fun : "+x);
// }

// filter
console.log("filter");
// fun(arr.filter(fun));
let a4 = arr.filter(function (item) {
  console.log(": " + item);
  return item[0] === "2";
});

console.log(a4); // ['2', '2', '20']

// map
let a5 = arr.map(function (item) {
  console.log(item);
  // return item ==="2"; //[false, true, false, false, false, false, true, false]
  return item + "2"; // ['12', '22', '32', '42', '52', '62', '22', '202']
});
console.log(a5);

// forEach
obj.j = [];
arr.forEach(function (item) {
  console.log(item);
  if (item === "2") {
    obj.j.push(item);
    console.log("obj.j.push(2);");
  }
});
console.log(obj);

// join
let a6 = arr.join(", ");
console.log(a6);

//
// slice
let b1 = a6.slice(3, -5);
console.log(b1);

// split
let b2 = b1.split(2);
console.log(b2);

// toUpperCase
let b3 = "aBcDeFg";
console.log(b3.toUpperCase());
console.log(b3.toLowerCase());

// ------------------------------------------------
// 익명함수는 일반 함수보다 메모리관리에 효과적

// 호이스팅 : 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것
// (let과 const로 선언한 변수는 호이스팅 시 변수를 초기화하지 않음. var는 호이스팅 시 undefined로 변수 초기화)
// 자바스크립트는 함수의 코드를 실행하기 전에 메모리부터 할당하기 때문에 함수선언 보다 함수 호출 코드를 먼저 배치해도 됨

// 호이스팅 시 var로 선언한 변수는 undefined로 초기화됨
console.log(num); // undefined 출력
var num = 2;

console.log(num); // 2 출력

// 일반 함수일 경우 호이스팅할 때 함수 전체(함수명, 함수바디?)가 통째로 호이스팅되기 때문에 위치에 상관없이 함수 호출 가능
// --> 재사용 될 기능에 주로 사용

// 익명함수는 선언부만 호이스팅됨. 선언 다음에 호출해야 함
// --> 한 번만 사용하는 기능에 사용
// --> 메모리 관리에 효과적. 한 번만 사용되는 함수일 경우 불필요한 시간 동안 메모리를 차지하지 않음

// 익명함수 선언 전 호출 --> 실행안됨
// h1();
// Uncaught ReferenceError: Cannot access 'h1' before initialization

let h1 = function () {
  console.log("익명함수");
};
h1(); // "익명함수" 호출됨

// 일반함수 선언 전 호출 --> 실행됨
h2(); // "일반 함수" 호출됨

function h2() {
  console.log("일반 함수");
}
h2(); // "일반 함수" 호출됨

// -------------------------------------------------------

let funArr = [1, 2, 3, 4, 5, 6, 7, 20, 302, 320];

// map을 이용하여 funArr안의 요소를 3제곱한 값을 fun2Arr배열에 넣어보기
let fun2Arr = funArr.map(function (item) {
  return item ** 3;
});
console.log(fun2Arr);

let funArr3 = [];

// funArr안의 요소를 숫자에서 문자열로 변환한 값을 funArr3배열에 넣어보기
funArr.forEach(function (item) {
  funArr3.push(String(item));
});
console.log(funArr3);

let c1 = funArr3.filter(function (item) {
  return item.indexOf("2") >= 0;
});
console.log(c1);

// filter 함수를 사용하여 funArr4의 요소 안에 띄어쓰기가 있는 문자열이 있다면 funArr5배열에 push
// funArr4의 요소 중 소문자만 뽑아서 funArr6배열에 push
let funArr4 = ["KadfFdfd dfF", "dfdfDfdfs Df", "df D", "dfDd"];
let funArr5 = [];
let funArr6 = [];

funArr4.filter(function (item) {
  if (item.split(" ")[1]) {
    funArr5.push(item);
  }

  let k = item.split("");
  let j = "";

  k.forEach(function (i) {
    if (i === i.toLowerCase()) {
      j = j + i;
    }
  });
  funArr6.push(j);
});
console.log(funArr5);
console.log(funArr6);

// 문자열 속 공백 제거
// replace를 이용
let l = funArr4[0].replace(" ", "");
// console.log(funArr4[0]);
console.log(l);

// split, join 이용
let m = funArr4[0].split(" ").join("");
console.log(m);

// 전개 구문?
[...funArr4[0]].forEach((char) => console.log(char));
console.log([...funArr4[0]]);

let c = "";
[...funArr4[0]].forEach((char) => (c = c + char));
console.log(c);
