// 과제
// 1. 가위바위보 게임을 20판 (게임 시작하기 전에 돈 입력해서 거는데 2000원 이상으로 걸 수 있게
// 2000원 미만이면 다시 입력 -> 배팅금액 20000원 들고 시작 
// 2. 가위바위보 하고 묵찌빠 이기면 배팅한 금액의 *2로 판돈 줍니다. 
// 지면 마이너스 배팅한 금액의 *2
// 종료조건 20판 다 끝나면 or 돈 다 잃었을때
// 소지금이랑 몇 판 했는지 

// 함수 이용해서 작성

// 가위바위보, 묵찌빠 게임을 실행하는 game() 함수
// 매개변수
// game : true / false (가위바위보/묵찌빠)
// win : true / false (이전 판 승자인지 패자인지)
// user : 이전 판에서 사용자가 제시한 것(가위/바위/보 묵/찌/빠)
// comp : 이전 판에서 컴퓨터가 제시한 것(가위/바위/보 묵/찌/빠)


// 중복되는 부분 수정

// 가위바위보, 묵찌빠 array 만들고 컴퓨터 랜덤 변수는 com로 통일

// 가위바위보 --> 가위?바위?보? --> 비겼을 경우 다시 실행
// 묵찌빠 --> 묵?찌?빠?  --> 비겼을 경우 승패

// let conarr = ["가위", "바위", "보"];
// let conarr2 = ["찌", "묵", "빠"];



let subText = "";
let userMoney = 20000;
let count = 0;
let bMoney;



let com = parseInt(Math.random() * 3);
let conarr = ["가위", "바위", "보"];
let conarr2 = ["찌", "묵", "빠"];
let comitem;

let p;


let winner;
let arr;

let play = true;


let gameName;
function game(game, win, user, comp) {

    while (play) {


        com = parseInt(Math.random() * 3);
        console.log(bMoney);
    
        // 첫판?
        if (game) {
            gameName = "가위바위보";
            comitem = conarr[com];
            p = prompt(`${gameName} 중 하나 입력하세요`);
            
        } else {
            gameName = "묵찌빠";
            p = prompt(`${gameName} 중 하나 입력하세요`);
            // comitem = conarr2[com];
            // p = user;
    
            switch (comp) {
                case "가위":
                    comitem = "찌";
                    break;
                case "바위":
                    comitem = "묵";
                    break;
                case "보":
                    comitem = "빠";
                    break;
            
            }
    
            switch (user) {
                case "가위":
                    p = "찌";
                    break;
                case "바위":
                    p = "묵";
                    break;
                case "보":
                    p = "빠";
                    break;
            
            }        
        }
    
        
        console.log(`${gameName}`);
        
    
         // 비겼는데 첫번째 가위바위보일때
        if (comitem==p && game) {
            alert("비겼는데 첫번째 가위바위보일때");
            console.log("사용자와 컴퓨터가 ", p, "로 동일하므로 비겼습니다.");
            alert(`가위바위보 둘 다 ${p}`);
            
    
        } else if ((comitem==p) && (!game)) { // 비겼는데 묵찌빠일때
            alert("비겼는데 묵찌빠일때");
    
            console.log("사용자와 컴퓨터가 ", p, "로 동일");
    
            if (win) { //전판에 이겼을 경우
                console.log("사용자 승");
                alert(`사용자 승`);
                // 금액 수정
                userMoney = userMoney + bMoney*2;
                console.log(`현재 돈 : ${userMoney}`);
    
            } else {
                console.log("사용자 패");
                alert(`사용자 패`);
                // 금액 수정
                userMoney = userMoney - bMoney*2;
                console.log(`현재 돈 : ${userMoney}`);
            }
    
    
            count++;
            alert(`${userMoney}`);
            console.log(`현재 돈 : ${userMoney}`);
            subText = `현재 돈 ${userMoney}`;
            return {"end": "yes", "userMoney" : userMoney, "winner" : win, "p": p, "comitem" : comitem};

        }
    
        else {
           
            // 가위바위보, 묵찌빠 진행
            if (game) { // game : true --> 가위바위보
                arr = conarr;
            } else {// game : false --> 묵찌빠
                arr = conarr2;
            }
    
            switch (p) {
                case arr[0]:  // 사용자 가위
                    if (comitem===arr[1]) { //사용자 가위, 컴퓨터 바위
                        console.log("졌습니다.");
                        winner = false;
                    } else {
                        console.log("이겼습니다.");
                        winner = true;
                    }
                    console.log(`사용자 : ${p}, 컴퓨터 : ${comitem}`);
                    alert(`사용자 : ${p}, 컴퓨터 : ${comitem}`);
                    game = false;
                    break;
    
                case arr[1]: // 사용자 바위
                    if (comitem===arr[2]) { //사용자 바위, 컴퓨터 보
                        console.log("졌습니다.");
                        winner = false;
                    } else {
                        console.log("이겼습니다.");
                        winner = true;
                    }
                    console.log(`사용자 : ${p}, 컴퓨터 : ${comitem}`);
                    alert(`사용자 : ${p}, 컴퓨터 : ${comitem}`);
                    game = false;
                    break;
    
                case arr[2]: // 사용자 보
                    if (comitem===arr[0]) { //사용자 보, 컴퓨터 가위
                        console.log("졌습니다.");
                        winner = false;
                    } else {
                        console.log("이겼습니다.");
                        winner = true;
                    }
                    console.log(`사용자 : ${p}, 컴퓨터 : ${comitem}`);
                    alert(`사용자 : ${p}, 컴퓨터 : ${comitem}`);
                    game = false;
                    break;
            
                default:
                    if (game) {
                        p = prompt("가위, 바위, 보 중에서 하나 입력하세요");
                    } else {
                        p = prompt("묵, 찌, 빠 중에서 하나 입력하세요");
                    }
    
                    break;
            }
            return {"end": "no", "userMoney":userMoney, "winner" : winner, "p": p, "comitem" : comitem, "com":com};
        }
    }


}







while (userMoney > 0 && count <= 20) {

    bMoney = parseInt(prompt(`${subText}\n 금액을 입력하세요(2000원 이상)`));

    if(isNaN(bMoney)) {
        subText = "숫자를 입력하세요.";
        continue; // 다시 입력
    }

    if(bMoney < 2000) {
        subText = `2000원 이상 입력`;
        continue; // 다시 입력
    }

    if(bMoney > userMoney) {
        subText = `현재 돈 ${userMoney}`;
        continue; // 다시 입력
    }


    let first;
    let a;
    let b;

    // 첫번째 가위바위보
    first = game(true, false, 0, 0); 
    console.log(first);
    userMoney = first.userMoney;

    // 묵찌빠 시작
    a = game(false, first.winner, first.p, first.comitem);
    // alert(a);
    if (a.end === "yes") {

    } else{
        do {
            b = game(false, a.winner, a.p, a.comitem);
        } while (b.end !== "yes");

    }


    if (userMoney <=0 || count >= 20) {
        alert(`돈 : ${userMoney}, 횟수 : ${count}`);
        break;
    }


    
}



