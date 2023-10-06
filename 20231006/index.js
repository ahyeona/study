// 프로그래머스 문제 : 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840


function solution(answers) {
    var answer = [];

    let student1Arr = [1, 2, 3, 4, 5];
    let student2Arr = [2, 1, 2, 3, 2, 4, 2, 5];
    let student3Arr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let students = {1 : 0, 2: 0, 3: 0};

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == student1Arr[i % student1Arr.length]) {
            students[1] += 1;
        }
        if (answers[i] == student2Arr[i % student2Arr.length]) {
             students[2] += 1;
        }
        if (answers[i] == student3Arr[i % student3Arr.length]) {
             students[3] += 1;
        }
    }

    let arr = Object.values(students).sort((a,b) => b - a);

    for (const key in students) {
        if (arr[0] == students[key]) {
            answer.push(Number(key));
        }
    }

    return answer;
}