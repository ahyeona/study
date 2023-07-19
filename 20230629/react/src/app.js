// ES6 문법
// {LoginBtn}
// ./components/LoginBtn에서
// export {LoginBtn} 이렇게 작성했을 경우
// import {LoginBtn} from "./components/LoginBtn";

// 한 개만 내보냈을 경우
// Login명?(이름)으로 사용할 것
import Login from "./components/LoginBtn";

// 루트 요소 가상 DOM으로 설정
// 루트 설정
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Login></Login>);
// root.render(<Login />);
