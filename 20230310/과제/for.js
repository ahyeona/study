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