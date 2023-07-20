function solution(players, callings) {
  let c = [];

  callings.forEach(function (i, v) {
    let lastIndex = players.indexOf(i);
    let lastPlayer = players[lastIndex - 1];
    players[lastIndex - 1] = i;
    players[lastIndex] = lastPlayer;
  });

  //   // 이름 불린 횟수 구하기
  //   c = callings.reduce(function (a, v) {
  //     if (a[v] == undefined) {
  //       a[v] = 1;
  //     } else {
  //       a[v]++;
  //     }
  //     return a;
  //   }, {});

  //   for (const key in c) {
  //     let idx = players.indexOf(key);
  //     players.splice(idx, 1);
  //     players.splice(idx - c[key], 0, key);
  //   }

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
