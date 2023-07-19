// 우리가 제일 많이 사용할 구문
// 개발자는 객체를 잘 사용해야 함

// if문 비교문
if (true) {
    // 여기 있는 구문을 실행시키는 조건은
    // if () 괄호 안이 true인지 false인지에 따라서 실행시킴
    console.log();
    // 불이 꺼져있으면 실행될 일 자체가 없다.
    // 불이 켜져있으면 실행될 수도 있음

    // 여기 내용을 실행시키고 싶을 때도 있고, 실행시키고 싶지 않을 때도 있는데
    // 괄호에 연산자를 넣어주면 값을 비교하면서 실행시키거나
    // 실행 안되게 할 수 있음
}


let age = 5;
let age2 = 5;

// 내 나이 age
// age보다 age2 값이 크니까 true라서 if문 조건에 맞음
// if (age < age2) {
//     // 조건이 맞으니까 실행
//     console.log("내 나이가 작구나");
// }


// false면 실행시키고 싶은데

// else : if가 아닐때(if문의 조건이 false일때)
if (age < age2) {
    // 조건이 true면 실행
    console.log("내 나이가 작구나");
} else {
    // false면 else문 실행
    console.log("else문 실행");
}

// 참과 거짓 말고 비교
if (age < age2) {
    // age보다 age2가 더 커야 true 여기선 같은 값이니까 false가 나온다.
    console.log("나는 if문");
    // if문이 맞으면 이 코드 실행
}else if (age == age2) {
    // 5 == 5 값이 같음. true
    console.log("나는 else if문");

    // if문이 틀리면 여기로 와서 조건이 맞는지 확인 맞으면 실행
}else {
    console.log("나는 else문");
    // else if문의 조건도 맞지 않으면 else 실행
}


// 반복문 for문
// 여러 번 반복 실행해야할 구문이 있을 때 사용
// 반복문 중에 하나이고
let b = 9;

// 변수 선언, 값 확인, for문 안에 있는 구문을 실행하고, 값을 증가시킴
// 증가시킨 다음 비교하고 true면 구문 다시 실행
// 다시 실행 후에 증가시키고 비교문 확인
// 증가되다가 비교문이 false가 되면 그때 반복문 종료 
// 무한으로 반복시키면 사이트 터짐.. 안 됨(조건식 확인) 
for (let a = 1; a < b; a++) {
    console.log(a);
}





// 구구단 만들기
for (let i = 2; i <= 9; i++) {
    console.log(i + "단");
    for (let j = 1; j <= 9 ;j++) {
        console.log(i + "*" + j + "=" + i*j);
    }
}



// 1. 수상자 호출하기
// 전체 학생들의 배열 만들고
// 배열의 개수만큼 for문 반복하고 수상자 배열 안에 있는 학생은 콘솔로 호출 
let students = ["학생1", "학생2", "학생3", "학생4", "학생5", "학생6",
"학생7", "학생8", "학생9", "학생10"];

let award = ["학생1", "학생3", "학생10"];


// indexOf() 사용
for (let i=0; i < students.length; i++) {
    if (award.indexOf(students[i])>=0) {
        console.log(students[i]);
    }
}

// includes() 사용
for (let i=0; i < award.length; i++) {
    if (students.includes(award[i])) {
        console.log(award[i]);
    }
}

// 이중for문 사용
for (let i=0; i < students.length; i++) {
    for (let j=0; j < award.length; j++) {
        if (students[i]==award[j]) {
            console.log(students[i]);
        }
    }
}


// 2. 3의 배수 구하기
// 3의 배수 아니면 숫자를 보여주고 3의 배수일 경우 "짝" 문자열 보여주기
for (let i=1; i <= 60; i++) {
    if (i%3==0) {
        console.log("짝");
    } else {
        console.log(i);
    }
}


console.log(1+2+"="+1+2);
// 3=12로 출력됨

let num1 = 5;
let num2 = 5;
console.log(num2 + num1 / 5 + 5);
// 11
// 연산자 우선순위.....

console.log((num2 + num1) / (5 + 5));
// 1

