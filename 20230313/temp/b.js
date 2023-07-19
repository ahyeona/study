
// 과제
// 1. 가위바위보 게임을 20판 (게임 시작하기 전에 돈 입력해서 거는데 2000원 이상으로 걸 수 있게
// 2000원 미만이면 다시 입력 -> 배팅금액 20000원 들고 시작 
// 2. 가위바위보 하고 묵찌빠 이기면 배팅한 금액의 *2로 판돈 줍니다. 
// 지면 마이너스 배팅한 금액의 *2
// 종료조건 20판 다 끝나면 or 돈 다 잃었을때
// 소지금이랑 몇 판 했는지 


let subText = "";
let userMoney = 20000;
let count = 0;


while (userMoney > 0 && count <= 20) {
    
    let bMoney = prompt(`${subText}\n 금액을 입력하세요(2000원 이상)`);

    if(isNaN(bMoney)) {
        subText = "숫자를 입력하세요.";
        continue; // 다시 입력
    }

    if(bMoney < 2000) {
        subText = `2000원 이상 입력`;
        continue; // 다시 입력
    }

    if(bMoney > userMoney) {
        subText = `더 적은 돈 입력`;
        continue; // 다시 입력
    }


    // 가위바위보
    console.log("가위바위보");
    let com3 = parseInt(Math.random() * 3);
    conarr = ["가위", "바위", "보"];
    let comitem3 = conarr[com3];
    // console.log(comitem3);

    let p = prompt("가위, 바위, 보 입력하세요");
    let re = true;


    let play3 = true;
    while(play3) {

        if (comitem3===p) {
            console.log("사용자와 컴퓨터가 ", p, "로 동일하므로 비겼습니다.");
            alert(`가위바위보 둘 다 ${p}`);

            p = prompt("가위, 바위, 보 입력하세요");
            com3 = parseInt(Math.random() * 3);
            comitem3 = conarr[com3];

        } else {
            switch (p) {
                case "가위":
                    if (comitem3==="바위") {
                        console.log("졌습니다.");
                        re = false;
                    } else {
                        console.log("이겼습니다.");
                        re = true;
                    }
                    console.log("사용자 : ", p, "컴퓨터 : ", comitem3);
                    alert(`사용자 : ${p} 컴퓨터 : ${comitem3}`);
                    play3 = false;
                    break;
        
                case "바위":
                    if (comitem3==="가위") {
                        console.log("이겼습니다.");
                        re = true;
                    } else {
                        console.log("졌습니다.");
                        re = false;
                    }
                    console.log("사용자 : ", p, "컴퓨터 : ", comitem3);
                    alert(`사용자 : ${p} 컴퓨터 : ${comitem3}`);
                    play3 = false;
                    break;
        
                case "보":
                    if (comitem3==="가위") {
                        console.log("졌습니다.");
                        re = false;
                    } else {
                        console.log("이겼습니다.");
                        re = true;
                    }
                    console.log("사용자 : ", p, "컴퓨터 : ", comitem3);
                    alert(`사용자 : ${p} 컴퓨터 : ${comitem3}`);
                    play3 = false;
                    break;
                    
                default:
                    p = prompt("가위, 바위, 보 중에서 하나 입력하세요");
                    break;
            }
        }
    }



    
    // 묵찌빠
    let play1 = true;
    let second = true;

    while(play1) {


        console.log("묵찌빠");
        let com5 = parseInt(Math.random() * 3);
        conarr5 = ["묵", "찌", "빠"];
        let comitem5 = conarr5[com5];
        // console.log(comitem5);
        
        
        let p5;

        // 가위바위보 결과 가져오기
        if (second) {
            p5 = p;
            comitem5 = comitem3;

            if (p === "바위") {
                p5 = "묵";
            } else if (p === "가위") {
                p5 = "찌";
            } else {
                p5 = "빠";
            }


            if (comitem3 === "바위") {
                comitem5 = "묵";
            } else if (comitem3 === "가위") {
                comitem5 = "찌";
            } else {
                comitem5 = "빠";
            }

        } else {
            p5 = prompt("묵,찌,빠 입력하세요");
        }

        
        // 비겼을 경우
        if (comitem5===p5) {
            console.log("사용자와 컴퓨터가 ", p5, "로 동일");

            if (re) {
                console.log("사용자 승");
                alert(`사용자 승`);
                // 금액 수정
                userMoney = userMoney + bMoney*2

            } else {
                console.log("사용자 패");
                alert(`사용자 패`);
                // 금액 수정
                userMoney = userMoney - bMoney*2
            }
            // count++;
            alert(`${userMoney}`);
            play1 =false;
            // break;
        } else {
            switch (p5) {
                case "찌":
                    if (comitem5==="묵") {
                        console.log("졌습니다.");
                        re = false;
                    } else {
                        console.log("이겼습니다.");
                        re = true;
                    }
                    console.log("사용자 : ", p5, "컴퓨터 : ", comitem5);
                    alert(`사용자 : ${p5} 컴퓨터 : ${comitem5}`);
                    second=false;
                    break;
        
                case "묵":
                    if (comitem5==="찌") {
                        console.log("이겼습니다.");
                        re = true;
                    } else {
                        console.log("졌습니다.");
                        re = false;
                    }
                    console.log("사용자 : ", p5, "컴퓨터 : ", comitem5);
                    alert(`사용자 : ${p5} 컴퓨터 : ${comitem5}`);
                    second=false;
                    break;
        
                case "빠":
                    if (comitem5==="찌") {
                        console.log("졌습니다.");
                        re = false;
                    } else {
                        console.log("이겼습니다.");
                        re = true;
                    }
                    console.log("사용자 : ", p5, "컴퓨터 : ", comitem5);
                    alert(`사용자 : ${p5} 컴퓨터 : ${comitem5}`);
                    second=false;
                    break;
                    
                default:
                    p5 = prompt("묵,찌,빠 중에서 하나 입력하세요");
                    break;
            }
        }
    }



    count++;
    console.log(userMoney, count);
    alert(`돈 : ${userMoney}, 횟수 : ${count}`);

    if (userMoney <= 0 || count >= 20) {
        break;
    }
}





