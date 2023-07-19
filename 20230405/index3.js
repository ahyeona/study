// 즉시 실행 함수 작성법
// 즉시 실행함수를 사용하는 이유는
// 한 번 실행시키고 사용하지 않을 것 같은 변수나 코드를
// 즉시 실행 함수로 만들고 호출하는 방식(변수나 함수명이 충돌하지 않게)

// 즉시 실행 함수 작성

// 즉시 실행 함수
// 전역 () 안에 익명함수처럼 생긴 구문
// 맨 뒤에 함수 실행식 써줘야함()
// 매개변수는 실행식 괄호에 전달하면됨

// (function ("매개변수로 사용할 이름") {
//   console.log("즉시 실행 함수");
//   let a = 5;
// })("전달할 매개변수");

// }());  <-- 교수님은 이렇게 치심

// console.log(a); //Uncaught ReferenceError: a is not defined

let a = 4;

function temp(b) {
  (function (c) {
    console.log("즉시 실행 함수");
    let a = 5;
    console.log(c); ////매개변수
  })(b);
}
temp("매개변수");
