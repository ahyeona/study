// 예외 처리문

// try-catch문 - 코드 실행 중 예외 상황이 발생해도
// 프로그램이 종료되지 않고 유지될 수 있다.

// try-catch
// 프로그램의 안정성을 높일 수 있음

try {
  // 오류 발생할 것 같은 코드
  //
} catch (error) {
  // 오류가 발생했을 때
  // 오류 메시지 error
}

try {
  if (5 != 6) throw "Errsdfs";
  // throw 에러 메시지를 던질 수 있다
} catch (error) {
  console.log(error); //Errsdfs
}

function myStr() {
  let devValue = document.querySelector(".dev").value;
  try {
    if (devValue == "") throw "비었음";
    devValue = Number(devValue);
    //   Number 숫자로 타입을 변경해주는 생성자함수
    // console.log(isNaN(devValue));
    if (isNaN(devValue)) throw "number아님";
    //   문자열이 들어가면 문자가 숫자로 변환될 수 없어서
    //   number가 아님

    //   오류 발생해도 프로그램 종료 안된다.
  } catch (error) {
    //   코드를 실행하다 error가 발생하면
    //   catch문을 실행하고 오류의 내용은
    //   error 매개변수에 들어온다.
    console.log(typeof devValue); //문자열 입력했을때 number
    console.log(devValue); //문자열 입력했을때 NaN
    document.querySelector(".message").innerHTML = error;
  }
}
