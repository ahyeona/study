// 오늘 콜백 함수
// 콜백 함수가 뭐지?
// 함수도 값이라 했는데

// 함수의 매개변수로 함수를 전달해서
// 내가 함수의 코드를 작성하다가 필요한 순간에 매개변수로 받은
// 함수를 실행시킨다.
// 콜백 함수를 한 번 만들어보자

function test(callBack1) {
  console.log("1번 작업 끝");
  console.log("2번 작업 끝");
  if (true) {
    callBack1();
  }
}

function test2() {
  console.log(" 나는 콜백함수야");
}

test(test2);

// 배열 메소드
let arr = [1, 2, 3, 4];
arr.map(function (i, v) {
  console.log(i);
  console.log(v);
});

// 배열 메소드 map을 흉내내기
// 우리가 만든 객체
let arr2 = {
  // arr2 객체 선언

  map: function (callBack) {
    // 함수.length 하면   // 함수의 매개변수 개수 알 수 있음
    // 매개변수 안받는 함수인데 매개변수 전달하면 터짐
    if (callBack.length == 1) {
      let a = 2;
      console.log("나는 map함수야 매개변수 한 개라고 알고있어 " + a + "결과야");
      callBack(a);
    } else if (callBack.length == 2) {
      let a = 2;
      let b = 3;
      console.log(
        "나는 map함수야 내가 받은 콜백 함수에는 매개변수 두 개를 넣는다고 전달받았어"
      );
      callBack(a, b);
    } else {
    }
  },
};

// arr2.map(function (a) {
//   console.log("나는 콜백 함수야 전달받은 매개변수는 " + a + "이거야");
// });

arr2.map(function (a, b) {
  console.log("나는 콜백 함수야 전달받은 매개변수는 ", a + b, "이거야", true);
  console.log(
    "나는 콜백 함수야 전달받은 매개변수는 " + a + b + "이거야" + true
  );
});

function temp(callBack) {
  if (callBack.length === 0) {
    callBack();
  } else if (callBack.length === 1) {
    let temp = "사과";
    callBack(temp);
  } else if (callBack.length === 2) {
    let temp = "딸기";
    let temp2 = "포도";
    callBack(temp, temp2);
  } else {
    console.log("매개변수 초과야 두 개까지만 받을 수 있음 Err");
  }
}

// 매개변수 0, 1, 2, 3개씩 넣어보기
function temp2(v, b) {
  console.log("난 콜백 함수야 " + v + "를 받았어", b + "도 같이 받았어");
}

temp(temp2);

// ----------

// 콜백 함수 한 번씩 만들자
// function 함수명 : 일반 함수
// 메소드 : 객체 안에 있는 함수
// 객체 안에 함수를 만들고 콜백함수를 만들면 된다.
// 키값은 원하는대로
// 매개변수 3개까지 받을 수 있는 함수를 만드는데
// 연습겸 하나 더
// 전달받은 콜백함수는 구구단을 보여주는 함수다.
// 구구단 기능을 보여주는 함수
// 매개변수 1개 받으면 2단을 보여주고
// 2개받으면 2단, 3단 다 보여주고
// 3개받으면 2,3,4단 다 보여주면 됨

let testObj = {
  testFun: function (callBack) {
    let a;
    let b;
    let c;
    if (callBack.length === 1) {
      console.log("매개변수 1개");
      callBack(a);
    } else if (callBack.length === 2) {
      console.log("매개변수 2개");
      callBack(a, b);
    } else if (callBack.length === 3) {
      console.log("매개변수 3개");
      callBack(a, b, c);
    } else {
      console.log("매개변수 1~3개까지만");
    }
  },
};

function ggFun(n) {
  console.log(n, "단");
  for (let i = 1; i <= 9; i++) {
    console.log(n, " * ", i, " = ", n * i);
  }
}

// 매개변수 1개
testObj.testFun(function (a) {
  ggFun(2);
});

// 매개변수 2개
testObj.testFun(function (a, b) {
  ggFun(2);
  ggFun(3);
});

// 매개변수 3개
testObj.testFun(function (a, b, c) {
  ggFun(2);
  ggFun(3);
  ggFun(4);
});

// 매개변수 4개
testObj.testFun(function (a, b, c, d) {
  console.log("매개변수 4개 콜백함수");
});

// --------------------------------
// --------------------------------
// --------------------------------

// function testFun0(a, b, c) {
//   if (this.legnth === 1) {
//     ggFun(2);
//   } else if (this.legnth === 2) {
//     ggFun(2);
//     ggFun(3);
//   } else if (this.length === 3) {
//     ggFun(2);
//     ggFun(3);
//     ggFun(4);
//   } else {
//     console.log("매개변수는 1~3개까지만");
//   }
// }

