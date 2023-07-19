let popupBtn = document.querySelector(".popup-btn");
let popupEvent = document.querySelector(".event-btn");
let popupCookie = getCookie("event-popup");

function popupOpen() {
  let popup = document.querySelector(".popup-wrap");
  if (popup.classList.contains("is-on")) {
    popup.classList.remove("is-on");
  } else {
    popup.classList.add("is-on");
  }
}

popupBtn.addEventListener("click", popupOpen);
// popupOpen();

popupEvent.addEventListener("click", function () {
  console.log("이벤트");
  //   쿠키 추가

  //유지되는 쿠키 생성
  setCookie("event-popup", true, 30);
});

// String 출력
// 문자로 저장됨
// 코딩을 하면서 데이터를 저장할 때 문자열로 저장한다.
console.log(typeof getCookie("event-popup"));
// 1일 팝업 안보이게
// console.log(popupCookie);

// 쿠키값이 없으면 팝업이 작동하게! (있으면 안뜨고 없으면 뜨고)
// 쿠키값이 없으면 undefined
if (popupCookie == undefined) {
  popupOpen();
  // if (JSON.parse(popupCookie).value !== "true") {
  //   popupOpen();
  // }
}

function getCookie(c_name) {
  var i,
    x,
    y,
    ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
      return unescape(y);
    }
  }
}

function setCookie(c_name, value, time) {
  let date = new Date();
  date.setTime(date.getTime() + time * 1000);

  let str = c_name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  let str2 = getCookieTime(str);

  // 문자열로 데이터를 저장하는데
  // 값이 여러 개일 경우
  // 배열이나 객체를 사용
  // 여러 가지 값을 사용해야하기 때문에 객체의 모양으로 문자열을 전달하고
  // 문자열을 받아서 객체로 변환하여 사용

  document.cookie =
    c_name +
    "=" +
    `{"value" : "${value}", "time" : "${str2}" }` +
    ";expires=" +
    date.toUTCString() +
    ";path=/";
  //   console.log(getCookieTime());
  let value2 = getCookie("event-popup");
  console.log(JSON.parse(value2));
}

function getCookieTime(cookie) {
  console.log(cookie);
  // 쿠키 문자열을 받아서 배열로 변환
  let str = cookie.split(";");
  let str2 = str.find(function (i) {
    let temp = i.trim();
    return temp.startsWith("expires=");
  });
  if (str2) {
    let str3 = str2.trim();
    console.log(str3);
    //   쿠키의 시간을 받아서 시간의 정보들을 다루는
    //   Date 객체를 만들어줬다.
    return new Date(str3);
  } else {
    return null;
  }
}

//
// trim 메소드 : 문자열 양 끝의 공백을 제거
let a = "     a   b    ";
console.log(a.trim());

// startsWith 메소드 : 해당 문자로 시작하는지 여부
// 매개변수로 시작하는 문자열 전달해주면 된다.
let b = "abcd";
console.log(b.startsWith("abc"));

// // 시간의 차이를 구해서 값을 받아보자
// // 밀리초를 받아서 시간이 얼마나 남은건지 확인하는 함수
// // 시간 계산 할 때 언제 시간이 만료되는지 알고 있으면 됨
// // 지금 시간의 정보를 가지고 있는 Date 객체를 만들어서
// // 미래 시간의 밀리초와 지금 만든 Date 객체의 밀리초를 빼면
// // 차이값이 나오는데 그 차이값(밀리초)를 가지고 시간과 날짜와 분 초 이렇게 나타내주기만 하면 된다
// // times함수로 밀리초를 가지고 날짜 시간 분 초가 얼마나 남은건지
// function times(time) {
//   let _time = time;
//   // time은 밀리초
//   let day = Math.floor(time / (24 * 60 * 60 * 1000));

//   // 값을 바로 대입해서 사용
//   time %= 24 * 60 * 60 * 1000;
//   console.log(time);
//   //    일로 따지면

//   let hour = Math.floor(time / (60 * 60 * 1000));
//   time %= 60 * 60 * 1000;
//   //   시간으로 따지면

//   let min = Math.floor(time / (60 * 1000));
//   time %= 60 * 1000;
//   //   분

//   let sec = Math.floor(time / 1000);

//   //   초
//   console.log("날짜 : ", day);
//   console.log("시간 : ", hour);
//   console.log("분 : ", min);
//   console.log("초 : ", sec);

//   return day + "일 " + hour + "시간 " + min + "분 " + sec + "초";
// }

// 1000이 1초
let dateTemp = 100000;
times(dateTemp);

// 비동기 함수 setTimeout 이 함수는 매개변수로 전달한 시간 이후에 실행되는 함수
// setTimeout(() => {
//   // 1초뒤에 실행
// }, 1000);

//
// 비동기 함수
// 매초마다 동작하는 함수를 만들어보자
// 정한 시간마다 동작하는 함수
// 매개변수로 전달한 시간마다 동작한다.

// let date1 = new Date();
// date1.setTime(date1.getTime() + 100000);

// setInterval 제거 방법
let setTime = setInterval(() => {
  let date2 = new Date();
  //   // 값이 들어온 것 객체가 아니고
  //   let time = -date2.getTime() + date1.getTime();
  //   times(time);
  //   // 1초마다 실행
  let timeTag = document.querySelector(".popup-time");
  if (popupCookie != undefined) {
    let time = JSON.parse(popupCookie).time;
    let date = new Date(time);
    console.log(date);
    timeTag.innerHTML = times(popupTime(date, date2));
    // time.innerHTML = times(popupTime(date, date2));
  } else {
    timeTag.innerHTML = "시간 끝";
  }
}, 1000);

function popupTime(date1, date2) {
  return date1.getTime() - date2.getTime();
}

function times(time) {
  //   let sec = Math.floor(time / (24 * 60 * 60 * 1000));
  //   let min = Math.floor(time / (60 * 60 * 1000));
  //   console.log(sec);

  let day = Math.floor(time / (24 * 60 * 60 * 1000));
  // 받아온 시간에서 날짜가 하루 단위가 있으면 나눠서 값을 넣어주고
  // 일단위를 빼고
  time %= 24 * 60 * 60 * 1000;
  let hour = Math.floor(time / (60 * 60 * 1000));
  // 시간단위를 빼고
  time %= 60 * 60 * 1000;
  let min = Math.floor(time / (60 * 1000));
  // 분단위를 빼고
  time %= 60 * 1000;
  // 남은 초
  let sec = Math.floor(time / 1000);

  console.log(day);
  console.log(hour);
  console.log(min);
  console.log(sec);
  if (time < 0) {
    // setIntervel 지우는 방법
    // 지울 Intervel 함수 매개변수로 전달하면 된다.
    clearInterval(setTime);
    let timeTag = document.querySelector(".popup-time");
    timeTag.innerHTML = "";

    // ==========================================
    // 다시 팝업창 뜨게
    popupOpen();
    return "";
  }

  return `${day}일 ${hour}시 ${min}분 ${sec}초`;
}

//
// 복습
