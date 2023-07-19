// 정규 표현식(RegExp) 객체
// 문자의 패턴을 검색하기 위해 사용하는 문자
// 예) 회원가입 email id 주소 같은 형식으로 입력하기 위해
// 문자의 패턴을 정의하는데 유용

// 정규 표현식 메소드
/*
search(), replace(),

test() : 정규표현식과 일치하는 문자가 있으면 true 반환
*/

// 정규 표현식

// 첫번째 방법 정규 표현식 선언
let reg1 = /a/;

// 두번째 방법
let reg2 = new RegExp("a");

// 위처럼 이렇게 정규표현식을 만드는 이유는
// 규칙을 가진 문자열을 찾기 위해서

let tempReg = /[3,6,9]/;
// [] 내부 중의 한 개 -> 3 or 6 or 9
// 그 중 하나

let tempReg1 = /[0-9]/;
// 0-9 이렇게 작성하면
// 0부터 9까지라는 뜻

let str = "Hello JavaScript Program...";
// search 해당 문자열의 위치를 찾는 메소드
// 인덱스로
let regExp_search = str.search(/JavaScript/); // 6
// let regExp_search = str.search(reg2); // 7
console.log(regExp_search);

let regExp_replace = str.replace(/JavaScript/, "CSS");
// replace 첫번째 매개변수로 전달한 문자열을 찾아서
// 두 번째 매개변수로 전달한 문자열로 바꿔줌
console.log(str);
console.log(regExp_replace);

// test
// 정규식 패턴에 대한 문자열 검색
// 반환값은 true false로 반환
let reg3 = /JavaScript/;
let reg4 = /JavaScript2/;
// 문자열이 있으면 true
console.log(reg3.test(str)); // true
// 없으면 false
console.log(reg4.test(str)); // false

//
// 정규식 표현할 때 플래그
// 검색에 대한 옵션 설정

// i : 대소문자를 구분하지 않고 비교할 수 있음
// g : 전체 문자열을 정규식과 비교한다. 첫번째로 위치한 문자열이 있으면 비교를 중단
// m : 줄이 다른 여러 줄의 문자열을 정규 표현식으로 비교한다.

let str2 = "The best program is \n JavaScript..";

// 플래그는 정규식 뒤에 붙임
let temp1 = /javascript/i;

// match : 해당 문자열을 찾고 배열의 형태로 반환해준다.
console.log(str2.match(temp1)); //['JavaScript', index: 22, input: 'The best program is \n JavaScript..', groups: undefined]

// match 문자열을 찾지 못하면 null
let temp2 = /JavaScript/g;
console.log(str2.match(temp2)); //['JavaScript']

// 줄이 다른 문자열을 비교한다.
let temp3 = /JavaScript/m;
console.log(str2.match(temp3)); //['JavaScript', index: 22, input: 'The best program is \n JavaScript..', groups: undefined]

// 정규식의 패턴
// [abc] : 대괄호 안에 있는 문자를 찾는다.
// [0-9] : 대괄호 사이의 숫자를 찾는다.
// [x|y] : 문자 중에서 "|"로 분리된 문자 중 하나를 찾는다.

let str3 = "The best program is JavaScript and HTM12L...";

// 플래그를 여러 개 주고 싶으면 같이 작성하면 됨 g, i 같이 하려면 gi 이런식으로
let temp4 = /javaScript/gi;

// 전체 문자열에서 JavaScript만 가져왔다
console.log(str3.match(temp4)); //['JavaScript']

// 문자열 안에 해당하는 알파벳을 다 찾아온다(A부터 K까지)
let temp5 = /[A-K]/gi;
console.log(str3.match(temp5)); //['h', 'e', 'b', 'e', 'g', 'a', 'i', 'J', 'a', 'a', 'c', 'i', 'a', 'd', 'H']

// 분리된 문자열을 가져온다.
let temp6 = /p|x|z/gi;
console.log(str3.match(temp6)); //['p', 'p']

// 정규식에서 메타 문자
// 메타 문자는 숫자만 or 알파벳만 or 숫자를 제외하거나 등등의 속성을  표현한다.

/*
^문자 : 정규식으로 시작하는? 문자를 찾는다. ^뒤에 있는 문자로 시작하는 문자열을 찾는다.
문자$ : 정규식에서 끝나는 문자를 찾는다. $앞 문자로 끝나는 문자열을 찾는다.
\w : 모든 문자를 찾는다. 속하는 모든 문자 
\W : 알파벳 대소문자, 숫자 _문자를 제외한 모든 문자를 찾는다.
\d : 숫자를 찾는다.
\D : 숫자를 제외하고 찾는 것 (모든 문자를 찾는다.)
\s : 공백 문자를 찾는다.
\S : 공백 문자를 제외하고 찾는 것

*/

// 문자열이 T로 시작하는지 확인하고 T로 시작하니까
// 맞는 문자열 반환
let temp7 = /^T/gi;
// let temp7 = /^j/gi; // null
console.log(str3.match(temp7)); //['T']

let temp8 = /\d/gi;
console.log(str3.match(temp8)); // ['1', '2']

// 정규식을 사용할 때
// 정규식을 검색해서 사용
