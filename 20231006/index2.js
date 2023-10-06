// 프로그래머스 문제 : 명예의 전당(1)
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
    let answer = [];
    let temp = [];

    for (let i = 0; i < score.length; i++) {
        temp.push(score[i]);
        temp.sort((a,b)=>a-b);
        if (i < k) {
            answer.push(temp[0]);
        } else {
            answer.push(temp[temp.length - k]);
        }
    }
    return answer;
}