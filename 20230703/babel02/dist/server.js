"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// ES6 문법으로 작성

const app = (0, _express.default)();
app.listen(3000, () => {
  console.log("서버 열림");
});
