
for (let i = 0; i < 10; i++) {
    if (i%3 == 0) {
        console.log(i);
        console.log("주말 잘 쉬었니? 공부는 하셨나요?");

    }
    
}

// 컴파일 언어와 인터프리터 언어
// 개념

// 컴파일러 언어 : 프로그램 코드를 컴파일해서 컴퓨터가 알아들을 수 있는 
// 기계어로 번역해준다. 소스코드 전체를 한 번에 번역하고 실행 파일을 만들어서 실행해준다.
// 장점 : 파일의 크기가 큰데 실행속도가 빠르다.
// 실행하기 전에 전체 코드를 번역해서 오류를 미리 알 수 있다.
// 대신 번역 과정 시간이 좀 걸린다.
// C, C++, Java, Python 등등

// 인터프리터 언어 : 프로그램 코드를 한 줄씩 읽으면서 번역과 실행을 한다.
// 장점 : 프로그램 실행 도중에 동적으로 소스코드 수정이 가능하다.
// 실행하는 크기가 작고 소스 코드의 수정이 용이하다. 그래서 디버깅하기 편하다.
// 소스코드가 실행될 때마다 번역과 실행을 반복해서 속도는 좀 느리다.
// 오류를 실행 중에 발견할 수 있다.
// JavaScript 등등

// 논리 연산자 ||, &&
/* 
    || 논리합(OR)

    a || b --> a나 b 둘 중에 하나라도 참이면 참
    0 || 0 --> false
    1 || 0 --> true
    0 || 1 --> true
    1 || 1 --> true

    && 논리곱(AND)
    a && b --> a와 b 둘 다 참이어야 참
    0 && 0 --> false
    1 || 0 --> false
    0 || 1 --> false
    1 || 1 --> true

*/

let a = false;
let b = true;
console.log(a || b); 
// console.log(true || false);
console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

let c = true;
let d = true;
console.log(c && d);

let text = "집에 가고싶다";
let age = 21;
// true || false 
if (text === "집에 가고싶다" || age === 20) {
    console.log("집에 가고싶거나 나이가 20");
}

// 삼항 연산자
// 한 줄로 코드들을 표현할 수 있다. 잘 쓰면 편한데
// 가독성이 많이 떨어져서 본인도 읽기가 힘들 수 있다.(많이 사용하지 마세요)

// 조건 ? (앞의 조건이 참일 때) : (앞의 조건이 거짓일때)
console.log(1>2 ? "이건 참" : "이건 거짓");

//  3>4 ? "두번째 참" : "두번째 거짓" <-- 1<2가 참일 때 
console.log(1<2 ? 3>4 ? "두번째 참" : "두번째 거짓" : "이건 거짓");
// 3번만 들어가도 읽기 힘들다.

// control + 스페이스바 : 자동완성


// 조건문 if 반복문 for

// switch 조건문

// switch ("값을 여기에 넣으세요") {
//     case 1: // if 부분이구나
        
//         break;
//     case 2: // else if
//         break;
//     case 3: // else if
//         break;
//     case 4: // else if
//         break;
//     default: // else
//         break;
// }


// if () {
    
// }else if () {
    
// }else {
    
// }

let month = 10;
let monthName = "";
switch (month) {
    case 1:
        
        break;
    case 2:
        
        break;
    case 3:
        
        break;
    case 4:
        
        break;
    case 5:
        
        break;
    case 6:
        
        break;
    case 7:
        
        break;
    case 8:
        
        break;
    case 9:
        
        break;
    case 10:
        // 여기가 동작되는 이유는 10case부터 실행시키는데
        // break 문이 있기 때문에 여기만 실행된 것
        // break 문이 없으면 10case에 들어와서 밑으로 break문이 있을때까지 실행
        // monthName = "";
        // break; // break문
    case 11:
        // 값이 11이면 여기를 실행
        monthName = "November";
        break;
    case 12:
        
        break;

    default:
        break;
}
console.log(monthName);

switch (1) {
    case 1:
        console.log("첫번째 case문");
        // break;
    case 2:
        console.log("두번째");
        // break;
    case 3:
        console.log("세번째");
        // break;

    default:
        console.log("여기까지가 끝");
        break;
}

