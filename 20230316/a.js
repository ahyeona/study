function a() {
  let x = "지역변수";

  function b() {
    console.log(x);
  }

  b();
}

a();