// let testObj2 = {
//   testFun2: testFun0,
// };
// testObj2.testFun2();
// console.log("매개변수");
// testObj2.testFun2(1);

// --------------------------------
// --------------------------------
// --------교수님코드--------------

// 객체 선언
let obj2 = {
  gugu: function (callBack) {
    switch (callBack.length) {
      case 1:
        callBack(2);
        break;
      case 2:
        callBack(2);
        callBack(3);
        break;
      case 3:
        callBack(2);
        callBack(3);
        callBack(4);
        break;

      default:
        console.log("매개변수 개수 확인해");
        break;
    }
  },
};

// 어떻게 만들어도 상관없지만
// 기능 단위로 함수를 만드는 습관은 가지는 게 좋음
function temp3(a, b, c) {
  for (let i = 1; i < 10; i++) {
    console.log(`${a} x ${i} = ${a * i}`);
  }
}

obj2.gugu(temp3);

// 콜백 중요하니까 오늘 정리 잘 해놓고 연습 공부 해야 함

// 함수가 실행되면 스택이라는 곳에 쌓인다고 했는데,

// 스택 : 후입 선출
// 큐 : 선입 선출

// 콜 스택 개념을 알아보자
// 스택은 데이터를 사용하기 위해서 잠시 저장해놓는것
// 데이터들을 쌓아놓는다고 보면 됨
// 후입 선출 마지막에 추가된 데이터부터 제거
// 우리가 이사를 갈때 상자에 짐 넣고 위에서부터 꺼낸다
// 함수를 실행 컨텍스트 함수를 실행하게 되면 스택에 추가되고
// 반환될때 스택에서 제거된다.
// 함수 실행 컨텍스트 : 함수가 실행될 때마다 생성됨 함수의 실행 정보를 가지고 있음
// 콜 스택은 함수가 실행되면 실행 컨텍스트 저장하는 스택의 구조
// 콜 스택은 컴퓨터의 메모리 크기나 운영체제에 따라 크기가 다름
// 콜 스택이 쌓이게 되어 크기가 초과되면 스택 오버플로우 에러 발생(더 이상 실행할 수 없음)
// 예) 함수를 무한으로 실행할 때 나올 수 있음

// 함수를 만들어보자
function fun1() {
  fun2();
}

function fun2() {
  fun3();
}

function fun3() {
  console.log("3번 함수 마지막으로 실행한 함수");
}

fun1();
// 자바스크립트 코드 전체를 실행하고 전역 실행 컨텍스트가 실행되고
// fun1 함수 실행 구문에서 fun1 함수의 실행 컨텍스트가 생성되고 ->
// fun2 함수 실행 컨텍스트 생성 -> fun3 함수 실행 컨텍스트 생성
// 이렇게 스택에 쌓이고
// 마지막에 추가된 fun3 함수의 실행 컨텍스트 제거 -> fun2 함수의 실행 컨텍스트 제거 ->
// fun1 함수의 실행 컨텍스트 제거
// 이렇게 제거됨
// 브라우저에서 확인

// 콜 스택 확인해보자
// 확인하는 방법 : 브라우저에서 개발자모드 열고 f12 눌러서 디버깅 모드 활성화(컨트롤 + f8)
// 함수나 코드 줄의 옆의 왼쪽에 코드 줄 번호 클릭하면 브레이크 포인트 찍히는데
// 포인트를 찍으면 코드가 실행되다가 그 포인트에 도달하면 잠시 실행을 멈춘다.
// 재생 버튼 누르면 다음 포인트가 있는 곳까지 실행하다가 또 멈춘다.
// 작업의 디버깅도 용이함

// 정리 잘해야 하고

// 일반함수를 알고 있음.. 못쓰고 있으면 계속 만들어보는게 중요함
// 일상에서 코드가 보이기 시작하면 개발자

// 화살표 함수
// function 함수명(){}
// 변수나 함수명 한글로 작성하지 말 것
// 지금은 자바스크립트이기 때문에 괜찮?

// 화살표 함수
// ES6에 새로 나온 함수의 방식
// ES6 템플릿 리터럴

// 우리가 사용하던 일반 함수의 모양과 다르게 생김
// => 화살표 모양으로 함수를 선언한다
// 선언 방식

let temp4 = () => {
  console.log("나는 화살표 함수야");
};

// 함수 실행
temp4();

