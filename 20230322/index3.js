// 쿠키랑 세션, 로컬 스토리지

// 쿠키는 해당 pc에 남아있다.

// 쿠키 : 웹사이트를 방문하고 사용자의 pc에 기록할 간단한 데이터
// pc에 저장해두었다가 값을 호출해서 사용할 수 있다.
// 브라우저가 종료되어도 남아있다.

// 세션 : 브라우저가 동작되는 동안에 남아있는 데이터
// 상태같은 내용을 다룰 때 사용한 예) 로그인 되어있는 상태
// 브라우저의 종료시점까지 유지된다.

// document 객체 안에 있다.
console.log(document.cookie);

// 쿠키 구조
// 키와 값이 있다.
// 문자열로 저장하면 된다.

// name : 쿠키의 이름(키)
// value : 값
// time : 유효시간
function createCookie(name, value, time) {
  // 처음 필요한 것 쿠키의 지속 시간
  // 쿠키 유효 기간
  // 시간과 날짜 년도 정보 제공해주는 객체를 만들 수 있다
  // 생성자로 구현이 가능하다. new 뭘 생성?
  // Date

  // 현재 시간 정보 가진 객체 만듦
  let date = new Date();
  console.log(date);

  // getTime : 현재 시간
  console.log(date.getTime() + time * 24 * 60 * 60 * 1000);
  // 지금 시간에서 + 얼마나 쿠키를 유지할지
  // 추가해줄것
  // 쿠키가 제거될 시간을 구해서
  // 값을 만들어놓고
  // 만료 시간

  // set get
  // set : 변경할 때 네이밍으로 많이 사용한다.
  // get : 정보를 호출할 때
  // 객체 만들어서 정보를 가져오는 경우 메소드는 get을 쓰고
  // setTime 메소드

  // 하루 이후 시간?
  date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000);

  // 쿠키를 추가하는 방법
  // 기본 규격
  // 쿠키명=값;expires+만료일+";path=/"
  // path = / 페이지의 경로에 대한 설정 쿠키를 다루는 경로
  // toUTCString 메소드 날짜 시간 표시 방법을 변경해준다.
  console.log(date.toUTCString()); // Wed, 22 Mar 2023 04:47:30 GMT

  // 날짜 형태를 변경해서 Wed, 22 Mar 2023 04:47:03 GMT 이런식으로
  document.cookie =
    name + "=" + value + ";expires" + date.toUTCString() + ";path=/";
}

// 쿠키값 불러와서 true면 이벤트 팝업 안띄우고 만료되었으면정보가없겠죠?아닌가 그러면 이벤트팝업띄우고

// 하루동안 유지되는 쿠키
// createCookie("이벤트 팝업", "true", 1);
// createCookie("팝업2", "두번째 쿠키", 2);
console.log(document.cookie);

function getCookie() {
  // = 제거하고 배열로 변경
  let value = document.cookie.split("=");

  console.log(value);
  return value[1];
}

console.log(getCookie());

// 쿠키를 가져오는거 문자열 ? 위 코드는 야매로 짰는데

// 쿠키함수를 작성해보자
// 정규식이 포함되긴 하는데 지금은 무시해도 된다
// 다들 정규식은 간단한 것만 사용하고 필요한 내용이 생기면 찾고 하면 편해서
// 찾아서 작성하는 경우가 많음

function getCookie2(name) {
  // match 메소드
  // 매개변수로 정규식전달
  let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  console.log(value);
  return value ? value[2] : null;
}

// 쿠키를 제거하는 함수 (제일 쉬움)
// 날짜를 지나게 하면 됨
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01, Jan 1999 00:00:10 GMT;";
}

deleteCookie("이벤트 팝업2");
console.log(getCookie2("이벤트 팝업"));
console.log(getCookie2("이벤트 팝업2"));

//
//
// 로컬 스토리지
// 로컬 스토리지 : 브라우저에 데이터를 저장하는 방법들 중 하나
// pc에 데이터가 저장되고
// 쿠키와 세션과 다른 점 만료일이 없음. 만료 기간이 없다

// 로컬 스토리지 쉽다
// 브라우저 기능을 사용해야 하니까 window 객체 안에 있는 메소드를 사용
// getItem 메소드가 값을 호출할 때 사용한다.
// getItem() 메소드는 매개변수로 "키값"
// window.localStorage.getItem();

// setItem 메소드는 값을 키와 함께 저장시켜준다.

// window.localStorage.setItem("user_id", "soo");
// let a = window.localStorage.getItem("user_id");
// console.log(a);

//
// 쿠키, 로컬 스토리지 이런 저장소에 민감한 값을 저장하면 안된다.
// 보안 이슈

// 오늘 내용도 어려운게 정상이기 때문에 조금만 노력합시다
