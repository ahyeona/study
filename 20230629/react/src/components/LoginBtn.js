// ES6 문법을 사용

// 전에는 require로 모듈을 가져왔는데
// ES6가 되면서 import가 생김

class LoginBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ isLogin: !this.state.isLogin });
        }}
      >
        {this.state.isLogin ? "Logout" : "Login"}
      </button>
    );
  }
}

// class LoginBtn2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogin: false,
//     };
//   }

//   render() {
//     return (
//       <button
//         onClick={() => {
//           this.setState({ isLogin: !this.state.isLogin });
//         }}
//       >
//         {this.state.isLogin ? "Logout" : "Login"}
//       </button>
//     );
//   }
// }

// nodejs에서는
// module.exports

//
// 내보낼 컴포넌트가 여러개 일 경우
// export { LoginBtn, LoginBtn2 };

// 단일
// 한 개만 내보낼 경우
export default LoginBtn;
