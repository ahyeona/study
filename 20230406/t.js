function solution(n, m, section) {
  var answer = 0;
  let temp = null;
  let temp2 = null;
  let idx = 0;
  while (idx < section.length) {
    let t1;
    let t2;
    if (temp) {
      t1 = temp;
    } else {
      t1 = section[idx];
    }

    if (section.length == 0) {
      answer += 1;
      break;
    }

    if (temp2) {
      t2 = temp2;
    } else {
      idx += 1;
      t2 = section[idx];
    }

    if (m < t2 - t1) {
      // 작으면 또 다시 확인(작은지, 같은지)
      idx = section.find(function (x) {
        return x - t1 > m;
      });

      temp = section[idx - 1];
      answer += 1;
      temp2 = null;
    } else if (m == t2 - t1) {
      answer += 1;
      temp = null;
      temp2 = null;
    } else {
      //크면
      answer += 1;
      temp = t1;
    }
    idx += 1;
  }

  return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
