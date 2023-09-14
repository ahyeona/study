// 코딩테스트 문제 : 삼총사
const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results;
}

function solution(number) {
    var answer = 0;

    let arr=getCombinations(number, 3);
    arr.forEach((el)=> {
        let k = el.reduce((a,c) => a + c, 0);
        if (k==0) answer++;
    })

    return answer;
}