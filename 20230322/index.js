// DOM 내용 추가

// 우리가 사용하는 div p h1 태그들

// DOM 트리
// DOM 트리 구조 한 번 보자

// DOM 트리의 기본 단위는 노드라고 함

// 문자를 태그 사이에 넣어서 태그를 추가하는 방법
// document.querySelector(".add_class").innerHTML = "<div>태그 내용</div>";

// 노드에 추가하는 방법
// div 태그를 생성하는 방법
// createElement 태그 생성해주는 메소드
// createElement(태그명)
let _div = document.createElement("div");
// 여기까지는 생성해서 _div 변수에 담겼고
// 생성된 태그는 메모리 공간에 있는 것
// 우리가 만든 값을 div가 가리킴(메모리값??)
console.log(_div);

// 생성한 태그에 내용을 넣고
_div.innerHTML = "<p>내용이</p><div>없냐</div>";

// 클래스 추가
_div.classList.add("new_tag");

// 태그를 추가하고 싶은 위치에 추가를 해줘야 트리에 추가되어 보인다.
// 원하는 위치에 추가해주자
// 사용해야할 메소드가 있는데

// append() 메소드
// 태그 추가

document.body.append(_div);

// 2초 뒤에? script 태그 밑?에 있던 _div가  div .add_class의 안쪽?으로 이동??함
setTimeout(() => {
  document.querySelector(".add_class").append(_div);
}, 2000);

// append 메소드는 원하는 위치에 태그를 추가할 수 있다
// 태그참조.append(생성한 태그) = 태그명 태그의 내용으로 생성한 태그가 추가됨

// innerHTML : 문자로 내용이 들어가서 보안이 좀 취약함
// append : DOM 트리의 노드이기 때문에 보안이 좋다. 문제가 없다. 태그 작업을 세분화 가능하다.

// 태그의 내용 전부 확인
console.log(_div.innerHTML);

// 태그의 내용에서 문자만 가져오고 싶다면
// innerText가 있음
// 태그 사이 문자만 가져온다

console.log(_div.innerText);

// button 태그 생성
let _button = document.createElement("button");
_button.innerHTML = "눌러봐";
// 태그를 만들고 우리가 사용하는 것처럼 그대로 사용하면 됨
// 내용을 추가해준 다음 원하는 위치에 태그를 넣어주면 됨

_button.onclick = function () {
  // 태그를 제거해보자
  //   _div.remove();
  // remove() 메소드가 _div 태그를 제거해준다.
  // 원하는 태그를 제거할 수 있다.

  // 태그의 자식 태그도 제거할 수 있다.
  // 태그의 자식태그는 removeChild 메소드를 사용
  //   let _div2 = document.querySelector("");
  console.log(_div);
  //   document.body.removeChild(_div);
  // _div 태그를 body의 내용에서 찾아서 제거해준다.
};

document.body.append(_button);

// onclick 이렇게 이벤트명으로 직접 함수를 대입해서 추가하는 방법
// 함수를 덮어씌운다.
// 또 다른 방법 더 있음

// 이벤트를 구독시킨다.
// onclick -> on만 빼면 됨
// onscroll -> on만 빼고 scroll
// addEventListener 메소드의 매개변수로 "구독할 이벤트 이름"
// 두번째 매개변수로 실행시킬 함수
_button.addEventListener("click", function () {
  console.log("나 클릭 구독 중");
});

_button.addEventListener("click", function () {
  console.log("나도 구독중");
});

// addEventListener 메소드는 이벤트를 누적시킬 수 있다. 추가가 가능하다는 얘기
// onclick은 이벤트를 덮어쓴다.

_button.onclick = function () {
  console.log("나 onclick 이벤트");
};

console.log(_button.onclick);
_button.onclick = function () {
  console.log("나 onclick 이벤트2");
};
console.log(_button.onclick);

// 이벤트들 뭐 있나?

// load - 페이지와 기타 요소들의 그릴 준비 로딩이 끝났을때

// on이 붙으면 어트리뷰트 방식(<div onclick = ""> 이렇게 추가한거? button.onclick = function)
window.onload = function () {};

// load 이벤트 구독
// addEventListener("이벤트의 타입", 함수의 내용)을 사용해서
// 이벤트를 구독해놓는다.
window.addEventListener("load", function () {
  // load 이벤트가 실행되면 내용 실행
});

// 어트리뷰트 방식
// onresize : 브라우저의 창 크기가 바뀌면 실행되는 이벤트
window.onresize = function () {
  console.log("창 사이즈 변환");
};

// 무슨 방식이지 어트리뷰트 방식 아님
window.addEventListener("resize", function () {});

// scroll : 사용자가 태그나 페이지에서 스크롤 했을 때
//          스크롤 값이 없으면 동작하지 않아요

// 태그의 이벤트로 원하는 이벤트를 구독하면 태그에서 그 이벤트가 발생할 때
// 그 태그에서 이벤트가 발생할 때 실행된다.

// 여기는 우리가 생성한 태그에서 scroll 이벤트에 구독
_div.onscroll = function () {
  // 스크롤 이벤트가 실행되면 우리가 추가할 기능
  console.log("스크롤 되고 있나");
};

