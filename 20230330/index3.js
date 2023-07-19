// promise 객체
// 비동기 처리를 가능하게 해주는 객체

// node.js 사용 많이 할 건데
// 비동기 처리를 할 때 promise 객체를 사용한다.

function testPromise(num) {
  // new 키워드로 빈 객체를 만들고
  // Promise 객체 생성
  //전달하는 함수값에
  // resolve, reject 두 가지 매개변수를 받는데
  //resolve() 함수. 처리가 완료되면 반환
  // reject() 함수. 처리가 오류나면 반환
  return new Promise(function (res, rej) {
    try {
      if (num > 10) rej({ data: " 숫자 큼" });
      // if의 중괄호가 없으면 바로 밑 코드까지
      // 조건문 영역
      //   console.log(num);

      // 데이터를 받아온다고 가정
      // 데이터를 가져오는 시간이 좀 걸리는데
      // 데이터를 다 가져오고 작업을 진행시켜야 할 때
      setTimeout(function () {
        res(num + 10);
      }, num * 1000);

      //   console.log("실행1"); // 숫자가 커서 rej으로 반환해도 출력됨.. return처럼 반환되는 형식은 아닌듯?? resolve나 reject로 값을 넘겨주는거고 break, return이랑은 다른듯
    } catch (error) {
      //   console.log("실행2");
      rej(error);
    }
  });
}

testPromise(8)
  .then(function (data) {
    console.log(data);
    // 데이터를 가져오고 처리할 구문을 여기에 작성하면 됨
    // 데이터로 처리해야할 작업
    return testPromise(data);

    //   res로 반환한 값을 실행하면 then()메소드가 실행되고
    //   rej를 실행하면 catch()메소드가 실행된다.
  })
  .then(function (data) {
    //   성공
    console.log(data);
  })
  .catch(function (err) {
    //   실패
    console.log(err);
  });

//
//  then과 catch를 안 쓰면

// 같이 써도 작업은 돌아가지만 좋지 않은 버릇
// 절대로 같이 사용하지 말 것

// async await 구문

async function asyncFun() {
  // 웬만하면 try catch로 작업의 오류 예외상황을
  // 잡으면서 작업할 것
  try {
    // await 뒤에 Promise 객체
    let temp = await testPromise(5);
    //   기다리고 Promise 객체 res나 rej이 처리될 때까지
    console.log(temp);
    temp = await testPromise(temp);
    console.log(temp);
    //   await + promise : promise를 기다리고
    //   resolve 값을 반환한다.

    //   async await 짝이다
    //   같이 붙어다님
  } catch (error) {
    console.log(error);
  }
}
asyncFun();
