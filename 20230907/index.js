// 프로그래머스 문제 : 공원 산책

function go(x, y, current, park) {
    let move=true;
    if (current[1]+x < park[0].length &&
        current[1]+x >= 0 &&
        current[0]+y < park.length &&
        current[0]+y >= 0
       ) {
        if (x<0) {
            for (let i = current[1]; i >= current[1]+x; i--) {
                if (park[current[0]][i] === "X") {
                    move=false;
                    break;
                }

            }
        }
        if (x>0) {
            for (let i = current[1]; i <= current[1]+x; i++) {
                if (park[current[0]][i] === "X") {
                    move=false;
                    break;
                }

            }
        }
        if (y<0) {
            for (let i = current[0]; i >= current[0]+y; i--) {
                if (park[i][current[1]] === "X") {
                    move=false;
                    break;
                }
            }
        }
        if (y>0) {
            for (let i = current[0]; i <= current[0]+y; i++) {
                if (park[i][current[1]] === "X") {
                    move=false;
                    break;
                }

            }
        }
        if (move) {
            current = [current[0]+y, current[1]+x]
        }
    }
    return current;
}

function solution(park, routes) {
    var answer = [];

    let current;
    for (let i = 0; i < park.length; i++) {
        if (park[i].indexOf("S") !== -1) {
            current = [i, park[i].indexOf("S")];
        }
    }
    for (let i = 0; i < routes.length; i++) {
        switch(routes[i][0]) {
            case "N":
                current = go(0, -parseInt(routes[i][2]), current, park);
                break;
            case "S":
                current = go(0, parseInt(routes[i][2]), current, park);
                break;
            case "W":
                current = go(-parseInt(routes[i][2]), 0, current, park);
                break;
            case "E":
                current = go(parseInt(routes[i][2]), 0, current, park);
                break;
        }
    }

    return current;
}