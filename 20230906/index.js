// 프로그래머스 문제 : 가장 가까운 같은 글자

function solution(s) {
    var answer = [];
    let obj = {};
    for (let i=0; i<s.length; i++) {
        if (obj[s[i]] !== undefined) {
            answer.push(i - obj[s[i]]);
            obj[s[i]] = i;
        } else {
            obj[s[i]] = i;
            answer.push(-1);
        }
    }

    return answer;
}