// 스프레드 연산자

let obj = { name: "a", content: "내용" };

let obj2 = obj;
obj2.name = "kim";

// 객체는 주소를 참조하는 레퍼런스타입
// 둘 다 바뀜...
console.log(obj); //{name: 'kim', content: '내용'}
console.log(obj2); //{name: 'kim', content: '내용'}
console.log(obj == obj2); //true

// ... 스프레드 연산자 구문
let obj3 = { ...obj };
// console.log(obj); //{name: 'kim', content: '내용'}
// console.log(obj3); //{name: 'kim', content: '내용'}

// 값을 복사해서 새로운 객체를 만들어 준 것
console.log(obj == obj3); //false

obj3.name = "kim2";
console.log(obj); //{name: 'kim', content: '내용'}
console.log(obj3); //{name: 'kim2', content: '내용'}

// 스프레드 연산자를 사용하면 원본을 유지하고
// 작업을 진행할 수 있음
// 데이터베이스에서 값을 가져와서 검색 기능을 만든다 가정하면
// 모든 리스트를 가지고 있는 배열은 유지하되
// 검색으로 걸러낸 배열만 사용하고 싶을때

//
// 리엑트에서 많이 사용할 것
// 옵션 체이닝
// ES11에서 도입되었고
// 객체의 값을 호출할 때 안전성을 유지하면서 호출 가능
// 객체의 키 앞에 ? 구문을 추가해서 작성

let obj4 = { name: "a", content: "내용" };

// obj4?.name
// name의 키값이 있는지 확인하고 없으면 undefined를 던짐
// 오류가 나지 않게 방지해준다.

// 오류가 나지 않는 이유는 객체의 키값을 확인하고
// type에러가 나지 않게 방지해주기 때문
console.log(obj4?.age); //undefined

console.log(obj4?.name); //a

let obj5 = {
  name: "a",
  content: {
    age: 1,
  },
};

// node 환경에서 보여줄게(이렇게하면 에러???)
console.log(obj5.content.key);
