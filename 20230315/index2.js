let str = "가나다라마바사";

// 문자열 함수를 알아보자
// 문자열은 배열이 아님
// 하지만 인덱스로 값에 접근 가능
console.log(str.indexOf("다"));

// 문자열의 길이
console.log(str.length);

// 문자열 함수 slice
// 문자열을 잘라주는 역할
// 매개변수 두 개 전달
// 시작점과 끝점
// 첫 매개변수가 시작 지점 인덱스
// 두번째 매개변수가 끝나는 인덱스
// (첫번째 매개변수)~ (두번째 매개변수-1)인덱스까지 반환
// 두번째 매개변수의 직전까지!
console.log(str.slice(3, 6)); // 인덱스 3~5까지 반환

// 문자열 함수 split
// 매개변수로 전달한 값을 잘라내고 배열의 형태로 변경해준다.
// 빈 문자열이 들어가면 한 글자씩 다 잘라서 배열의 형태로 변경해준다.
console.log(str.split(" "));
console.log(str.split("다"));

// 문자열 함수로 대소문자 변경하는 함수들
let str2 = "abcdefg";
let str3 = "ABCDEFG";

// 대문자로 변경하는 함수부터 toUpperCase
console.log(str2.toUpperCase());

// 소문자로 변경하는 함수 toLowerCase
console.log(str3.toLowerCase());
