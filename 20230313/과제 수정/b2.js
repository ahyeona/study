
// 과제
// 1. 가위바위보 게임을 20판 (게임 시작하기 전에 돈 입력해서 거는데 2000원 이상으로 걸 수 있게
// 2000원 미만이면 다시 입력 -> 배팅금액 20000원 들고 시작 
// 2. 가위바위보 하고 묵찌빠 이기면 배팅한 금액의 *2로 판돈 줍니다. 
// 지면 마이너스 배팅한 금액의 *2
// 종료조건 20판 다 끝나면 or 돈 다 잃었을때
// 소지금이랑 몇 판 했는지 


let subText = "";
let userMoney = 20000;
let count = 0 


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


    let com = parseInt(Math.random() * 3);
    let conarr = ["가위", "바위", "보"];
    let conarr2 = ["찌", "묵", "빠"];
    let comitem;

    let p;
    let re = true;

    let firstPlay = true;
    let secondPlay = false;

    let play3 = true;
    while(play3) {

        // 첫번째 가위바위보 게임
        if (firstPlay) {
            console.log("가위바위보");
            com = parseInt(Math.random() * 3);
            comitem = conarr[com];
            p = prompt("가위, 바위, 보 입력하세요");

        } else if (secondPlay) {
            console.log("묵찌빠");
            com = parseInt(Math.random() * 3);
            comitem = conarr2[com];
            p = prompt("묵, 찌, 빠입력하세요");
        }


        // 비겼는데 첫번째 가위바위보일때
        if (comitem===p && firstPlay) {
            console.log("사용자와 컴퓨터가 ", p, "로 동일하므로 비겼습니다.");
            alert(`가위바위보 둘 다 ${p}`);

            p = prompt("가위, 바위, 보 입력하세요");
            com = parseInt(Math.random() * 3);
            comitem = conarr[com];

        } else if (comitem===p && secondPlay) { // 비겼는데 묵찌빠일때

            console.log("사용자와 컴퓨터가 ", p, "로 동일");

            if (re) {
                console.log("사용자 승");
                alert(`사용자 승`);
                // 금액 수정
                userMoney = userMoney + bMoney*2;

            } else {
                console.log("사용자 패");
                alert(`사용자 패`);
                // 금액 수정
                userMoney = userMoney - bMoney*2;
            }
            // count++;
            alert(`${userMoney}`);
            play3 =false; // 지금 while문 탈출
            // break;

        } else { //이제 가위바위보, 묵찌빠 진행
            switch (p) {
                case "가위":
                    firstPlay = false;
                    secondPlay = true;
                case "찌":
                    if (comitem==="바위" || comitem==="묵") {
                        console.log("졌습니다.");
                        re = false;
                    } else {
                        console.log("이겼습니다.");
                        re = true;
                    }

                    console.log("사용자 : ", p, "컴퓨터 : ", comitem);
                    alert(`사용자 : ${p} 컴퓨터 : ${comitem}`);
                    // play3 = false;
                    break;
        
                case "바위":
                    firstPlay = false;
                    secondPlay = true;
                case "묵":
                    if (comitem==="가위" || comitem==="찌") {
                        console.log("이겼습니다.");
                        re = true;
                    } else {
                        console.log("졌습니다.");
                        re = false;
                    }

                    console.log("사용자 : ", p, "컴퓨터 : ", comitem);
                    alert(`사용자 : ${p} 컴퓨터 : ${comitem}`);
                    // play3 = false;
                    break;
        
                case "보":
                    firstPlay = false;
                    secondPlay = true;
                case "빠":
                    if (comitem==="가위" || comitem==="찌") {
                        console.log("졌습니다.");
                        re = false;
                    } else {
                        console.log("이겼습니다.");
                        re = true;
                    }

                    console.log("사용자 : ", p, "컴퓨터 : ", comitem);
                    alert(`사용자 : ${p} 컴퓨터 : ${comitem}`);
                    // play3 = false;
                    break;
                    
                default:
                    if (firstPlay) {
                        p = prompt("가위, 바위, 보 중에서 하나 입력하세요");
                        
                    } else if (secondPlay) {
                        p = prompt("묵, 찌, 빠 중에서 하나 입력하세요");
                        
                    }
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





