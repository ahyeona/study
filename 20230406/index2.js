// 배열 메소드 좀 더 사용

// 배열 메소드가 제일 많이 사용됨

// Array.of(); //전달된 인자를 요소로 가지는 배열 생성
// 배열을 생성할 때 사용하는 메소드

const arr = Array.of(1, 2, 3, 4, 5, 6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// 배열의 원본 배열을 수정하는 메소드
// 결과값으로 새로운 배열을 반환시켜주는 것이 아니고
// 원본 배열을 수정하는 메소드
arr.push(2);
console.log(arr); //[1, 2, 3, 4, 5, 6, 2]

// 원본 배열 수정 안 됨. 새로운 배열로 반환됨
const result = arr.concat(5);
console.log(arr); //[1, 2, 3, 4, 5, 6, 2]
console.log(result); //[1, 2, 3, 4, 5, 6, 2, 5]

// 레퍼런스 타입
console.log(arr == result); //false

// 참조타입은 값을 비교하는게 아니고 주소를 비교한다.

let a = [1, 2, 3];
let b = a;
b.push(2);
console.log(a == b); //true <--같음
console.log(a); //[1, 2, 3, 2]
console.log(b); //[1, 2, 3, 2]

let cc = 5;
let dd = 5;
console.log(cc == dd); //true

let aa = [1, 2, 3];
let bb = [1, 2, 3];
console.log(aa == bb); //false

let aaa = [1, 2, 3];
let bbb = [...aaa]; // 값만 복사해서 새로운 배열을 만들어줌
bbb.push(2);
console.log(aaa == bbb); //false <--다름
console.log(aaa); //[1, 2, 3]
console.log(bbb); //[1, 2, 3, 2]

const food = ["apple", "orange"];
// food 배열에서 banana가 있는지 확인
if (food.indexOf("banana") === -1) {
  // 없으면 추가해라
  food.push("banana");
}
console.log(food); //['apple', 'orange', 'banana']

// ES7에 도입 includes
// banana 배열에 있으면 true 없으면 false
// console.log(food.includes("banana"));

// 있는지 없는지 확인할 때 사용하면 좋겠다
if (!food.includes("banana")) {
  //   없으면 추가해라
  food.push("banana");
}

// 배열에 추가할 때 push 메소드를 사용하는데
//자바스크립트에서는 index에러가 따로 뜨지 않기 때문에 정해진 사이즈가 없기 때문에
const arr2 = [1, 2, 3];

// 배열의 최대 인덱스는 개수-1
// 0 1 2

arr2[arr2.length + 1] = 3;
// 배열의 끝에 추가하지 않고 더 이후의 인덱스에 값을 추가하면
// 중간값들은 비어있다.(empty)
console.log(arr2); //[1, 2, 3, empty, 3]

//
// pop - 배열의 마지막 요소를 제거하는 메소드
// 원본이 수정됨
const arr3 = [1, 2, 3, 4, 5];
arr3.pop();
console.log(arr3); //[1, 2, 3, 4]

// shift - 첫번째 요소를 제거하는 메소드
// 원본이 수정됨
arr3.shift();
console.log(arr3); //[2, 3, 4]

// concat - 배열 이어붙일때 사용하는 메소드
// 원본 배열 수정안됨
// 예) 판매 상품들의 리스트가 있는데, 원본 배열을 수정하면 안되고
// 생활 가전 식품 리스트가 따로 있고
// 우리가 전체 상품 리스트를 뽑아서 전체 상품 페이지를 구성해야 할 때
// 원본은 유지하고 새로운 리스트를 만들 수 있다.
const arrr1 = [1, 2];
const arrr2 = [3, 4];
const arrr4 = arrr1.concat(arrr2);
console.log(arrr4); // [1, 2, 3, 4]

// 원본 배열의 중간 값을 제거 추가 하는 경우
// splice - 원본 배열의 중간 값을 제거/추가하는 경우 사용하는 메소드
// 첫번째 매개변수 - 시작 인덱스
// 두번째 매개변수 - 배열에서 제거할 요소의 수
// 세번째~ 매개변수 - 배열에 추가할 요소. 지정하지 않으면 제거하기만 함

const arr6 = [1, 2, 3, 4];
// 1,2 인덱스를 제거하고 20과 30의 값을 추가
const result2 = arr6.splice(1, 2, 20, 30);
console.log(arr6); //[1, 20, 30, 4]
// 함수의 반환은 제거한 요소들이 반환됨
console.log(result2); // [2, 3]

const arr7 = [1, 2, 3, 4];
const result3 = arr7.splice(1, 2);
console.log(arr7); //[1, 4] <-- 제거한 원본 배열(인덱스 1,2번의 값을 제거)
console.log(result3); //함수의 반환값으로 제거한 요소 [2, 3]

// 배열에서 특정 요소 제거 함수
const arr8 = [1, 20, 3, 1, 50, 6];
function remove(arr, item) {
  // 제거할 item의 인덱스
  // indexOf
  const index = arr.indexOf(item);
  if (index !== -1) {
    arr.splice(index, 1); // 해당 인덱스에서 한 개 제거
    // 그 인덱스에 있는 요소를 제거해준다.
    return arr;
  }
}
console.log(remove(arr8, 50)); //[1, 20, 3, 1, 6]

// 매개변수로 전달받은 범위의 아이템을 복사해서 배열을 반환해주는 함수
// slice - 원본배열 수정안됨
const arr9 = [1, 2, 3];
console.log(arr9.slice(0, 1)); //[1]
console.log(arr9.slice(1, 3)); //[2, 3]

// join 메소드 원본 배열의 모든 요소를 문자열로 변환
const arr10 = [1, 2, 3, 4];
const result4 = arr10.join();
console.log(result4); //1,2,3,4

// reverse 배열을 뒤집어주는 메소드
console.log(arr10.reverse()); //[4, 3, 2, 1]

// fill 메소드 ES6
// 인자로 전달받은 값을 배열의 처음부터 끝까지 채워줌
// 배열의 개수를 유지하되 값을 초기화해야할 때 사용
const arr11 = [1, 2, 3, 4, 5];
arr11.fill(1);
console.log(arr11); //[1, 1, 1, 1, 1]

// ES10
// [1,2,3,4,5,[4,4]] == [1,2,3,4,5,4,4]
// flat() 메소드가 배열의 뎁스를 맞춰줌. 1차배열로
// 배열 안에 배열이 있는데 한 개의 배열로 작업해야할때
// flat 메소드를 이용해서 하나의 배열로 만들어줄수있음
const arr12 = [1, [2, 3, 4], [3, 4]].flat(); // 한 뎁스씩 올려서 맞춰줌
console.log(arr12); //[1, 2, 3, 4, 3, 4]
const arr13 = [1, [2, [3]], [2, [5]]].flat(2); // 매개변수로 뎁스의 개수를 넣어주면
console.log(arr13); // [1, 2, 3, 2, 5]
const arr131 = [1, [2, [3]], [2, [5]]].flat();
console.log(arr131); //  [1, 2, Array(1), 2, Array(1)]

const arr14 = [[[[[[1]]]]]].flat(Infinity); // Infinity 매개변수로 작성하면 뎁스가 몇개든 다 꺼내줌
console.log(arr14); //[1]