// while 반복문 무한히 돌아간다.
// while("값이 true 무한으로 돌아간다. false 값을 변경해주어야 반복문이 멈춘다.")
// break문으로 반복을 종료시켜줄 수 있다.
// while (true) {
//     if ("멈추는 조건") {
//     break;   // 조건이 맞을 때 반복을 끝낸다.
//     }
// }

// let num = 1;
// while (num !== 5) {
//     console.log(num); // 1 2 3 4
//     num++;
// }


let num2 = 1;
while (true) {
    console.log(num2); // 1 2 3 4
    num2++;
    if (num2 === 5) {
        break;
    }
}

// 사용자가 브라우저에 값을 간단히 입력받을 수 있는 상태창을 띄워준다.
// prompt 간단한 입력값을 받아올 수 있다.
// let value = prompt("값을 입력해보시오.");
// console.log("value : ", value);

// let inputNum = prompt("첫번째 숫자 입력");
// let inputNum2 = prompt("두번째 숫자 입력");

// prompt에 입력받은건 문자열
// 숫자가 필요
// 숫자로 형태를 변환시켜주는 작업 필요
// 형태를 변환시켜주는 함수 사용
// 형변환
// parseInt("숫자 정수로 변경할 변수나 값");
// Number("숫자로 변경할 변수나 값");
// 다른 형태의 type을 number type으로 형변환 시켜준다.

// 2 + 3 = 23; (문자끼리 더하면 뒤로 붙음..)
// 2 + 5 = 5;

// let result = parseInt(inputNum) + Number(inputNum2);

// console.log("결과는 : ", result);

// let value = prompt("1~5 사이의 숫자를 입력");
// let play = true;
// while (play) {
//     switch (value) {
//         case "1":
//             console.log("1번 눌렀네 집에 가");
//             play = false;
//             break;
//         case "2":
//             console.log("2번 눌렀네 점심 먹으러 가");
//             play = false;
//             break;
//         case "3":
//             console.log("3번");
//             play = false;
//             break;
//         case "4":
//             console.log("4번");
//             play = false;
//             break;
//         case "5":
//             console.log("5번");
//             play = false;
//             break;
    
//         default:
//             console.log("1~5 눌러");
//             value = prompt("1~5 사이의 숫자를 입력하라고");
//             break;
//     }
// }

// 어렵다.. 연습해야겠다.. 모두가 거쳐가는 연습
// 컴퓨터랑 가위바위보.. 
// 3개 중에 선택을 할 수 있는데 컴퓨터는 자동으로 어떻게 선택하지?

// 자바스크립트에서 랜덤값을 구할 수 있는 친구
Math.random(); // 0~1까지의 랜덤수
// parseInt() 사용해서 정수로 변환하고 값이 너무 작으니까 곱해줘야 함
// 1 ~ 100
console.log(parseInt(Math.random() * 99 + 1));

// 0, 1, 2
console.log(parseInt(Math.random() * 3));
// 0 == 가위, 1 == 바위, 2 == 보

// 가위바위보 만들어보기

// 1. 컴퓨터 랜덤값 --> Math.random()
// 2. 사용자의 입력값을 변수에 저장해야 할 것 같음
// 3. 다른 값을 입력하면 다시 반복시켜야겠다.
// 4. 조건문은 switch문


// console.log("가위바위보");
// let com = parseInt(Math.random() * 3);
// console.log(com);

// let p = prompt("가위, 바위, 보 입력하세요");
// let play2 = true;
// while(play2) {

//     if ((p==="가위" && com===0) || (p==="바위" && com===1) || (p==="보" && com===2)) {
//         console.log("사용자와 컴퓨터가 ", p, "로 동일하므로 비겼습니다.");
//     }

//     switch (p) {
//         case "가위":
//             switch (com) {
//                 // case 0:
//                 //     console.log("가위");
//                 //     console.log("사용자 : 가위, 컴퓨터 : 가위로 비겼습니다.");
//                 //     break;
//                 case 1:
//                     console.log("바위");
//                     console.log("사용자 : 가위, 컴퓨터 : 바위로 졌습니다.");
//                     break;
//                 case 2:
//                     console.log("보");
//                     console.log("사용자 : 가위, 컴퓨터 : 보로 이겼습니다.");
//                     break;
//                 default:
//                     break;
//             }
//             play2 = false;
//             break;

