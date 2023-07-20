function dfdf(x) {
  let k = 0;
  let st = x.toString();
  console.log(st);
  for (let i = 0; i < st.length; i++) {
    k += parseInt(st[i]);
  }

  if (x % k == 0) {
    return true;
  }
  return false;
}

console.log(dfdf(14));
