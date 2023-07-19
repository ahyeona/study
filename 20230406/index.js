// 이터러블 이터레이터

// Set, Map

// Set은 배열에 중복되지 않는 값을 저장할 수 있다.
// 중복되지 않는 유일한 값들
// 배열에는 중복값이 저장될 수 있는데 set은 중복안됨

// 배열은 요소의 순서가 의미있음 set은 의미없음
// 배열은 인덱스로 접근하는데 set은 인덱스로 접근 안됨

// Set : ES6.. 값으로만 이루어져 있고 중복값은 허용하지 않음

// Set

const s = new Set();

// 요소를 추가하는 방법
// 중복값은 허용하지 않음

// 메서드 사용해서
s.add("one");
s.add("one"); // 중복값이라 추가안됨
s.add("two");
s.add("three");
console.log(s); //Set(3) {'one', 'two', 'three'}

const arr = [1, 2, 3, 4, 5];
// 생성 단계에서 배열을 생성자 함수에 전달
const ss = new Set(arr);
console.log(ss); //{1, 2, 3, 4, 5}

// has - 값을 가지고 있는지 확인하는 메소드
console.log(ss.has(2)); //true

// delete - 요소를 제거하는 메소드
ss.delete(2);
console.log(ss); //Set(4) {1, 3, 4, 5}

// // 모든 값을 제거하는 메소드
// ss.clear();
// console.log(ss); //Set(0) {size: 0}

// forEach - 이터러블 반복자
ss.forEach(function (i) {
  console.log(i);
});

// SetIterator 객체로 반환
// 이터러블에 이터레이터를 반환시켜준다.
const temp = ss.entries();
console.log(temp); //SetIterator {1 => 1, 3 => 3, 4 => 4, 5 => 5}
console.log(temp.next().value); //[1, 1]

//
// Map 키와 밸류를 저장하는데
// 키값을 객체로도 할 수 있음

// Map : ES6부터 추가됨. 키와 밸류를 한쌍으로 저장하고
// 중복된 키값은 허용하지 않음
// iterator를 통해 Map 객체 내부를 순회할 수 있음

// Map

const map = new Map();

// 값을 추가
// Map은 값을 추가할 때 키와 같이 한 쌍으로 추가해야함

// set - 키와 값을 추가
// 중복되는 키를 허용하지 않는다.
map.set("one", 1);
map.set("two", 2);

// two 키에 마지막으로 값을 저장한 3이 뜸
map.set("two", 3);
console.log(map); //Map(2) {'one' => 1, 'two' => 3}

// 키를 저장하는 이유 - 키로 저장된 값을 호출하기 위해

// map - get 메소드로 값을 호출할 수 있음
console.log(map.get("one")); //1

// // delete - 삭제할 해당 키를 매개변수로 전달하는 메소드
// map.delete("one");
// console.log(map); //Map(1) {'two' => 3}

// map 사이즈 확인(저장된 요소가 몇 개인지)
// 개수 확인 가능
console.log(map.size);

// map에 저장된 키값들을 전부 반환해주는 메소드
const keys = map.keys();
console.log(keys); //MapIterator {'one', 'two'} 출력

// map에 저장된 밸류들을 반환해주는 메소드
const values = map.values();
console.log(values); //MapIterator {1, 3}

// entries() : [키, 값] 형태의 정보들을 모아서 MapIterator 객체로 변환해서 반환함
const iter = map.entries();
console.log(iter); //MapIterator {'one' => 1, 'two' => 3}

console.log(iter.next()); //{value: Array(2), done: false}
console.log(iter.next().value); // ['two', 3]

// 키 정보만 출력시키게 for of 문으로 작성
for (const iterator of keys) {
  // 이터레이터 요소가 끝날때까지 반복하면서 요소를 보여준다.
  console.log(iterator);
}

// 값만 보여주자
for (const iterator of values) {
  // 이터레이터 요소가 끝날때까지 반복하면서 요소를 보여준다.
  console.log(iterator);
}

// 키와 값을 전부 보여주자
// 구조 분해 할당
for (const [key, value] of map.entries()) {
  console.log(`키는 ${key}, 값은 ${value}`);
}

// 키와 값을 호출
map.forEach(function (value, key) {
  console.log(`키는 ${key}, 값은 ${value}임`);
});
