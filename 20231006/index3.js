// 프로그래머스 문제 : 2016년
// https://school.programmers.co.kr/learn/courses/30/lessons/12901#


function solution(a, b) {
    var answer = '';
    let day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];

    let date = 0;
    for (let i = 1; i<a; i++) {
        switch(i) {
            case 2:
                date += 29;
                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                date += 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                date += 30;
                break;
        }
    }

    date += b;
    answer = day[date % day.length-1!=-1 ? date % day.length-1 : day.length-1];

    return answer;
}