// 화살표 함수는 일반 함수와 차이들이 있는데
// 함수에서 값을 반환할 때 return식을 사용해서 반환했는데
// return식 없이도 반환시킬 수 있다.
// 함수와 똑같이 매개변수는 괄호에 넣으면 된다.
let temp5 = () => 3 + 5;

let ab = temp5();
console.log(ab);

// 연결된 개념을 설명할 거라 머리가 아플 수 있음

// 제일 중요하고 큰 차이점 면접에서 질문으로 나올 수 있다.
// this라는 개념
// this 키워드 : 자바스크립트 객체를 참조하는 특별한 구문
// 일반 함수와 화살표 함수의 큰 차이는 this의 차이
// this가 가리키는 대상이 다르다
// 일반 함수 this : 함수가 실행될 때 위치(스코프)에서 this를 가져온다.(다이나믹 스코프)
// 화살표 함수 this : 화살표 함수 내부의 this는 화살표 함수를 선언한 위치에서 this를 참조한다.(렉시컬 스코프)

let d = () => {
  console.log("d 함수 실행");
  console.log(this);
};
d(); //window 객체 출력, 전역공간에서 선언되고 전역공간에서 호출된 화살표함수

function b() {
  console.log("b 함수 실행");
  console.log(this);
}
console.log("b함수 실행");
b(); //window 객체 출력, 전역공간에서 선언되고 전역공간에서 호출된 일반함수

let obj = {
  a: function () {
    console.log("obj.a - b함수 실행");
    b(); // window 객체 출력, 전역공간에서 선언되고 obj의 a 메소드에서 호출된 일반함수

    console.log(this); // obj 객체 출력
    console.log(this.abcde); //"abcde" 출력

    let c = () => {
      console.log("c 함수 실행");
      console.log(this);
    };
    console.log("obj.a - c함수 실행");
    c(); // obj 객체 출력, obj의 a 메소드에서 선언되고 호출된 화살표 함수

    console.log("obj.a - d함수 실행");
    d(); // window 객체 출력, 전역공간에서 선언되어 obj의 a 메소드에서 호출된 화살표함수

    console.log("obj.a - e함수 실행");
    function e() {
      console.log("e함수 실행");
      console.log(this);
    }
    e(); // window 객체 출력, obj의 a 메소드에서 선언되고 호출된 일반함수
  },
  abcde: "abcde",
};

console.log("obj.a 실행");
obj.a();

// 전역 공간에서 this를 쓰면
// window 객체
// BOM(브라우저 오브젝트 모델) : 브라우저를 객체 모델로 표현한 것
// BOM은 브라우저 기능들을 접근할 수 있는 객체
// window 객체
console.log(this); // window 객체 출력

// 비동기 함수
// 동기 함수

// 비동기 함수는 다른 코드들과 함께 동기적으로 실행되지 않음
// 동기 : 순차적으로 실행됨. 작업이 끝나고 다음 작업 진행 끝나고 다음 작업 진행
// 비동기 : 순차적으로 실행되지 않음. 작업을 하는 도중에도 다른 작업이 가능함
// nodejs 들어갔을때 더 알 수 있을 것   예) 서버에서 값을 가져오는 동안 페이지가 멈춰있지 않고
//  다른 작업들은 정상적으로 돌아간다. (서버에서 값을 가져오는 작업이 비동기)(페이지가 돌아가는게 동기)

// 비동기 함수는 뭐가 있을까
// setTimeout 비동기 함수고 매개변수를 2개 받고 첫번째 매개변수가 함수
// 두번째 시간 값을 숫자 타입으로 넘겨주면 됨
// 1000 == 1초
setTimeout(function () {
  console.log("나는 2초뒤에 실행됨. 비동기 함수에서 실행됨");
}, 2000);

console.log("나는 동기");

// 오늘 중요한 개념들만 모여있음

// let var const 꼭 써야한다고 했는데
// window 객체

let a = "";
function temp6() {
  let b = "";

  // 이것도 블로그에 정리
  // let var const 안쓰고 변수 선언하면
  // 검색하면 블로그 잘못알고있음 var가 아니라
  // window 키값으로 추가되어서(window.c가 됨)
  // 정말 큰일나고 찾을 수가 없음
  c = "aa";
}
temp6();

console.log(window.c); // aa 출력됨
console.log(c); // aa 출력됨

console.log(b);

// ---------------------------------
// ---------------------------------
// ---------------------------------
// ---------------------------------
// ---------------------------------
// ---------------------------------
// ---------------------------------

// this.alert("?");
// this.prompt("dfdf");
