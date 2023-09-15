// 코딩테스트 문제 : [1차] 비밀지도
function solution(n, arr1, arr2) {
    let answer = [];

    for (let i=0; i < n; i++) {
        let str = "";
        let n1 = arr1[i].toString(2).padStart(n,'0');
        let n2 = arr2[i].toString(2).padStart(n,'0');

        for (let j=0; j<n; j++) {
            if (n1[j] == "1" || n2[j] == "1") {
                str += "#";
            } else {
                str += " ";
            }
        }

        answer.push(str);
    }

    return answer;
}