//         case "바위":
//             switch (com) {
//                 case 0:
//                     console.log("가위");
//                     console.log("사용자 : 바위, 컴퓨터 : 가위로 이겼습니다.");
//                     break;
//                 // case 1:
//                 //     console.log("바위");
//                 //     console.log("사용자 : 바위, 컴퓨터 : 바위로 비겼습니다.");
//                 //     break;
//                 case 2:
//                     console.log("보");
//                     console.log("사용자 : 바위, 컴퓨터 : 보로 졌습니다.");
//                     break;
//                 default:
//                     break;
//             }

//             play2 = false;
//             break;
//         case "보":
//             switch (com) {
//                 case 0:
//                     console.log("가위");
//                     console.log("사용자 : 보, 컴퓨터 : 가위로 졌습니다.");
//                     break;
//                 case 1:
//                     console.log("바위");
//                     console.log("사용자 : 보, 컴퓨터 : 바위로 이겼습니다.");
//                     break;
//                 // case 2:
//                 //     console.log("보");
//                 //     console.log("사용자 : 보, 컴퓨터 : 보로 비겼습니다.");
//                 //     break;
//                 default:
//                     break;
//             }

//             play2 = false;
//             break;
            
//         default:
//             p = prompt("가위, 바위, 보 중에서 하나 입력하세요");
//             break;
//     }
// }








// // 비기는 경우 if문으로 이기거나 지는 경우 else문에서 switch문으로 처리
// console.log("가위바위보");
// let com = parseInt(Math.random() * 3);
// console.log(com);

// let p = prompt("가위, 바위, 보 입력하세요");
// let play2 = true;
// while(play2) {

//     if ((p==="가위" && com===0) || (p==="바위" && com===1) || (p==="보" && com===2)) {
//         console.log("사용자와 컴퓨터가 ", p, "로 동일하므로 비겼습니다.");
//         play2 =false;
//         // break;
//     } else {
//         switch (p) {
//             case "가위":
//                 if (com===1) {
//                     console.log("사용자 : 가위, 컴퓨터 : 바위로 졌습니다.");
//                 } else {
//                     // com==2
//                     console.log("사용자 : 가위, 컴퓨터 : 보로 이겼습니다.");
//                 }
//                 play2 = false;
//                 break;
    
//             case "바위":
//                 if (com===0) {
//                     console.log("사용자 : 바위, 컴퓨터 : 가위로 이겼습니다.");
//                 } else {
//                     // com==2
//                     console.log("사용자 : 바위, 컴퓨터 : 보로 졌습니다.");
//                 }
//                 play2 = false;
//                 break;
    
//             case "보":
//                 if (com===0) {
//                     console.log("사용자 : 보, 컴퓨터 : 가위로 졌습니다.");
//                 } else {
//                     // com==1
//                     console.log("사용자 : 보, 컴퓨터 : 바위로 이겼습니다.");
//                 }
//                 play2 = false;
//                 break;
                
//             default:
//                 p = prompt("가위, 바위, 보 중에서 하나 입력하세요");
//                 break;
//         }
//     }
// }







// 배열 이용
console.log("가위바위보");
let com3 = parseInt(Math.random() * 3);
conarr = ["가위", "바위", "보"];
let comitem = conarr[com3];
console.log(comitem);


let p = prompt("가위, 바위, 보 입력하세요");
let play3 = true;
while(play3) {

    if (comitem===p) {
        console.log("사용자와 컴퓨터가 ", p, "로 동일하므로 비겼습니다.");
        play3 =false;
        // break;
    } else {
        switch (p) {
            case "가위":
                if (comitem==="바위") {
                    console.log("졌습니다.");
                } else {
                    console.log("이겼습니다.");
                }
                console.log("사용자 : ", p, "컴퓨터 : ", comitem);
                play3 = false;
                break;
    
            case "바위":
                if (comitem==="가위") {
                    console.log("이겼습니다.");
                } else {
                    console.log("졌습니다.");
                }
                console.log("사용자 : ", p, "컴퓨터 : ", comitem);
                play3 = false;
                break;
    
            case "보":
                if (comitem==="가위") {
                    console.log("졌습니다.");
                } else {
                    console.log("이겼습니다.");
                }
                console.log("사용자 : ", p, "컴퓨터 : ", comitem);
                play3 = false;
                break;
                
            default:
                p = prompt("가위, 바위, 보 중에서 하나 입력하세요");
                break;
        }
    }
}














