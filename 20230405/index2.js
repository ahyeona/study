// 클로저

// 클로저란

// 내부 함수에서 외부 함수의 변수에 접근 할 수 있다.

function fun() {
  for (var i = 0; i < 5; i++) {
    debugger;
    // console.log(i);
    setTimeout(() => {
      console.log(i);
      debugger;
    }, i * 1000);
  }
  //   블록 스코프와 함수 스코프
  //   var는 함수 스코프 let은 블록 스코프
  //   자바스크립트 실행 컨텍스트 잘 짚고 가야함
  //   var로 선언한 변수는 함수 스코프를 가지고
  //   함수의 어느 곳에서든 접근 가능
  //   for문도 함수 내부에서 실행되고
  //   for문에 선언한 var 변수는 함수의 어디서든 접근 가능
  //   for문 안에서 비동기 처리 함수가 호출되고 for문은 이미 다 종료되고
  //   함수가 실행되기 때문에 전부 증가한 5가 출력되는 것
  //   5로 이미 증가되었고 함수스코프로 접근이 가능하기 때문에 5가 나온다

  // vscode에서 debugger 키워드를 작성하면
  // 브라우저에서 브레이크 포인트를 설정할 수 있다.
  // 개발자 모드에서 확인 가능
}

// fun(); // 5가 다섯번뜸

// 함수 스코프 : 변수가 선언된 함수에서 유효함
// 함수에서 선언된 변수는 함수가 호출되고 종료되면 해제됨

// 블록 스코프 : 변수가 선언된 블록에서 블록이 종료될 때 사라짐

function fun2() {
  // for (let i = 0; i < 5; i++) {
  //     // 블록 스코프

  // }

  if (true) {
    //   var는 함수 스코프
    // 함수 스코프에 선언된 것
    var a = 45;
    let b = 50; //블록 스코프로 let 선언
  }
  // 호출됨 접근됨 var 함수 스코프
  console.log(a); //45 출력 (var로 선언해서 함수 내부 어디서든 호출가능)

  // 호출 안됨 접근 안됨 let 블록 스코프
  //   console.log(b); // Uncaught ReferenceError: b is not defined
}

// fun2();

// 클로저라는 개념은 함수의 외부 변수와 변수 선언 기준으로 어디까지 변수를
// 활용할 수 있는지 정도 숙지

function fun3() {
  // 내부함수에서 외부함수의 변수를 사용
  let value = "";
  console.log("실행됨");
  function fun4() {
    if (value == "") {
      value = "클로저";
      return value;
    }
  }
  return fun4;
}

let closure = fun3();
let a = closure();
console.log(closure); //ƒ fun4() { ... }
console.log(a); //클로저

// 함수의 변수를 참조해주고 메모리상에 변수가 유지되도록 한다.
// fun4 함수가 fun3 함수의 value 변수를 참조하고 fun4 함수가 실행되면
// value를 선언 -> fun4 함수는 fun3의 실행 컨텍스트에 생성된 value 값을 변경할 수 있다.

// 자바스크립트가 함수를 생성할 때 함수나 변수 선언 위치를 기억해서
// 함수를 반환한 이후에도 참조 가능

// 복습 중요
