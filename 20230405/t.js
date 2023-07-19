var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
  console.log(arr);
}

for (var index in arr) {
  //   console.log(arr);
  console.log(arr[index]()); // 5 5 5 5 5
}

//---------------

let arr2 = [];
for (var i = 0; i < 5; i++) {
  arr2[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}

for (var index in arr2) {
  console.log(arr[index]);
  console.log(arr2[index]()); // 01234
}

for (var i = 0; i < 15; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