// 여기는 body 태그에서 scroll 이벤트에 구독
document.body.onscroll = function () {};

//
// 키보드 이벤트들

// onkeydown : 사용자가 키보드를 눌렀을 때 누르자마자 (누르고 뗀 게 아니라 그냥 누르자마자)
window.onkeydown = function () {
  console.log("나 키보드 누르자마자");
};

// onkeyup : 사용자가 키보드를 누르고 뗀 순간(누르고 있다가 떼는순간)
window.onkeyup = function () {
  console.log("나 키보드 누르다가 떼[ㅁ");
};

// onkeypress : 키보드를 누르고 있을 때 (키를 누르고 있으면 계속 실행)
window.onkeypress = function () {
  console.log("키보드를 누르고 있는 동안");
};

// 필요한 때가 있나? 기능 생각하다가
// onkeydown 하는 순간 동작할 기능 하나
// 기능 둘 누르고 있는 동안 발생시킬 기능 onkeypress
// 근디 onkeydown 막고 onkeypress 해야 함.. 누르고 있는 동안 onkeydown도 적용되니까

//
// 마우스 이벤트
// click : 사용자가 해당 태그를 클릭했을 때 발생하는 이벤트
window.onclick = function () {
  //   console.log("나 클릭");
};

// dbclick : 더블클릭했을때 실행되는 함수
window.ondblclick = function () {
  //   console.log("더블클릭");
};

// mousedown : 마우스를 누르자마자 실행되는 이벤트
window.onmousedown = function () {
  //   console.log("마우스 키 다운");
};

// mouseup : 마우스를 누르다가 뗐을 때 실행되는 이벤트
window.onmouseup = function () {
  //   console.log("마우스 키 업");
};

// onmousedown과 onmouseup
// 마우스 키를 누르고 이동한 뒤 키를 뗐을 때
// 좌표로 계산해서 동작해야하는 기능을 만들 때 사용
// --> 슬라이드 구현 가능 (키 다운하고 마우스 움직여서 키 업하면 좌표 계산해서 슬라이드 되었다고 판단할 수 있음 --> 페이지 슬라이드 구현가능..)

// mousemove : 마우스가 태그 위에서 이동되는 동안
_div.onmousemove = function () {
  // _div 내에서
  //   console.log("마우스 이동 중입니다.");
};

let _box = document.querySelector(".box");

// mouseenter : 마우스가 태그위로 올려졌을 때 실행되는 이벤트
// 태그에 마우스를 올린 순간
// hover 생각남
_box.onmouseenter = function () {
  //   console.log("마우스가 올려짐");
};

// mouseleave : 마우스가 태그 위에서 나갔을 때 실행되는 이벤트
// hover 생각남
_box.onmouseleave = function () {
  //   console.log("마우스 나갔어");
};

// 기능을 hover처럼 추가할 수 있을 듯

//
// 개발할 때 pc, 모바일 이렇게 웹을 만들텐데
// 모바일 환경에서 실행되는 이벤트

// 모바일 터치
// touchstart : 화면을 터치한 순간
window.ontouchstart = function () {
  console.log("모바일 터치");
};

// touchend : 화면을 터치하다가 떼면
window.ontouchend = function () {
  console.log("모바일 터치하다가 뗌");
};

// touchmove : 화면을 터치하고 이동할 때(누른 상태로 이동)
window.ontouchmove = function () {
  console.log("터치하고 이동 중");
};

//

//
// 이벤트 실행될 때 매개변수로 해당 이벤트의 내용이 전달된다.
// click의 이벤트를 보자
_box.onclick = function (e) {
  // 이벤트의 내용들 이벤트가 실행되면 이벤트의 내용이
  // 값으로 넘어온다.
  console.log(e); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

  // 해당 이벤트가 일어난 타겟
  // 지금은 _box에 click이벤트가 일어나면 실행되는
  // 기능을 실행시켰고
  // e.target 클릭된 태그를 가져온다.
  console.log(e.target); // <div class="box">...</div>
};

// 마우스의 위치를 가져와봐야겠음
window.onmousemove = function (e) {
  // 타입이 뭐지
  // 이벤트의 타입을 확인해보자
  console.log(e.type); // mousemove

  // 해당 이벤트 일어나면 마우스의 좌표 x값,
  // 좌표값은 픽셀 단위
  // 0~브라우저 너비 크기
  console.log(e.pageX);
  // 이벤트 발생 시 마우스 좌표 y값
  // 0~브라우저 높이
  console.log(e.pageY);
};

// 키보드 입력
window.onkeydown = function (e) {
  console.log(e.target); // <body></body>

  // e.keyCode
  console.log(e.keyCode);
  // 아스키 코드 : 숫자로 표현된다 ascii
  // A를 입력하면
  if (e.keyCode == 65) {
    console.log("A키를 입력받았다");
  }
};

// 기본 동작을 취소하는 방법 (원래 submit 타입이면 새로고침되는데 이걸 제거함)
let _button2 = document.querySelector(".btn_class");
_button2.onclick = function (e) {
  // 기본 동작이 제거된다
  // 브라우저 상에서 기본 동작되는 기능을 제거해줄 수 있다.
  e.preventDefault();
};
