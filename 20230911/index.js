// 코딩테스트 문제 : 햄버거 만들기

function solution(ingredient) {
    var answer = 0;
    let str = ingredient.join("");

    while(str.includes("1231")) {
        // let idx = str.indexOf("1231");
        // if (idx != -1) {
            let arr = str.split("1231");
            answer += (arr.length - 1);
            str = arr.join("");
        // }
        // else {
        //     break;
        // }




        // let idx = str.indexOf("1231");
        // if (idx != -1) {
        //     str = str.substring(0, idx) + str.substring(idx+4);
        //     answer += 1;
        // } else {
        //     break;
        // }
    }

    return answer;
}